import { coaches } from '../data/coaches'
import CoachCard from '../components/CoachCard'
import { Users } from 'lucide-react'

export default function Coaches() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-sm text-amber-400 font-semibold mb-6">
          <Users size={14} />
          Choose Your Mentor
        </div>
        <h1 className="section-title mb-4">Your Legendary Coaches</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Six of the greatest bodybuilders in history. Each with a distinct philosophy, backed by science.
          Pick the one that aligns with your goals and personality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {coaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>

      <div className="card p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <h2 className="text-2xl font-black text-white mb-4">How to Choose Your Coach</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Want maximum mass & volume?', pick: 'Arnold Schwarzenegger', id: 'arnold' },
            { label: 'Love lifting heavy and going hard?', pick: 'Ronnie Coleman', id: 'ronnie' },
            { label: 'Want legendary legs above all?', pick: 'Tom Platz', id: 'tomPlatz' },
            { label: 'Short on time, train hard & smart?', pick: 'Mike Mentzer', id: 'mentzer' },
            { label: 'Want dense, grainy mass in 4 days?', pick: 'Dorian Yates', id: 'dorian' },
            { label: 'Train smart, protect joints, go long?', pick: 'Lee Haney', id: 'leeHaney' },
          ].map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-2">{item.label}</p>
              <p className="font-bold text-amber-500">{item.pick}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
