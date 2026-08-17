'use client';

import { Star, Users } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from '../site-data';

export function Testimonials() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">CLIENT LOVE</h2>
          <p className="text-white/60">Real feedback from real events across Cork.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-6" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-pink text-pink" aria-hidden />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">&quot;{t.content}&quot;</p>
              <div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
              <div className="absolute top-8 right-8 opacity-10" aria-hidden>
                <Users className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            Read Google reviews for DJ Alan O&apos;Sullivan
          </a>
        </div>
      </div>
    </section>
  );
}
