'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emma Richardson',
    role: 'Fashion Curator',
    quote: 'Curated Fashion Boutique transformed how I shop. Every piece feels handpicked just for me. The quality and curation are unmatched.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Marcus Chen',
    role: 'Style Enthusiast',
    quote: 'I finally found a boutique that understands real style. No trends, no filler—just genuinely beautiful pieces that last.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Sophie Laurent',
    role: 'Creative Director',
    quote: 'The attention to detail is incredible. Each collection tells a story. This is the future of luxury fashion retail.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Loved by fashion lovers everywhere
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover why thousands of discerning customers choose Curated Fashion Boutique for their wardrobe essentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-400">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}