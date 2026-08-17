'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Mail, Phone, Facebook } from 'lucide-react';

export function Contact({ isStandalonePage }: { isStandalonePage?: boolean } = {}) {
  const pathname = usePathname();
  const isWeddingPage = pathname === '/weddings';
  const [formData, setFormData] = useState({ name: '', email: '', eventType: '', eventDate: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [formRenderedAt, setFormRenderedAt] = useState<number | null>(null);

  useEffect(() => {
    setFormRenderedAt(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitMessage('');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      eventType: formData.eventType.trim(),
      eventDate: formData.eventDate.trim(),
      message: formData.message.trim(),
    };

    const { contactFormSchema } = await import('@/lib/contact-schema');
    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      const flat = parsed.error.flatten().fieldErrors;
      if (flat.name?.[0]) errors.name = flat.name[0];
      if (flat.email?.[0]) errors.email = flat.email[0];
      if (flat.eventType?.[0]) errors.eventType = flat.eventType[0];
      if (flat.eventDate?.[0]) errors.eventDate = flat.eventDate[0];
      if (flat.message?.[0]) errors.message = flat.message[0];
      setFieldErrors(errors);
      return;
    }

    setSubmitStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          _timestamp: formRenderedAt ?? Date.now(),
          website: '',
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      const message = data.message ?? (data.success ? 'Your enquiry has been sent.' : 'There was a problem submitting your enquiry. Please try again.');

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setSubmitMessage(message);
        setFormData({ name: '', email: '', eventType: '', eventDate: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(message);
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('There was a problem submitting your enquiry. Please try again.');
    }
  };

  const inputClass = (field: string) =>
    isWeddingPage
      ? `w-full min-w-0 max-w-full box-border border rounded-xl px-3 sm:px-4 py-3 focus:outline-none transition-all bg-white/90 text-black placeholder:text-black/40 ${fieldErrors[field] ? 'border-red-500/70 focus:border-red-500' : 'border-black/15 focus:border-gold focus:ring-1 focus:ring-gold/30'}`
      : `w-full min-w-0 max-w-full box-border bg-white/5 border rounded-xl px-3 sm:px-4 py-3 focus:outline-none transition-all ${fieldErrors[field] ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-pink'}`;

  const labelClass = isWeddingPage ? 'text-xs font-bold uppercase tracking-widest text-black/55' : 'text-xs font-bold uppercase tracking-widest text-white/60';
  const contactIconBox = (accent: 'pink' | 'gold') =>
    isWeddingPage
      ? `w-14 h-14 rounded-2xl glass-light border border-gold/20 flex items-center justify-center transition-all ${accent === 'gold' ? 'text-gold group-hover:bg-gold group-hover:text-white' : 'text-pink group-hover:bg-pink group-hover:text-white'}`
      : `w-14 h-14 rounded-2xl glass flex items-center justify-center ${accent === 'gold' ? 'text-gold group-hover:bg-gold group-hover:text-black' : 'text-pink group-hover:bg-pink group-hover:text-white'} transition-all`;
  const contactMeta = isWeddingPage ? 'text-sm text-black/45 uppercase tracking-widest font-bold' : 'text-sm text-white/40 uppercase tracking-widest font-bold';
  const contactValue = isWeddingPage ? 'text-xl font-bold text-black' : 'text-xl font-bold';

  return (
    <section id="contact" className={`py-16 sm:py-24 relative overflow-x-clip ${isWeddingPage ? 'bg-gold-light/40 border-y border-gold/10' : ''}`} aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 min-w-0">
          <div className="min-w-0">
            {isStandalonePage ? (
              <h1 id="contact-heading" className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-tight break-words hyphens-auto ${isWeddingPage ? 'text-black' : ''}`}>
                LET&apos;S MAKE YOUR EVENT <span className="text-gradient">UNFORGETTABLE.</span>
              </h1>
            ) : (
              <h2 id="contact-heading" className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-tight break-words hyphens-auto ${isWeddingPage ? 'text-black' : ''}`}>
                LET&apos;S MAKE YOUR EVENT <span className="text-gradient">UNFORGETTABLE.</span>
              </h2>
            )}
            <p className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed ${isWeddingPage ? 'text-black/70' : 'text-white/60'}`}>
              Dates fill up fast, especially for wedding season.{' '}
              <Link href="/weddings" className={isWeddingPage ? 'text-gold font-semibold hover:underline' : 'text-pink hover:underline'}>
                Book your Wedding DJ
              </Link>
              ,{' '}
              <Link href="/corporate" className={isWeddingPage ? 'text-gold font-semibold hover:underline' : 'text-pink hover:underline'}>
                Corporate DJ
              </Link>
              , or{' '}
              <Link href="/clubs-parties" className={isWeddingPage ? 'text-gold font-semibold hover:underline' : 'text-pink hover:underline'}>
                clubs &amp; private parties
              </Link>{' '}
              — get in touch today to secure your booking.
            </p>
            <div className="space-y-6 sm:space-y-8">
              <a href="tel:0858108000" className="flex items-start sm:items-center gap-4 sm:gap-6 group min-w-0">
                <div className={`shrink-0 ${contactIconBox('pink')}`}>
                  <Phone className="w-6 h-6" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={contactMeta}>Call / WhatsApp</p>
                  <p className={`${contactValue} break-all`}>0858108000</p>
                </div>
              </a>
              <a href="mailto:alan@aosentertainment.ie" className="flex items-start sm:items-center gap-4 sm:gap-6 group min-w-0">
                <div className={`shrink-0 ${contactIconBox('gold')}`}>
                  <Mail className="w-6 h-6" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={contactMeta}>Email</p>
                  <p className={`${contactValue} break-all`}>alan@aosentertainment.ie</p>
                </div>
              </a>
              <a href="https://www.facebook.com/DJAlanOSullivan/" target="_blank" rel="noopener noreferrer" className="flex items-start sm:items-center gap-4 sm:gap-6 group min-w-0">
                <div className={`shrink-0 ${contactIconBox('pink')}`}>
                  <Facebook className="w-6 h-6" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={contactMeta}>Social</p>
                  <p className={`${contactValue} break-words`}>@djalanosullivan</p>
                </div>
              </a>
            </div>
          </div>
          <div className={`p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl md:rounded-[40px] relative w-full min-w-0 max-w-full box-border ${isWeddingPage ? 'glass-wedding-form' : 'glass'}`}>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 w-full min-w-0 max-w-full" noValidate aria-label="Contact form">
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0 pointer-events-none">
                <label htmlFor="contact-website-hp" className="sr-only">
                  Leave blank
                </label>
                <input id="contact-website-hp" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="_timestamp" value={formRenderedAt ?? ''} readOnly />

              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`rounded-xl border px-4 py-3 text-sm ${isWeddingPage ? 'bg-green-50 border-green-200 text-green-800' : 'bg-green-500/10 border-green-500/30 text-green-400'}`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`rounded-xl border px-4 py-3 text-sm ${isWeddingPage ? 'bg-red-50 border-red-200 text-red-800' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}
                    role="alert"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                <div className="space-y-2 min-w-0">
                  <label htmlFor="contact-name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    className={inputClass('name')}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? 'contact-name-err' : undefined}
                  />
                  {fieldErrors.name && (
                    <p id="contact-name-err" className={`text-xs ${isWeddingPage ? 'text-red-600' : 'text-red-400'}`} role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2 min-w-0">
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    className={inputClass('email')}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'contact-email-err' : undefined}
                  />
                  {fieldErrors.email && (
                    <p id="contact-email-err" className={`text-xs ${isWeddingPage ? 'text-red-600' : 'text-red-400'}`} role="alert">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                <div className="space-y-2 min-w-0">
                  <label htmlFor="contact-eventType" className={labelClass}>
                    Event Type
                  </label>
                  <select
                    id="contact-eventType"
                    name="eventType"
                    required
                    className={inputClass('eventType')}
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    aria-invalid={!!fieldErrors.eventType}
                    aria-describedby={fieldErrors.eventType ? 'contact-eventType-err' : undefined}
                  >
                    <option value="" className={isWeddingPage ? 'bg-white text-black' : 'bg-black'}>
                      Select Event
                    </option>
                    <option value="wedding" className={isWeddingPage ? 'bg-white text-black' : 'bg-black'}>
                      Wedding
                    </option>
                    <option value="birthday" className={isWeddingPage ? 'bg-white text-black' : 'bg-black'}>
                      Birthday Party
                    </option>
                    <option value="corporate" className={isWeddingPage ? 'bg-white text-black' : 'bg-black'}>
                      Corporate Event
                    </option>
                    <option value="club" className={isWeddingPage ? 'bg-white text-black' : 'bg-black'}>
                      Club Night
                    </option>
                  </select>
                  {fieldErrors.eventType && (
                    <p id="contact-eventType-err" className={`text-xs ${isWeddingPage ? 'text-red-600' : 'text-red-400'}`} role="alert">
                      {fieldErrors.eventType}
                    </p>
                  )}
                </div>
                <div className="space-y-2 min-w-0 w-full max-w-full">
                  <label htmlFor="contact-eventDate" className={labelClass}>
                    Event Date
                  </label>
                  <input
                    id="contact-eventDate"
                    type="date"
                    name="eventDate"
                    required
                    className={`contact-form-date ${inputClass('eventDate')}`}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    aria-invalid={!!fieldErrors.eventDate}
                    aria-describedby={fieldErrors.eventDate ? 'contact-eventDate-err' : undefined}
                  />
                  {fieldErrors.eventDate && (
                    <p id="contact-eventDate-err" className={`text-xs ${isWeddingPage ? 'text-red-600' : 'text-red-400'}`} role="alert">
                      {fieldErrors.eventDate}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2 min-w-0">
                <label htmlFor="contact-message" className={labelClass}>
                  Message / Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={2000}
                  className={inputClass('message')}
                  placeholder="Tell me about your venue, guest count, and music preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? 'contact-message-err' : undefined}
                />
                {fieldErrors.message && (
                  <p id="contact-message-err" className={`text-xs ${isWeddingPage ? 'text-red-600' : 'text-red-400'}`} role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className={`w-full py-5 font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${isWeddingPage ? 'bg-gradient-to-r from-gold to-[#c9971e] text-white glow-gold' : 'bg-gradient-to-r from-pink to-gold text-white glow-blue'}`}
              >
                {submitStatus === 'sending' ? 'Sending…' : 'Send Enquiry'} <ChevronRight className="w-4 h-4" aria-hidden />
              </button>
              <p className={`text-[10px] text-center mt-4 ${isWeddingPage ? 'text-black/45' : 'text-white/40'}`}>
                By submitting this form you agree to the processing of your information as described in our{' '}
                <Link href="/privacy-policy" className={`underline transition-colors ${isWeddingPage ? 'hover:text-black text-black/70' : 'hover:text-white'}`}>
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
