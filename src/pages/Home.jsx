import { Link } from 'react-router-dom';
import { Search, PlusCircle, TrendingUp, Tag, ChevronRight, CheckCircle, Zap, Users, MapPin } from 'lucide-react';
import { usePennyItems } from '../context/PennyItemsContext';
import { STORES } from '../data/pennyItems';
import PennyItemCard from '../components/PennyItemCard';

export default function Home() {
  const { items } = usePennyItems();

  const recentItems = [...items]
    .sort((a, b) => new Date(b.dateFound) - new Date(a.dateFound))
    .slice(0, 6);

  const topItems = [...items]
    .sort((a, b) => b.confirmations - a.confirmations)
    .slice(0, 3);

  const storeCounts = STORES.map(store => ({
    ...store,
    count: items.filter(i => i.storeId === store.id).length,
  })).filter(s => s.count > 0);

  const totalSavings = items.reduce((sum, item) => sum + (item.originalPrice || 0) - 0.01, 0);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #22c55e 0%, transparent 55%), radial-gradient(circle at 70% 20%, #16a34a 0%, transparent 50%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 text-sm text-green-400 font-semibold mb-8">
            <Zap size={14} />
            Community-powered penny item tracker
          </div>

          <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-none tracking-tight">
            FIND <span className="text-green-400">PENNY</span>
            <br />
            ITEMS NEAR YOU
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover items marked down to <span className="text-green-400 font-bold">$0.01</span> at Home Depot, Lowe's,
            Target, Walmart, and more — submitted and verified by our community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/browse" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors text-lg">
              <Search size={20} />
              Browse Penny Items
            </Link>
            <Link to="/submit" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-lg border border-gray-700">
              <PlusCircle size={20} />
              Submit a Find
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: items.length, label: 'Penny Items' },
              { value: items.filter(i => i.status === 'verified').length, label: 'Verified' },
              { value: new Set(items.map(i => i.location)).size, label: 'Cities' },
              { value: `$${Math.round(totalSavings).toLocaleString()}`, label: 'Total Savings' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-green-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Filter */}
      <section className="border-y border-gray-800 bg-gray-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Browse by store:</span>
            {storeCounts.map(store => (
              <Link
                key={store.id}
                to={`/browse?store=${store.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 hover:border-gray-500 bg-gray-900 whitespace-nowrap transition-colors text-sm font-semibold"
                style={{ borderColor: store.color + '44' }}
              >
                <span>{store.logo}</span>
                <span>{store.name}</span>
                <span className="text-xs bg-gray-800 px-1.5 py-0.5 rounded-full text-gray-400">{store.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Finds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black mb-1">Recent Finds</h2>
            <p className="text-gray-400 text-sm">Latest penny items submitted by the community</p>
          </div>
          <Link to="/browse" className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300 font-semibold">
            View all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentItems.map(item => (
            <PennyItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Top Verified */}
      <section className="border-y border-gray-800 bg-gray-900/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp size={20} className="text-green-400" />
            <h2 className="text-2xl font-black">Most Confirmed</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {topItems.map((item, i) => {
              const store = STORES.find(s => s.id === item.storeId);
              return (
                <Link
                  key={item.id}
                  to={`/item/${item.id}`}
                  className="flex items-start gap-3 bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-gray-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 font-black text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold line-clamp-2 mb-1">{item.title}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{store?.logo} {store?.name}</span>
                      <span>·</span>
                      <span className="text-green-400 font-bold">{item.confirmations} confirms</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-black mb-3">How Penny Items Work</h2>
        <p className="text-gray-400 mb-12">Penny items are products retailers have marked down to $0.01 in their system — usually discontinued or clearance items the store wants off the floor.</p>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', step: '1', title: 'Find the Item', desc: 'Browse our community database to find penny items at stores near you.' },
            { icon: '📱', step: '2', title: 'Scan In-Store', desc: 'Scan the barcode at a price checker kiosk or the store\'s app to verify the $0.01 price.' },
            { icon: '🛒', step: '3', title: 'Buy & Share', desc: 'Add it to your cart and submit any new finds you discover to help the community.' },
          ].map(step => (
            <div key={step.step} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/how-it-works" className="inline-flex items-center gap-2 mt-8 text-green-400 hover:text-green-300 font-semibold">
          Learn more about penny items <ChevronRight size={16} />
        </Link>
      </section>
    </div>
  );
}
