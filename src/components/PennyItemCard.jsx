import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, Clock, ThumbsUp } from 'lucide-react';
import { STORES } from '../data/pennyItems';
import { usePennyItems } from '../context/PennyItemsContext';

export default function PennyItemCard({ item }) {
  const { confirmItem } = usePennyItems();
  const store = STORES.find(s => s.id === item.storeId);

  const daysAgo = Math.floor(
    (new Date() - new Date(item.dateFound)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all group">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl">{store?.logo}</span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: store?.color + '33', color: store?.color }}
            >
              {store?.name}
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {item.status === 'verified' ? (
              <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-medium">
                <CheckCircle size={11} />
                Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full font-medium">
                <Clock size={11} />
                Unverified
              </span>
            )}
          </div>
        </div>

        <Link to={`/item/${item.id}`} className="block group-hover:text-green-400 transition-colors">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-1">{item.title}</h3>
        </Link>

        <p className="text-xs text-gray-500 mb-3">SKU: {item.sku} · {item.category}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-green-400">$0.01</span>
            <span className="text-xs text-gray-500 line-through">${item.originalPrice?.toFixed(2)}</span>
          </div>
          <div className="text-xs text-gray-400 bg-green-400/10 text-green-400 px-2 py-0.5 rounded-full font-bold">
            {item.originalPrice ? `${Math.round((1 - 0.01 / item.originalPrice) * 100)}% off` : 'PENNY'}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-2.5 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {item.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`}
          </span>
        </div>
        <button
          onClick={() => confirmItem(item.id)}
          className="flex items-center gap-1 text-gray-500 hover:text-green-400 transition-colors font-medium"
        >
          <ThumbsUp size={11} />
          {item.confirmations}
        </button>
      </div>
    </div>
  );
}
