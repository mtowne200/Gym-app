import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Submit from './pages/Submit';
import ItemDetail from './pages/ItemDetail';
import HowItWorks from './pages/HowItWorks';
import { PennyItemsProvider } from './context/PennyItemsContext';

export default function App() {
  return (
    <PennyItemsProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-950 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
          <footer className="border-t border-gray-800 py-8 mt-16 text-center text-gray-500 text-sm">
            <p className="mb-1">
              <span className="text-green-400 font-bold">PENNY FINDS</span> — Community-powered penny item tracker.
            </p>
            <p>Always verify penny items by scanning the barcode in-store before adding to your cart.</p>
          </footer>
        </div>
      </BrowserRouter>
    </PennyItemsProvider>
  );
}
