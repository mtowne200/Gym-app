import { useState, useEffect } from 'react'
import { Calculator, FlaskConical, Save } from 'lucide-react'

const STORAGE_KEY = 'ironlegacy_macros'

const activityLevels = [
  { id: 'sedentary', label: 'Sedentary', desc: 'Desk job, little/no exercise', multiplier: 1.2 },
  { id: 'light', label: 'Lightly Active', desc: 'Light exercise 1–3 days/week', multiplier: 1.375 },
  { id: 'moderate', label: 'Moderately Active', desc: 'Moderate exercise 3–5 days/week', multiplier: 1.55 },
  { id: 'active', label: 'Very Active', desc: 'Hard exercise 6–7 days/week', multiplier: 1.725 },
  { id: 'veryActive', label: 'Extremely Active', desc: 'Physical job + hard training daily', multiplier: 1.9 },
]

const goals = [
  { id: 'leanBulk', label: 'Lean Bulk', desc: 'Gain muscle with minimal fat (+250 cal)', delta: 250, color: 'from-blue-600 to-blue-400', icon: '📈' },
  { id: 'bulk', label: 'Aggressive Bulk', desc: 'Maximum muscle gain (+500 cal)', delta: 500, color: 'from-purple-600 to-purple-400', icon: '🏋️' },
  { id: 'recomp', label: 'Body Recomposition', desc: 'Lose fat & gain muscle simultaneously (±0)', delta: 0, color: 'from-amber-600 to-amber-400', icon: '⚖️' },
  { id: 'cut', label: 'Moderate Cut', desc: 'Lose ~1 lb/week (−500 cal)', delta: -500, color: 'from-orange-600 to-orange-400', icon: '🔥' },
  { id: 'aggressiveCut', label: 'Aggressive Cut', desc: 'Lose ~1.5 lb/week (−750 cal)', delta: -750, color: 'from-red-600 to-red-400', icon: '⚡' },
]

function calculateBMR(weight, height, age, gender, unit) {
  const weightKg = unit === 'imperial' ? weight * 0.453592 : weight
  const heightCm = unit === 'imperial' ? height * 2.54 : height
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161
}

function calculateMacros(targetCals, weightLbs, goalId) {
  let proteinG, carbsG, fatG

  if (goalId === 'bulk' || goalId === 'leanBulk') {
    proteinG = Math.round(weightLbs * 1.0)
    const remaining = targetCals - proteinG * 4
    carbsG = Math.round((remaining * 0.6) / 4)
    fatG = Math.round((remaining * 0.4) / 9)
  } else if (goalId === 'cut' || goalId === 'aggressiveCut') {
    proteinG = Math.round(weightLbs * 1.25)
    const remaining = targetCals - proteinG * 4
    carbsG = Math.round((remaining * 0.35) / 4)
    fatG = Math.round((remaining * 0.65) / 9)
  } else {
    // recomp
    proteinG = Math.round(weightLbs * 1.0)
    const remaining = targetCals - proteinG * 4
    carbsG = Math.round((remaining * 0.5) / 4)
    fatG = Math.round((remaining * 0.5) / 9)
  }

  return {
    protein: proteinG,
    carbs: carbsG,
    fat: fatG,
    proteinCals: proteinG * 4,
    carbsCals: carbsG * 4,
    fatCals: fatG * 9,
    total: proteinG * 4 + carbsG * 4 + fatG * 9,
  }
}

