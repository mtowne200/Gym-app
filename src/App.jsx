import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Coaches from './pages/Coaches'
import CoachDetail from './pages/CoachDetail'
import ExerciseLibrary from './pages/ExerciseLibrary'
import MacroCalculator from './pages/MacroCalculator'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:id" element={<CoachDetail />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/macros" element={<MacroCalculator />} />
        </Routes>
        <footer className="border-t border-gray-800 py-8 mt-16 text-center text-gray-500 text-sm">
          <p className="mb-1">
            <span className="text-amber-500 font-bold">IRON LEGACY</span> — Train Like a Legend. Built on Science.
          </p>
          <p>Workout programs are for informational purposes. Consult a physician before starting any exercise regimen.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
