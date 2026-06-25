import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, Clock, ThumbsUp, ArrowLeft, Tag, Share2, AlertCircle } from 'lucide-react';
import { usePennyItems } from '../context/PennyItemsContext';
import { STORES } from '../data/pennyItems';

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItemById, confirmItem, items } = usePennyItems();

  const item = getItemById(id);

  if (!item) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-gray-500 mb-4">Item not found.</p>
        <Link to="/browse" className="text-green-400 hover:text-green-300 font-semibold">← Back to Browse</Link>
      </div>
    );
  }

  const store = STORES.find(s => s.id === item.storeId);
  const daysAgo = Math.floor((new Date() - new Date(item.dateFound)) / (1000 * 60 * 60 * 24));
  const savings = item.originalPrice ? (item.originalPrice - 0.01).toFixed(2) : null;
  const savingsPct = item.originalPrice ? Math.round((1 - 0.01 / item.originalPrice) * 100) : null;

  const relatedItems = items
    .filter(i => i.id !== item.id && (i.storeId === item.storeId || i.category === item.category))
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-6">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{store?.logo}</span>
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: store?.color + '22', color: store?.color }}
              >
                {store?.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{item.category}</span>
            </div>
            {item.status === 'verified' ? (
              <span className="flex items-center gap-1 text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                <CheckCircle size={14} />
                Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                <Clock size={14} />
                Unverified
              </span>
            )}
          </div>

          <h1 className="text-2xl font-black mb-2">{item.title}</h1>
          <p className="text-gray-500 text-sm">SKU: {item.sku}</p>
        </div>

        {/* Price */}
        <div className="p-6 border-b border-gray-800 bg-green-500/5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-5xl font-black text-green-400">$0.01</span>
                {item.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>
              {savings && (
                <p className="text-green-400/70 text-sm">
                  Save ${savings} · {savingsPct}% off original price
                </p>
              )}
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-green-400">{item.confirmations}</div>
              <div className="text-xs text-gray-500">confirms</div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 border-b border-gray-800">
          <div className="grid sm:grid-cols-2 gap-4 text-sm mb-5">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={15} className="text-gray-600" />
              <span>{item.location}{item.region ? ` · ${item.region}` : ''}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={15} className="text-gray-600" />
              <span>
                Found {daysAgo === 0 ? 'today' : daysAgo === 1 ? 'yesterday' : `${daysAgo} days ago`}
                {' '}({item.dateFound})
              </span>
            </div>
          </div>

          {item.notes && (
            <div className="bg-gray-800 rounded-xl p-4 text-sm text-gray-300 leading-relaxed">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Where to find it</p>
              {item.notes}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="px-6 py-4 bg-yellow-500/5 border-b border-gray-800 flex gap-3">
          <AlertCircle size={15} className="text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-200/70">
            Always scan the barcode at an in-store price checker or self-checkout before adding to your cart. Penny item availability varies by store and may have already sold out.
          </p>
        </div>

        {/* Actions */}
        <div className="p-6 flex gap-3">
          <button
            onClick={() => confirmItem(item.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold py-3 rounded-xl transition-colors"
          >
            <ThumbsUp size={17} />
            Confirm This Find ({item.confirmations})
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: item.title, text: `Penny item at ${store?.name}: ${item.title}`, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold px-4 py-3 rounded-xl transition-colors border border-gray-700"
          >
            <Share2 size={17} />
          </button>
        </div>
      </div>

      {/* Related */}
      {relatedItems.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4">More from {store?.name} or {item.category}</h2>
          <div className="space-y-3">
            {relatedItems.map(related => {
              const relStore = STORES.find(s => s.id === related.storeId);
              return (
                <Link
                  key={related.id}
                  to={`/item/${related.id}`}
                  className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-colors"
                >
                  <span className="text-lg">{relStore?.logo}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold line-clamp-1">{related.title}</p>
                    <p className="text-xs text-gray-500">{related.location} · {related.category}</p>
                  </div>
                  <div className="text-green-400 font-black text-sm shrink-0">$0.01</div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
