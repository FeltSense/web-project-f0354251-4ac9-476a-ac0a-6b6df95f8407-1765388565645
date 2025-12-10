'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Package } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Sparkles,
    title: 'Curated Collections',
    description: 'Hand-picked pieces from emerging designers. Every item selected for quality, style, and timeless appeal.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'Seasonal Trends',
    description: 'Stay ahead of fashion. We update our boutique with the latest trends every season, curated by our expert stylists.',
    image: 'https://images.unsplash.com/photo-1595777712802-91d778920767?w=800&h=600&fit=crop',
  },
  {
    icon: Users,
    title: 'Personal Styling',
    description: 'One-on-one consultations with our stylists. Find your signature look and build a wardrobe that reflects you.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=600&fit=crop',
  },
  {
    icon: Package,
    title: 'Exclusive Access',
    description: 'Members get early access to new arrivals, private sales, and limited-edition collections before public release.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=600&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Why Choose Curated Fashion Boutique
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the difference quality, expertise, and personal attention make in your wardrobe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50">
                  <service.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}