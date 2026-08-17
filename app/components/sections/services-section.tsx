'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../site-data';

export function Services({ showIds }: { showIds?: string[] }) {
  const filteredServices = showIds ? SERVICES.filter((s) => showIds.includes(s.id)) : SERVICES;
  return (
    <section id="services" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PROFESSIONAL SERVICES</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Tailored entertainment solutions for every occasion. No matter the event, the quality remains the same.</p>
        </div>
        <div className={`grid md:grid-cols-2 gap-8 ${showIds ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-4'}`}>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-pink/50 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink group-hover:text-white transition-all">{service.icon}</div>
              <span className="text-xs font-bold text-pink uppercase tracking-widest mb-2 block">{service.vibe}</span>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">{service.description}</p>
              <Link href="/contact" className="text-sm font-bold flex items-center gap-2 group-hover:text-pink transition-colors">
                Enquire Now <ChevronRight className="w-4 h-4" aria-hidden />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
