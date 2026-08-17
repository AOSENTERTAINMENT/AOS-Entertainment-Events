'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Instagram } from 'lucide-react';
import { GALLERY_ALT, GALLERY_IMAGES, GALLERY_VIDEOS, HOMEPAGE_GALLERY_ITEMS } from '../site-data';

export type GalleryItem = { type: 'image'; src: string } | { type: 'video'; src: string };

const GALLERY_ITEMS_PER_PAGE = 6;

function GalleryTile({ item, index, priorityImage }: { item: GalleryItem; index: number; priorityImage: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (item.type !== 'video') return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoReady(true);
          io.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [item]);

  return (
    <div ref={containerRef} className="relative aspect-square w-full min-h-0 overflow-hidden rounded-2xl group isolate bg-white/5">
      {item.type === 'video' ? (
        videoReady ? (
          <video
            src={item.src}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            controls={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" aria-hidden />
        )
      ) : (
        <Image
          src={item.src}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          alt={GALLERY_ALT[item.src] ?? `AOS Entertainment event gallery image ${index + 1}`}
          loading={priorityImage ? 'eager' : 'lazy'}
          priority={priorityImage}
        />
      )}
    </div>
  );
}

export function Gallery({ limit, isStandalonePage }: { limit?: number; isStandalonePage?: boolean }) {
  const items: GalleryItem[] = limit
    ? HOMEPAGE_GALLERY_ITEMS
    : [...GALLERY_IMAGES.map((src) => ({ type: 'image' as const, src })), ...GALLERY_VIDEOS.map((src) => ({ type: 'video' as const, src }))];

  const isFullGallery = !limit;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / GALLERY_ITEMS_PER_PAGE));
  const safePage = Math.max(1, Math.min(page, totalPages));

  const startIndex = (safePage - 1) * GALLERY_ITEMS_PER_PAGE;
  const displayedItems = isFullGallery ? items.slice(startIndex, startIndex + GALLERY_ITEMS_PER_PAGE) : items;

  const HeadingTag = isStandalonePage ? 'h1' : 'h2';
  return (
    <section id="gallery" className="py-24" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <HeadingTag id="gallery-heading" className="text-4xl font-display font-bold mb-4">
              {isStandalonePage ? 'Gallery – Events & Dancefloors' : 'THE VIBE'}
            </HeadingTag>
            <p className="text-white/60">A glimpse into the energy I bring to every dancefloor.</p>
          </div>
          {limit ? (
            <Link href="/gallery" className="px-6 py-3 glass rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
              View full gallery <ChevronRight className="w-4 h-4" aria-hidden />
            </Link>
          ) : (
            <a
              href="https://www.instagram.com/djalanosullivan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Instagram className="w-4 h-4" aria-hidden /> More photos on Instagram
            </a>
          )}
        </div>

        {isFullGallery && totalPages > 1 && (
          <div role="status" aria-live="polite" className="text-sm text-white/50 mb-4">
            Page {safePage} of {totalPages} · {items.length} items
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr" key={`gallery-page-${safePage}`}>
          {displayedItems.map((item, i) => {
            const globalIndex = isFullGallery ? startIndex + i : i;
            const priorityImage = item.type === 'image' && i < 2;
            return <GalleryTile key={`p${safePage}-${item.type}-${item.src}`} item={item} index={globalIndex} priorityImage={priorityImage} />;
          })}
        </div>

        {isFullGallery && totalPages > 1 && (
          <nav className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8" aria-label="Gallery pages">
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-6 py-3 glass rounded-xl text-sm font-bold hover:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed min-w-[8rem]"
            >
              Previous page
            </button>
            <span className="text-sm text-white/60 tabular-nums">
              {safePage} / {totalPages}
            </span>
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-6 py-3 glass rounded-xl text-sm font-bold hover:bg-white/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed min-w-[8rem]"
            >
              Next page
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
