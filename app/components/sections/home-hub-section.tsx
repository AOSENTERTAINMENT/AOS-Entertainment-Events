'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { homeHubItems } from '../site-data';

export function HomeHubSection() {
  return (
    <section id="services-hub" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            CHOOSE YOUR <span className="text-gradient">VIBE.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">From high-energy club sets to elegant wedding celebrations, I provide bespoke entertainment for every occasion.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {homeHubItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all ${item.border}`}
            >
              <div className="aspect-[4/5] relative">
                <Image src={item.img} alt={item.imgAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className={`text-3xl font-display font-bold mb-3 ${item.accent}`}>{item.title}</h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">{item.desc}</p>
                  <Link href={item.link} className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Explore {item.title} <ChevronRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
