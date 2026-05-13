import { useParams, Link } from 'react-router-dom'
import { getCoach } from '../data/coaches'
import { Award, Calendar, Zap, ChevronLeft, Play, FlaskConical, Quote, Clock } from 'lucide-react'

const dayColors = {
  Monday: 'border-blue-500/30 bg-blue-500/5',
  Tuesday: 'border-green-500/30 bg-green-500/5',
  Wednesday: 'border-purple-500/30 bg-purple-500/5',
  Thursday: 'border-orange-500/30 bg-orange-500/5',
  Friday: 'border-red-500/30 bg-red-500/5',
  Saturday: 'border-yellow-500/30 bg-yellow-500/5',
  Sunday: 'border-gray-500/30 bg-gray-500/5',
}

export default function CoachDetail() {
  const { id } = useParams()
  const coach = getCoach(id)

  if (!coach) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Coach not found</h1>
        <Link to="/coaches" className="btn-primary inline-flex items-center gap-2">
          <ChevronLeft size={18} /> Back to Coaches
        </Link>
      </div>
    )
  }

  const days = Object.entries(coach.weeklyPlan)
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(coach.name + ' bodybuilding workout training')}`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Back nav */}
      <Link to="/coaches" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold mb-8 transition-colors">
        <ChevronLeft size={16} /> All Coaches
      </Link>

      {/* Hero */}
      <div className={`card overflow-hidden mb-10`}>
        <div className={`h-2 w-full bg-gradient-to-r ${coach.gradient}`} />
        <div className="p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${coach.gradient} flex items-center justify-center text-4xl sm:text-5xl font-black text-white shadow-xl shrink-0`}>
              {coach.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-black text-white">{coach.name}</h1>
                <span className={`tag mt-1 ${
                  coach.difficulty === 'Elite' ? 'bg-red-500/20 text-red-400' :
                  coach.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  <Zap size={12} className="mr-1" /> {coach.difficulty}
                </span>
              </div>
              <p className="text-amber-500 text-xl font-bold mb-4">{coach.nickname} · {coach.era}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {coach.titles.map((t) => (
                  <span key={t} className="tag bg-gray-800 text-gray-300">
                    <Award size={11} className="mr-1" /> {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Style', value: coach.trainingStyle },
                  { label: 'Split', value: coach.split },
                  { label: 'Frequency', value: `${coach.frequency} days/week` },
                  { label: 'Intensity', value: coach.intensity },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-800 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">{label}</p>
                    <p className="text-sm font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          {/* Quote */}
          <div className="card p-6">
            <Quote size={20} className="text-amber-500 mb-3" />
            <blockquote className="text-gray-300 italic leading-relaxed text-lg font-medium">
              {coach.quote}
            </blockquote>
            <p className="text-amber-500 text-sm font-bold mt-3">— {coach.name}</p>
          </div>

          {/* Philosophy */}
          <div className="card p-6">
            <h2 className="text-xl font-black text-white mb-3">Training Philosophy</h2>
            <p className="text-gray-400 leading-relaxed">{coach.philosophy}</p>
          </div>

          {/* Training Principles */}
          <div className="card p-6">
            <h2 className="text-xl font-black text-white mb-4">Core Principles</h2>
            <div className="space-y-4">
              {coach.principles.map((p) => (
                <div key={p.title} className="border-l-2 border-amber-500/40 pl-4">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span>{p.icon}</span> {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Science */}
          <div className="card p-6 border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical size={18} className="text-amber-500" />
              <h2 className="text-lg font-black text-white">The Science</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{coach.scienceBase}</p>
          </div>

          {/* YouTube Link */}
          <div className="card p-6">
            <h2 className="text-lg font-black text-white mb-3">Watch {coach.name.split(' ')[0]} Train</h2>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl transition-colors"
            >
              <Play size={18} fill="white" />
              Search YouTube Videos
            </a>
            <p className="text-xs text-gray-500 mt-2 text-center">Opens YouTube search for {coach.name}'s training</p>
          </div>
        </div>

        {/* Right column — weekly plan */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={20} className="text-amber-500" />
            <h2 className="text-2xl font-black text-white">Weekly Training Plan</h2>
          </div>

          {days.map(([day, plan]) => (
            <div key={day} className={`card border p-5 ${dayColors[day] || 'border-gray-800'}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-black text-white">{day}</h3>
                  <p className="text-amber-400 font-semibold text-sm">{plan.focus}</p>
                </div>
                {plan.exercises.length > 0 && (
                  <span className="tag bg-gray-800 text-gray-400">
                    {plan.exercises.length} exercises
                  </span>
                )}
              </div>

              {plan.exercises.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm">
                    {plan.focus.toLowerCase().includes('rest') ? '😴 Rest. Recovery is growth.' : '🚶 Light activity only.'}
                  </p>
                  {coach.id === 'mentzer' && day !== 'Monday' && day !== 'Thursday' && day !== 'Sunday' && (
                    <p className="text-amber-500/70 text-xs mt-1 italic">Mike: "Do NOT train. Your muscles are still growing."</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  {plan.exercises.map((ex, i) => (
                    <div key={i} className="bg-gray-950/60 rounded-xl p-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <span className="font-semibold text-white text-sm">{ex.name}</span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="tag bg-amber-500/20 text-amber-400 font-bold">
                            {ex.sets} × {ex.reps}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock size={11} /> {ex.rest}
                          </span>
                        </div>
                      </div>
                      {ex.note && (
                        <p className="text-xs text-gray-500 mt-1 italic">💡 {ex.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Best for */}
          <div className="card p-5 mt-4">
            <h3 className="font-black text-white mb-2">Best For</h3>
            <p className="text-amber-400 font-semibold">{coach.bestFor}</p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <h4 className="text-sm font-bold text-gray-300 mb-2">Combine with Macro Calculator</h4>
              <p className="text-sm text-gray-400 mb-3">Get your exact protein, carbs, and fat targets to fuel this program.</p>
              <Link to="/macros" className="btn-primary inline-flex items-center gap-2 text-sm">
                Calculate Your Macros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
