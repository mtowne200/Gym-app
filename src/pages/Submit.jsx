import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { usePennyItems } from '../context/PennyItemsContext';
import { STORES, CATEGORIES } from '../data/pennyItems';

const US_REGIONS = [
  'Northeast', 'Mid-Atlantic', 'Southeast', 'Midwest',
  'South Central', 'Mountain West', 'Southwest', 'Pacific Northwest', 'West Coast', 'Other',
];

export default function Submit() {
  const { addItem } = usePennyItems();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    storeId: '',
    title: '',
    sku: '',
    category: '',
    originalPrice: '',
    location: '',
    region: '',
    notes: '',
  });

  function validate() {
    const e = {};
    if (!form.storeId) e.storeId = 'Select a store';
    if (!form.title.trim()) e.title = 'Item name is required';
    if (!form.sku.trim()) e.sku = 'SKU or item number is required';
    if (!form.category) e.category = 'Select a category';
    if (!form.location.trim()) e.location = 'City/State is required';
    return e;
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const id = addItem({
      ...form,
      originalPrice: form.originalPrice ? parseFloat(form.originalPrice) : null,
    });

    setSubmitted(true);
    setTimeout(() => navigate(`/item/${id}`), 2000);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h2 className="text-2xl font-black mb-2">Find Submitted!</h2>
        <p className="text-gray-400">Redirecting you to the item page...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">Submit a Penny Find</h1>
        <p className="text-gray-400">
          Help the community by sharing a penny item you found in-store. Make sure you've verified the $0.01 price before submitting.
        </p>
      </div>

      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 mb-8 flex gap-3">
        <AlertCircle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-200/80">
          Only submit items you've personally verified ring up at $0.01 in-store via a price scanner or at checkout.
          Unverified or incorrect submissions reduce trust in the community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Store */}
        <div>
          <label className="block text-sm font-semibold mb-2">Store *</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STORES.map(store => (
              <button
                key={store.id}
                type="button"
                onClick={() => handleChange('storeId', store.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                  form.storeId === store.id
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                }`}
              >
                {store.logo} {store.name}
              </button>
            ))}
          </div>
          {errors.storeId && <p className="text-red-400 text-xs mt-1">{errors.storeId}</p>}
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold mb-2">Item Name / Description *</label>
          <input
            type="text"
            value={form.title}
            onChange={e => handleChange('title', e.target.value)}
            placeholder="e.g. Rust-Oleum Chalked Paint - Linen White 30oz"
            className={`w-full bg-gray-900 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-600 ${
              errors.title ? 'border-red-500' : 'border-gray-700'
            }`}
          />
          {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* SKU + Category */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">SKU / Item Number *</label>
            <input
              type="text"
              value={form.sku}
              onChange={e => handleChange('sku', e.target.value)}
              placeholder="e.g. 303514"
              className={`w-full bg-gray-900 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-600 ${
                errors.sku ? 'border-red-500' : 'border-gray-700'
              }`}
            />
            {errors.sku && <p className="text-red-400 text-xs mt-1">{errors.sku}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              value={form.category}
              onChange={e => handleChange('category', e.target.value)}
              className={`w-full bg-gray-900 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 text-gray-300 ${
                errors.category ? 'border-red-500' : 'border-gray-700'
              }`}
            >
              <option value="">Select category...</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
          </div>
        </div>

        {/* Original Price + Location */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Original Price (optional)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <input
                type="number"
                step="0.01"
                min="0"
                value={form.originalPrice}
                onChange={e => handleChange('originalPrice', e.target.value)}
                placeholder="19.98"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">City, State *</label>
            <input
              type="text"
              value={form.location}
              onChange={e => handleChange('location', e.target.value)}
              placeholder="e.g. Atlanta, GA"
              className={`w-full bg-gray-900 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-600 ${
                errors.location ? 'border-red-500' : 'border-gray-700'
              }`}
            />
            {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-semibold mb-2">Region (optional)</label>
          <select
            value={form.region}
            onChange={e => handleChange('region', e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 text-gray-300"
          >
            <option value="">Select region...</option>
            {US_REGIONS.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold mb-2">Location Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={e => handleChange('notes', e.target.value)}
            rows={3}
            placeholder="Where in the store? Which aisle? Any tips for finding it?"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 placeholder-gray-600 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold py-3 rounded-xl transition-colors"
        >
          <PlusCircle size={18} />
          Submit Penny Find
        </button>
      </form>
    </div>
  );
}
