'use client';

import { useEffect } from 'react';
import { Contact } from '../sections/contact-section';
import { FAQ } from '../sections/faq-section';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <Contact isStandalonePage />
      <FAQ />
    </div>
  );
}
