'use client';

import { FAQS } from '../site-data';

export function FAQ() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-12 text-center uppercase tracking-tighter">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-3 text-pink">{faq.q}</h3>
              <p className="text-white/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