function MacroPieBar({ macros }) {
  const total = macros.proteinCals + macros.carbsCals + macros.fatCals
  const proteinPct = Math.round((macros.proteinCals / total) * 100)
  const carbsPct = Math.round((macros.carbsCals / total) * 100)
  const fatPct = 100 - proteinPct - carbsPct

  return (
    <div className="space-y-3">
      {[
        { label: 'Protein', grams: macros.protein, cals: macros.proteinCals, pct: proteinPct, color: 'bg-blue-500' },
        { label: 'Carbohydrates', grams: macros.carbs, cals: macros.carbsCals, pct: carbsPct, color: 'bg-amber-500' },
        { label: 'Fat', grams: macros.fat, cals: macros.fatCals, pct: fatPct, color: 'bg-red-500' },
      ].map((m) => (
        <div key={m.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300 font-medium">{m.label}</span>
            <span className="text-white font-bold">
              {m.grams}g · {m.cals} kcal · {m.pct}%
            </span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${m.color} rounded-full transition-all duration-700`}
              style={{ width: `${m.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const coachNutritionTips = {
  leanBulk: {
    coach: 'Arnold Schwarzenegger',
    tip: 'Eat 5–6 smaller meals per day. Keep protein at every meal. Arnold ate 250g protein daily, often from whole foods: chicken, beef, eggs, and milk.',
  },
  bulk: {
    coach: 'Ronnie Coleman',
    tip: 'EAT. Ronnie ate 5,000–6,000 calories at peak. He ate huge quantities of rice, chicken, and beef. "Everybody wants to be a bodybuilder but don\'t nobody want to eat no heavy-ass food."',
  },
  recomp: {
    coach: 'Lee Haney',
    tip: 'Recomp is about consistency. Lee Haney prioritized quality food over quantity. Hit your protein every day, time carbs around workouts, and be patient.',
  },
  cut: {
    coach: 'Dorian Yates',
    tip: 'Dorian prepped for 12 weeks to compete. High protein, moderate carbs, carb cycling around training days. Never drop protein below 1g/lb during a cut.',
  },
  aggressiveCut: {
    coach: 'Mike Mentzer',
    tip: 'Mentzer believed in caloric precision. "Eat less than you burn by exactly 500–750 calories. Not one calorie more, not one calorie less. Discipline is the word."',
  },
}

export default function MacroCalculator() {
  const saved = (() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} } catch { return {} } })()

  const [unit, setUnit] = useState(saved.unit || 'imperial')
  const [weight, setWeight] = useState(saved.weight || '')
  const [height, setHeight] = useState(saved.height || '')
  const [age, setAge] = useState(saved.age || '')
  const [gender, setGender] = useState(saved.gender || 'male')
  const [activityLevel, setActivityLevel] = useState(saved.activityLevel || 'moderate')
  const [goal, setGoal] = useState(saved.goal || 'leanBulk')
  const [results, setResults] = useState(saved.results || null)
  const [error, setError] = useState('')
  const [saved_, setSaved_] = useState(false)

  const weightLabel = unit === 'imperial' ? 'Weight (lbs)' : 'Weight (kg)'
  const heightLabel = unit === 'imperial' ? 'Height (inches)' : 'Height (cm)'

  function saveToPhone(res) {
    const data = { unit, weight, height, age, gender, activityLevel, goal, results: res }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    setSaved_(true)
    setTimeout(() => setSaved_(false), 2000)
  }

  function handleCalculate() {
    setError('')
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseInt(age)

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
      setError('Please fill in all fields with valid positive numbers.')
      return
    }
    if (a < 13 || a > 100) { setError('Please enter a valid age (13–100).'); return }
    if (w < 50 || w > 1000) { setError('Please enter a valid weight.'); return }

    const bmr = calculateBMR(w, h, a, gender, unit)
    const activity = activityLevels.find((a) => a.id === activityLevel)
    const tdee = Math.round(bmr * activity.multiplier)
    const selectedGoal = goals.find((g) => g.id === goal)
    const targetCals = tdee + selectedGoal.delta

    const weightLbs = unit === 'imperial' ? w : w * 2.205
    const macros = calculateMacros(targetCals, weightLbs, goal)

    const res = { bmr: Math.round(bmr), tdee, targetCals, macros, selectedGoal, activity }
    setResults(res)
    saveToPhone(res)
    window.scrollTo({ top: document.getElementById('results')?.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-sm text-emerald-400 font-semibold mb-6">
          <Calculator size={14} />
          Precision Nutrition
        </div>
        <h1 className="section-title mb-3">Macro Calculator</h1>
        <p className="text-gray-400 text-lg">
          Mifflin-St Jeor equation · Science-based targets · Coach-approved ratios
        </p>
      </div>

      {/* Calculator Form */}
      <div className="card p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-black text-white mb-6">Your Stats</h2>

        {/* Unit toggle */}
        <div className="flex bg-gray-800 rounded-xl p-1 w-fit mb-6">
          {['imperial', 'metric'].map((u) => (
            <button
              key={u}
              onClick={() => { setUnit(u); setWeight(''); setHeight(''); setResults(null) }}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                unit === u ? 'bg-amber-500 text-gray-950' : 'text-gray-400 hover:text-white'
              }`}
            >
              {u}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Biological Sex</label>
            <div className="flex bg-gray-800 rounded-xl p-1">
              {['male', 'female'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${
                    gender === g ? 'bg-amber-500 text-gray-950' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 25"
              min="13"
              max="100"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">{weightLabel}</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'imperial' ? 'e.g. 180' : 'e.g. 82'}
              min="1"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">{heightLabel}</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'imperial' ? 'e.g. 70 (5\'10")' : 'e.g. 178'}
              min="1"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {unit === 'imperial' && (
              <p className="text-xs text-gray-500 mt-1">5'0"=60in · 5'6"=66in · 6'0"=72in</p>
            )}
          </div>
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-300 mb-3">Activity Level</label>
          <div className="space-y-2">
            {activityLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActivityLevel(level.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-left ${
                  activityLevel === level.id
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                }`}
              >
                <div>
                  <span className={`font-semibold text-sm ${activityLevel === level.id ? 'text-amber-400' : 'text-white'}`}>
                    {level.label}
                  </span>
                  <p className="text-xs text-gray-500">{level.desc}</p>
                </div>
                <span className="text-xs text-gray-500 font-mono">×{level.multiplier}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-300 mb-3">Your Goal</label>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => setGoal(g.id)}
                className={`flex flex-col gap-1 p-4 rounded-xl border text-left transition-all ${
                  goal === g.id
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                }`}
              >
                <span className="text-xl">{g.icon}</span>
                <span className={`font-bold text-sm ${goal === g.id ? 'text-amber-400' : 'text-white'}`}>
                  {g.label}
                </span>
                <span className="text-xs text-gray-500">{g.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="btn-primary w-full text-lg flex items-center justify-center gap-2"
        >
          <Calculator size={20} />
          {saved_ ? '✓ Saved to Phone!' : 'Calculate & Save My Macros'}
        </button>
        <p className="text-xs text-gray-600 text-center mt-2">Your stats are automatically saved on this device</p>
      </div>

      {/* Results */}
      {results && (
        <div id="results" className="space-y-6 animate-slide-up">
          {/* TDEE Summary */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'BMR (Base Rate)', value: results.bmr, sub: 'calories at rest', icon: '🛌' },
              { label: 'TDEE (Maintenance)', value: results.tdee, sub: `at ${results.activity.label}`, icon: '⚡' },
              { label: 'Daily Target', value: results.targetCals, sub: results.selectedGoal.label, icon: results.selectedGoal.icon },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-amber-500 mb-1">{stat.value.toLocaleString()}</div>
                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Macro breakdown */}
          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white mb-2">Your Macro Targets</h2>
            <p className="text-gray-400 text-sm mb-6">Daily targets optimized for <span className="text-amber-400 font-semibold">{results.selectedGoal.label}</span></p>

            <MacroPieBar macros={results.macros} />

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Protein', value: results.macros.protein, unit: 'g', color: 'bg-blue-500', desc: 'Muscle building & recovery', per: '4 cal/g' },
                { label: 'Carbohydrates', value: results.macros.carbs, unit: 'g', color: 'bg-amber-500', desc: 'Energy for training', per: '4 cal/g' },
                { label: 'Fat', value: results.macros.fat, unit: 'g', color: 'bg-red-500', desc: 'Hormones & health', per: '9 cal/g' },
              ].map((m) => (
                <div key={m.label} className="bg-gray-800 rounded-2xl p-5">
                  <div className={`w-3 h-3 ${m.color} rounded-full mb-3`} />
                  <div className="text-4xl font-black text-white mb-1">{m.value}<span className="text-xl text-gray-400">g</span></div>
                  <div className="text-sm font-bold text-white">{m.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.desc}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{m.per}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coach nutrition tip */}
          {coachNutritionTips[goal] && (
            <div className="card p-6 border-amber-500/20 bg-amber-500/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💪</span>
                <div>
                  <h3 className="font-black text-white">{coachNutritionTips[goal].coach} Says:</h3>
                  <p className="text-xs text-amber-500">Coach Nutrition Advice</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{coachNutritionTips[goal].tip}"</p>
            </div>
          )}

          {/* Sample meal plan */}
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-2">Sample Meal Distribution</h2>
            <p className="text-gray-400 text-sm mb-5">Spreading {results.targetCals.toLocaleString()} calories across 4 meals</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { meal: 'Meal 1 (Breakfast)', cals: Math.round(results.targetCals * 0.25), protein: Math.round(results.macros.protein * 0.25), carbs: Math.round(results.macros.carbs * 0.3), fat: Math.round(results.macros.fat * 0.2), example: 'Eggs, oatmeal, fruit' },
                { meal: 'Meal 2 (Pre-Workout)', cals: Math.round(results.targetCals * 0.25), protein: Math.round(results.macros.protein * 0.25), carbs: Math.round(results.macros.carbs * 0.3), fat: Math.round(results.macros.fat * 0.2), example: 'Rice, chicken, vegetables' },
                { meal: 'Meal 3 (Post-Workout)', cals: Math.round(results.targetCals * 0.3), protein: Math.round(results.macros.protein * 0.3), carbs: Math.round(results.macros.carbs * 0.25), fat: Math.round(results.macros.fat * 0.25), example: 'Protein shake, banana, rice' },
                { meal: 'Meal 4 (Dinner)', cals: Math.round(results.targetCals * 0.2), protein: Math.round(results.macros.protein * 0.2), carbs: Math.round(results.macros.carbs * 0.15), fat: Math.round(results.macros.fat * 0.35), example: 'Steak/salmon, sweet potato' },
              ].map((m) => (
                <div key={m.meal} className="bg-gray-800 rounded-xl p-4">
                  <h4 className="font-bold text-white text-sm mb-2">{m.meal}</h4>
                  <div className="flex gap-4 text-sm mb-2">
                    <span className="text-amber-500 font-bold">{m.cals} kcal</span>
                    <span className="text-blue-400">P: {m.protein}g</span>
                    <span className="text-amber-400">C: {m.carbs}g</span>
                    <span className="text-red-400">F: {m.fat}g</span>
                  </div>
                  <p className="text-xs text-gray-500">e.g. {m.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Science note */}
          <div className="card p-6 border-blue-500/20 bg-blue-500/5">
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical size={18} className="text-blue-400" />
              <h3 className="font-bold text-white">The Science Behind These Numbers</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="text-white font-medium">BMR:</span> Calculated using the Mifflin-St Jeor equation — the most accurate formula for non-athlete populations (validated by multiple studies).</p>
              <p><span className="text-white font-medium">Protein target:</span> {goal.includes('cut') ? '1.25g/lb' : '1.0g/lb'} — {goal.includes('cut') ? 'higher protein during cuts preserves muscle tissue (Helms 2014)' : 'optimal for muscle protein synthesis (Morton et al. 2018)'}.</p>
              <p><span className="text-white font-medium">Caloric adjustment:</span> {results.selectedGoal.delta > 0 ? `+${results.selectedGoal.delta}` : results.selectedGoal.delta} calories from maintenance. Each pound of fat = ~3,500 calories.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
