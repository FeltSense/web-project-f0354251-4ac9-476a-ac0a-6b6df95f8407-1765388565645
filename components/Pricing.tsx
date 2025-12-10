'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Exclusive access to seasonal collections',
  'Personal styling consultations',
  'Priority shipping on all orders',
  'VIP early access to new arrivals',
  'Complimentary alterations',
  'Members-only events and previews',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">Join Our Exclusive Club</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Unlock premium benefits and curated access to our most coveted pieces</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
        >
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-slate-900">$29</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
            <p className="text-emerald-400 font-semibold text-sm">Limited founding member offer</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-violet-600 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - $29
          </button>

          <p className="text-center text-xs text-slate-500 mt-4">Cancel anytime. No hidden fees.</p>
        </motion.div>
      </div>
    </section>
  );
}