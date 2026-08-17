'use client';

import { useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Gallery } from '../sections/gallery-section';

export function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <Gallery isStandalonePage />
      <section className="py-24 bg-white/5" aria-labelledby="social-heading">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 id="social-heading" className="text-4xl font-display font-bold mb-8">
            MORE ON SOCIAL
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto">Follow me on Facebook and Instagram for the latest event photos, videos, and behind-the-scenes content.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.facebook.com/DJAlanOSullivan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Facebook className="w-5 h-5" aria-hidden /> AOS Entertainment on Facebook
            </a>
            <a
              href="https://www.instagram.com/djalanosullivan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Instagram className="w-5 h-5" aria-hidden /> AOS Entertainment on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
