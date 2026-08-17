'use client';

import { Hero } from '../sections/hero';
import { HomeHubSection } from '../sections/home-hub-section';
import { Testimonials } from '../sections/testimonials-section';
import { Gallery } from '../sections/gallery-section';
import { Contact } from '../sections/contact-section';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeHubSection />
      <Testimonials />
      <Gallery limit={6} />
      <Contact />
    </div>
  );
}
