import { useState } from 'react'
import { Play, ChevronDown, ChevronUp, Target } from 'lucide-react'

const categoryColors = {
  chest: 'bg-red-500/20 text-red-400',
  back: 'bg-blue-500/20 text-blue-400',
  shoulders: 'bg-purple-500/20 text-purple-400',
  legs: 'bg-emerald-500/20 text-emerald-400',
  arms: 'bg-amber-500/20 text-amber-400',
  core: 'bg-orange-500/20 text-orange-400',
}

const difficultyColors = {
  beginner: 'bg-green-500/20 text-green-400',
  intermediate: 'bg-yellow-500/20 text-yellow-400',
  advanced: 'bg-red-500/20 text-red-400',
}

export default function ExerciseCard({ exercise }) {
  const [expanded, setExpanded] = useState(false)

  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(exercise.youtubeSearch)}`

  return (
    <div className="card overflow-hidden hover:border-gray-700 transition-all duration-200">
      <div className="relative h-44 overflow-hidden bg-gray-800">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className={`tag ${categoryColors[exercise.category]}`}>
            {exercise.category}
          </span>
          <span className={`tag ${difficultyColors[exercise.difficulty]}`}>
            {exercise.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{exercise.name}</h3>

        <div className="flex items-start gap-1 mb-3">
          <Target size={14} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-400">
            <span className="text-gray-300 font-medium">{exercise.primaryMuscles.join(', ')}</span>
            {exercise.secondaryMuscles.length > 0 && (
              <span className="text-gray-500"> + {exercise.secondaryMuscles.slice(0, 2).join(', ')}</span>
            )}
          </p>
        </div>

        <p className="text-xs text-gray-500 mb-4">{exercise.equipment}</p>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 text-red-400 font-semibold py-2 rounded-lg text-sm transition-all mb-3"
        >
          <Play size={14} fill="currentColor" />
          Watch Tutorial on YouTube
        </a>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-sm text-amber-500 hover:text-amber-400 font-semibold transition-colors"
        >
          <span>{expanded ? 'Hide Details' : 'Show Instructions & Tips'}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 border-t border-gray-800 pt-4 animate-fade-in">
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Instructions</h4>
              <ol className="space-y-1">
                {exercise.instructions.map((step, i) => (
                  <li key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-amber-500 font-bold shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-2">Pro Tips</h4>
              <ul className="space-y-1">
                {exercise.proTips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-emerald-500 shrink-0">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-2">Common Mistakes</h4>
              <ul className="space-y-1">
                {exercise.commonMistakes.map((mistake, i) => (
                  <li key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3">
              <h4 className="text-xs font-bold text-amber-500 mb-1">🔬 Science Note</h4>
              <p className="text-xs text-gray-400">{exercise.scienceNote}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
