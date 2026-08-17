'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Facebook } from 'lucide-react';

export function Contact({ isStandalonePage }: { isStandalonePage?: boolean } = {}) {
  const pathname = usePathname();
  const isWeddingPage = pathname === '/weddings';

  // Safely inject Planning Beats form script logic on the client-side
  useEffect(() => {
    const win = window as any;
    if (win.__pbFormResize) return;
    win.__pbFormResize = 1;
    const fitFrames: HTMLIFrameElement[] = [];

    function applyFit(f: HTMLIFrameElement) {
      f.style.height = window.innerHeight + 'px';
    }

    function pbGtag(id: string) {
      win.dataLayer = win.dataLayer || [];
      if (!win.gtag) {
        win.gtag = function () {
          win.dataLayer.push(arguments);
        };
      }
      win.__pbGtag = win.__pbGtag || {};
      if (!win.__pbGtag[id]) {
        win.__pbGtag[id] = 1;
        const s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.appendChild(s);
        win.gtag('js', new Date());
        win.gtag('config', id);
      }
    }

    function pbFbq(pid: string) {
      if (!win.fbq) {
        (function (f: any, b, e, v) {
          if (f.fbq) return;
          const n: any = (f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          });
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];
          const t = b.createElement(e) as HTMLScriptElement;
          t.async = true;
          t.src = v;
          const s = b.getElementsByTagName(e)[0];
          s.parentNode!.insertBefore(t, s);
        })(win, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      }
      win.fbq('init', pid);
    }

    const resizeHandler = function () {
      for (let i = 0; i < fitFrames.length; i++) applyFit(fitFrames[i]);
    };

    const messageHandler = function (e: MessageEvent) {
      if (!e.data || !e.data.type) return;
      const fs = document.querySelectorAll<HTMLIFrameElement>('iframe[data-pb-form]');
      let f: HTMLIFrameElement | null = null;
      for (let i = 0; i < fs.length; i++) {
        if (fs[i].contentWindow === e.source) {
          f = fs[i];
          break;
        }
      }
      if (!f) return;

      if (e.data.type === 'pb-form-resize' && typeof e.data.height === 'number') {
        const idx = fitFrames.indexOf(f);
        if (e.data.height === -1) {
          if (idx < 0) fitFrames.push(f);
          applyFit(f);
        } else {
          if (idx >= 0) fitFrames.splice(idx, 1);
          f.style.height = Math.max(0, e.data.height) + 'px';
        }
      } else if (e.data.type === 'pb-form-scroll') {
        try {
          f.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (_) {
          f.scrollIntoView();
        }
      } else if (e.data.type === 'pb-form-conversion') {
        const d = e.data;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: 'pb-form-submitted',
          formId: d.event && d.event.formId,
          formName: d.event && d.event.formName,
        });
        if (d.mode !== 'gtm') {
          if (d.google && /^AW-[0-9]{6,15}$/i.test(d.google.id)) {
            pbGtag(d.google.id);
            win.gtag('event', 'conversion', { send_to: d.google.sendTo });
          }
          if (d.meta && /^[0-9]{10,20}$/.test(d.meta.pixelId)) {
            pbFbq(d.meta.pixelId);
            win.fbq('track', 'Lead');
          }
        }
      } else if (e.data.type === 'pb-form-redirect' && e.data.url && /^https?:\/\//i.test(e.data.url)) {
        setTimeout(function () {
          window.location.href = e.data.url;
        }, 600);
      }
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('message', messageHandler);
    };
  }, []);

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
            <style>{`
              iframe[data-pb-form] { height: 1430px; }
              @media(min-width:641px) { iframe[data-pb-form] { height: 1430px; } }
            `}</style>
            
            <iframe
              data-pb-form=""
              src="https://aosentertainment.planningbeats.com/form/c4e27211-c857-456c-8f23-c82b83d5afc7"
              title="Enquiry form"
              loading="lazy"
              width="100%"
              height="1430"
              allowTransparency={true}
              style={{ border: 'none', display: 'block', background: 'transparent' }}
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
