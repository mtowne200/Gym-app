import { Link } from 'react-router-dom';
import { Search, Smartphone, ShoppingCart, AlertTriangle, HelpCircle, Tag } from 'lucide-react';

const faqs = [
  {
    q: 'What is a penny item?',
    a: `A "penny item" is a product that a retailer has marked down to $0.01 in their inventory system. This usually happens when a store wants to clear out discontinued, seasonal, or overstocked items. The item won't be labeled as $0.01 on the shelf — you have to scan it to find out.`,
  },
  {
    q: 'Are penny items legal to buy?',
    a: 'Yes. If an item scans at $0.01 and a cashier rings it up at that price, the sale is legitimate. Some stores have policies against it, but most will honor the price if it rings up that way. When in doubt, be polite and ask a manager.',
  },
  {
    q: 'Why do stores have penny items?',
    a: 'When a store discontinues an item, their system needs to get it off the books. Rather than marking it to zero (which can cause inventory issues), the system sets it to $0.01 as a signal to employees to pull it from the shelf. Sometimes the item doesn\'t get pulled before a customer finds it.',
  },
  {
    q: 'How do I verify if something is a penny item?',
    a: 'Use the store\'s in-store price checker kiosk, their mobile app price scanner, or self-checkout to scan the barcode. If it rings up at $0.01, you\'ve found one. Always verify before taking it to checkout.',
  },
  {
    q: 'Do penny items vary by store location?',
    a: 'Yes! Penny item status is often set per-district or even per-store. An item might be a penny at one location and full price at another. That\'s why location info in submissions is so important.',
  },
  {
    q: 'Can I buy multiple penny items?',
    a: 'That depends on the store and stock. Some stores limit purchases, others don\'t. Buying reasonable quantities is fine — clearing out an entire shelf may cause stores to tighten policies for everyone.',
  },
];

export default function HowItWorks() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Tag size={28} className="text-green-400" />
        </div>
        <h1 className="text-4xl font-black mb-3">How Penny Items Work</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Everything you need to know to find, verify, and score penny items at home improvement and big-box stores.
        </p>
      </div>

      {/* Steps */}
      <div className="mb-16">
        <h2 className="text-xl font-black mb-6">The Process</h2>
        <div className="space-y-4">
          {[
            {
              icon: Search,
              step: '01',
              title: 'Find a Lead',
              desc: 'Browse Penny Finds to discover items that community members have found at stores near you. Filter by store, category, or city.',
              color: 'text-blue-400',
              bg: 'bg-blue-400/10',
            },
            {
              icon: Smartphone,
              step: '02',
              title: 'Scan In-Store',
              desc: 'Head to the store and use an in-store price checker kiosk, the store\'s app, or self-checkout to scan the item\'s barcode. If it shows $0.01, you\'ve found it.',
              color: 'text-green-400',
              bg: 'bg-green-400/10',
            },
            {
              icon: ShoppingCart,
              step: '03',
              title: 'Add to Cart & Check Out',
              desc: 'Add the item to your cart and proceed to checkout normally. If a cashier questions it, politely mention it scanned at that price and ask for a manager.',
              color: 'text-purple-400',
              bg: 'bg-purple-400/10',
            },
          ].map(step => (
            <div key={step.step} className="flex gap-5 bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center shrink-0`}>
                <step.icon size={22} className={step.color} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black text-gray-500 tracking-widest">{step.step}</span>
                  <h3 className="font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="mb-16">
        <h2 className="text-xl font-black mb-6">Pro Tips</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: '🗓️', tip: 'New penny items often drop on Sundays or Mondays when weekly markdowns process.' },
            { icon: '📍', tip: 'Penny item status is local. Always check nearby locations — a mile away can be the difference.' },
            { icon: '🧺', tip: 'Check clearance endcaps, overstock shelves, and seasonal aisles first.' },
            { icon: '🤫', tip: 'Be discreet when scanning. There\'s no reason to alert staff before you\'ve verified the price.' },
            { icon: '📸', tip: 'Take a photo of the price scanner screen as proof in case a cashier questions it.' },
            { icon: '🤝', tip: 'Be respectful if a store won\'t honor it — policies vary and aggressive behavior ruins it for everyone.' },
          ].map((t, i) => (
            <div key={i} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4">
              <span className="text-xl">{t.icon}</span>
              <p className="text-sm text-gray-300 leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-5 mb-16 flex gap-4">
        <AlertTriangle size={22} className="text-yellow-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-yellow-300 mb-1">Important Disclaimer</h3>
          <p className="text-sm text-yellow-200/70 leading-relaxed">
            Penny item policies and availability change frequently. Penny Finds is a community platform — we don't
            guarantee any item will ring up at $0.01 at your location. Always verify in-store before checkout.
            We are not affiliated with Home Depot, Lowe's, Target, Walmart, or any other retailer.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle size={20} className="text-green-400" />
          <h2 className="text-xl font-black">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-sm hover:text-green-400 transition-colors list-none">
                {faq.q}
                <span className="text-gray-500 group-open:rotate-180 transition-transform text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
        <h3 className="text-xl font-black mb-2">Ready to Find Your First Penny Item?</h3>
        <p className="text-gray-400 mb-6 text-sm">Browse thousands of community-submitted finds and help others save too.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/browse" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 font-bold px-6 py-2.5 rounded-xl transition-colors">
            <Search size={16} />
            Browse Finds
          </Link>
          <Link to="/submit" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors border border-gray-700">
            Submit a Find
          </Link>
        </div>
      </div>
    </div>
  );
}
