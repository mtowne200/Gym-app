import { Link } from 'react-router-dom'
import { Dumbbell, Calculator, BookOpen, ChevronRight, Award, Zap, Target, FlaskConical } from 'lucide-react'
import { coaches } from '../data/coaches'
import CoachCard from '../components/CoachCard'

const stats = [
  { value: '6', label: 'Legendary Coaches' },
  { value: '22+', label: 'Science-Based Exercises' },
  { value: '6', label: 'Full Workout Programs' },
  { value: '∞', label: 'Gains Potential' },
]

const features = [
  {
    icon: Award,
    title: 'Legendary Coaches',
    description: 'Train under the philosophy of Arnold, Ronnie Coleman, Tom Platz, Mike Mentzer, Dorian Yates, and Lee Haney.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: FlaskConical,
    title: 'Science-Based Research',
    description: 'Every training principle backed by peer-reviewed research. Learn WHY the programs work, not just what to do.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Calculator,
    title: 'Macro Calculator',
    description: 'Precision nutrition for bulking, cutting, or body recomposition. Get your exact calorie and macro targets.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: BookOpen,
    title: 'Exercise Library',
    description: '22 exercises with video tutorials, step-by-step instructions, coach notes, and common mistakes to avoid.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-gray-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ef4444 0%, transparent 50%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-sm text-amber-400 font-semibold mb-8">
            <Zap size={14} />
            Science-Backed Bodybuilding Programs
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
            TRAIN LIKE A
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
              LEGEND
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Choose your coach. Get your program. Calculate your macros.
            <br />
            <span className="text-gray-300">Train like Arnold, Ronnie, or Mike Mentzer — built on modern science.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/coaches" className="btn-primary flex items-center gap-2 text-lg">
              <Dumbbell size={20} />
              Choose Your Coach
            </Link>
            <Link to="/macros" className="btn-secondary flex items-center gap-2 text-lg">
              <Calculator size={20} />
              Calculate Macros
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-amber-500 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Everything You Need to Grow</h2>
          <p className="text-gray-400 text-lg">One app. Six legends. Unlimited gains.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6 hover:border-gray-700 transition-colors">
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon size={22} className={feature.color} />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coach Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="section-title mb-2">Your Coaches</h2>
            <p className="text-gray-400">Pick the philosophy that matches your goals</p>
          </div>
          <Link to="/coaches" className="btn-secondary hidden sm:flex items-center gap-2">
            View All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/coaches" className="btn-secondary inline-flex items-center gap-2">
            View All Coaches <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Science Banner */}
      <section className="border-y border-gray-800 bg-gray-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FlaskConical size={40} className="text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Built on Science, Not{' '}
            <span className="text-amber-500">Broscience</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Every workout principle in Iron Legacy is explained with peer-reviewed research.
            We respect the legends but translate their instinctive genius into modern sport science.
            Understand the <em className="text-white">why</em> behind every set, rep, and rest period.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: '📊', title: 'Volume Principles', desc: 'Schoenfeld (2017) meta-analysis on volume–hypertrophy dose response' },
              { icon: '🧠', title: 'Mind-Muscle Connection', desc: 'EMG research on attentional focus and motor unit recruitment' },
              { icon: '⚖️', title: 'Minimal Effective Dose', desc: 'Krieger (2010) single-set vs multi-set hypertrophy research' },
            ].map((item) => (
              <div key={item.title} className="card p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          Ready to Build a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
            Legacy?
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Stop guessing. Start training with the knowledge of the greatest bodybuilders who ever lived.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/coaches" className="btn-primary text-lg flex items-center justify-center gap-2">
            <Dumbbell size={20} />
            Start Training Now
          </Link>
          <Link to="/exercises" className="btn-secondary text-lg flex items-center justify-center gap-2">
            <BookOpen size={20} />
            Browse Exercises
          </Link>
        </div>
      </section>
    </div>
  )
}
