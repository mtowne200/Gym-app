import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { usePennyItems } from '../context/PennyItemsContext';
import { STORES, CATEGORIES } from '../data/pennyItems';
import PennyItemCard from '../components/PennyItemCard';

export default function Browse() {
  const { items } = usePennyItems();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const selectedStore = searchParams.get('store') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedStatus = searchParams.get('status') || '';
  const sortBy = searchParams.get('sort') || 'newest';

  function setParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  }

  const filtered = useMemo(() => {
    let result = [...items];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.sku.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    if (selectedStore) result = result.filter(i => i.storeId === selectedStore);
    if (selectedCategory) result = result.filter(i => i.category === selectedCategory);
    if (selectedStatus) result = result.filter(i => i.status === selectedStatus);

    if (sortBy === 'newest') result.sort((a, b) => new Date(b.dateFound) - new Date(a.dateFound));
    else if (sortBy === 'popular') result.sort((a, b) => b.confirmations - a.confirmations);
    else if (sortBy === 'savings') result.sort((a, b) => (b.originalPrice || 0) - (a.originalPrice || 0));

    return result;
  }, [items, query, selectedStore, selectedCategory, selectedStatus, sortBy]);

  const activeFilterCount = [selectedStore, selectedCategory, selectedStatus].filter(Boolean).length;

  function clearAll() {
    setQuery('');
    setSearchParams({});
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">Browse Penny Items</h1>
        <p className="text-gray-400">
          {filtered.length} item{filtered.length !== 1 ? 's' : ''} found
          {activeFilterCount > 0 && ` · ${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} active`}
        </p>
      </div>

      {/* Search + Controls */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name, SKU, location..."
            className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-500"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
            activeFilterCount > 0
              ? 'bg-green-500/10 border-green-500/50 text-green-400'
              : 'bg-gray-900 border-gray-700 text-gray-400 hover:text-white hover:border-gray-600'
          }`}
        >
          <SlidersHorizontal size={15} />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-green-500 text-gray-950 text-xs font-black rounded-full w-4 h-4 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <select
          value={sortBy}
          onChange={e => setParam('sort', e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-xl px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-green-500"
        >
          <option value="newest">Newest</option>
          <option value="popular">Most Confirmed</option>
          <option value="savings">Most Savings</option>
        </select>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-4 grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Store</label>
            <div className="flex flex-wrap gap-2">
              {STORES.map(store => (
                <button
                  key={store.id}
                  onClick={() => setParam('store', selectedStore === store.id ? '' : store.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    selectedStore === store.id
                      ? 'bg-green-500/20 border-green-500/50 text-green-400'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                  }`}
                >
                  {store.logo} {store.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={e => setParam('category', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-green-500"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Status</label>
            <div className="flex gap-2">
              {['', 'verified', 'unverified'].map(status => (
                <button
                  key={status}
                  onClick={() => setParam('status', status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    selectedStatus === status
                      ? 'bg-green-500/20 border-green-500/50 text-green-400'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  {status === '' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {(activeFilterCount > 0 || query) && (
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs text-gray-500">Active:</span>
          {selectedStore && (
            <span className="flex items-center gap-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-2 py-1 rounded-full">
              {STORES.find(s => s.id === selectedStore)?.name}
              <button onClick={() => setParam('store', '')}><X size={11} /></button>
            </span>
          )}
          {selectedCategory && (
            <span className="flex items-center gap-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-2 py-1 rounded-full">
              {selectedCategory}
              <button onClick={() => setParam('category', '')}><X size={11} /></button>
            </span>
          )}
          {selectedStatus && (
            <span className="flex items-center gap-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-2 py-1 rounded-full">
              {selectedStatus}
              <button onClick={() => setParam('status', '')}><X size={11} /></button>
            </span>
          )}
          <button onClick={clearAll} className="text-xs text-gray-500 hover:text-white underline ml-1">
            Clear all
          </button>
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">
          <Filter size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-semibold text-white mb-1">No items found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
          <button onClick={clearAll} className="mt-4 text-green-400 hover:text-green-300 text-sm font-semibold">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(item => (
            <PennyItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
