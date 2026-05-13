import { Link } from 'react-router-dom'
import { Award, ChevronRight, Zap } from 'lucide-react'

export default function CoachCard({ coach }) {
  return (
    <Link
      to={`/coaches/${coach.id}`}
      className="group card overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5"
    >
      <div className={`h-3 w-full bg-gradient-to-r ${coach.gradient}`} />

      <div className="p-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${coach.gradient} flex items-center justify-center mb-4 text-2xl font-black text-white shadow-lg`}>
          {coach.name.charAt(0)}
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
            {coach.name}
          </h3>
          <p className="text-sm text-amber-500 font-semibold">{coach.nickname}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {coach.titles.slice(0, 2).map((title) => (
            <span key={title} className="tag bg-gray-800 text-gray-300">
              <Award size={11} className="mr-1" />
              {title}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-1">Style</p>
            <p className="text-sm font-bold text-white">{coach.trainingStyle}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-1">Days/Week</p>
            <p className="text-sm font-bold text-white">{coach.frequency} days</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={`tag ${
            coach.difficulty === 'Elite' ? 'bg-red-500/20 text-red-400' :
            coach.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
            'bg-green-500/20 text-green-400'
          }`}>
            <Zap size={11} className="mr-1" />
            {coach.difficulty}
          </span>
          <span className="flex items-center gap-1 text-amber-500 text-sm font-semibold group-hover:gap-2 transition-all">
            View Program <ChevronRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}
