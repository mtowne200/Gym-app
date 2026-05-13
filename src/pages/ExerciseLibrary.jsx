import { useState, useMemo } from 'react'
import { exercises, categories } from '../data/exercises'
import ExerciseCard from '../components/ExerciseCard'
import { Search, Filter, BookOpen } from 'lucide-react'

export default function ExerciseLibrary() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDifficulty, setActiveDifficulty] = useState('all')

  const filtered = useMemo(() => {
    return exercises.filter((ex) => {
      const matchSearch =
        !search ||
        ex.name.toLowerCase().includes(search.toLowerCase()) ||
        ex.primaryMuscles.some((m) => m.toLowerCase().includes(search.toLowerCase()))

      const matchCategory = activeCategory === 'all' || ex.category === activeCategory
      const matchDifficulty = activeDifficulty === 'all' || ex.difficulty === activeDifficulty

      return matchSearch && matchCategory && matchDifficulty
    })
  }, [search, activeCategory, activeDifficulty])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-400 font-semibold mb-6">
          <BookOpen size={14} />
          Exercise Database
        </div>
        <h1 className="section-title mb-3">Exercise Library</h1>
        <p className="text-gray-400 text-lg">
          22 exercises with instructions, science notes, coach tips, and YouTube tutorials
        </p>
      </div>

      {/* Filters */}
      <div className="card p-4 sm:p-6 mb-8 space-y-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search exercises or muscles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 mr-2 text-gray-500 text-sm">
            <Filter size={14} /> Category:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tag capitalize cursor-pointer transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-gray-950 font-bold'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 mr-2 text-gray-500 text-sm">
            <Filter size={14} /> Difficulty:
          </div>
          {['all', 'beginner', 'intermediate', 'advanced'].map((d) => (
            <button
              key={d}
              onClick={() => setActiveDifficulty(d)}
              className={`tag capitalize cursor-pointer transition-all ${
                activeDifficulty === d
                  ? 'bg-amber-500 text-gray-950 font-bold'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-gray-500 text-sm mb-6">
        Showing <span className="text-amber-500 font-bold">{filtered.length}</span> of {exercises.length} exercises
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">🏋️</p>
          <p className="text-gray-400 text-lg">No exercises match your search.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('all'); setActiveDifficulty('all') }}
            className="mt-4 btn-secondary text-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
