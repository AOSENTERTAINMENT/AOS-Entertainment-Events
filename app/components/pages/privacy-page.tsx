'use client';

import { useEffect } from 'react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-neon max-w-none">
          <h1 className="text-5xl font-display font-bold mb-8 uppercase tracking-tighter">Privacy Policy</h1>
          <p className="text-white/40 text-sm mb-12">Last Updated: March 10, 2026</p>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">1. Who We Are</h2>
            <p className="text-white/70 leading-relaxed">
              AOS Entertainment (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates as a professional DJ service provider based in Cork, Ireland. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our contact form to enquire about our services.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">We only collect information that you voluntarily provide to us through our website&apos;s contact form. This information includes:</p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>
                <strong>Name:</strong> To know who we are communicating with.
              </li>
              <li>
                <strong>Email Address:</strong> To respond to your enquiry and send booking details.
              </li>
              <li>
                <strong>Event Date:</strong> To check our availability for your specific date.
              </li>
              <li>
                <strong>Event Type:</strong> To understand the nature of your celebration (e.g., Wedding, Corporate).
              </li>
              <li>
                <strong>Event Details:</strong> Any additional information you provide about your venue or music preferences.
              </li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              We do <strong>not</strong> collect phone numbers, payment information, or require you to register for an account.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">The legal basis for processing your data is our legitimate interest in responding to your service enquiries. We use your information strictly for:</p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Responding to your initial enquiry.</li>
              <li>Providing quotes and checking availability.</li>
              <li>Managing your booking if you choose to proceed with our services.</li>
              <li>Internal record-keeping related to our business operations.</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">We do not use your information for automated decision-making or profiling.</p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">4. Cookies and Tracking</h2>
            <p className="text-white/70 leading-relaxed">
              Our website is designed to be privacy-friendly. We currently <strong>do not use</strong> Google Analytics, advertising trackers, or marketing cookies. We do not track your behavior across other websites.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">5. Data Storage and Security</h2>
            <p className="text-white/70 leading-relaxed">
              Your information is submitted via a secure connection (HTTPS) and is stored on our secure email servers. We take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information. We retain your data only for as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">6. Sharing Your Information</h2>
            <p className="text-white/70 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties. We only share your information with service providers (such as our email hosting provider) who assist us in operating our business, and only to the extent necessary for them to provide those services. We may also disclose your information if required to do so by law.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">7. Your Rights Under GDPR</h2>
            <p className="text-white/70 leading-relaxed mb-4">As a resident of the European Union, you have specific rights regarding your personal data:</p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>
                <strong>The right to access:</strong> You can request a copy of the data we hold about you.
              </li>
              <li>
                <strong>The right to rectification:</strong> You can ask us to correct any inaccurate information.
              </li>
              <li>
                <strong>The right to erasure:</strong> You can request that we delete your personal data.
              </li>
              <li>
                <strong>The right to object:</strong> You can object to our processing of your data.
              </li>
              <li>
                <strong>The right to data portability:</strong> You can request that we transfer your data to another organization.
              </li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink mb-4">8. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">If you have any questions about this Privacy Policy or wish to exercise any of your rights, please contact us at:</p>
            <div className="mt-4 p-6 glass rounded-2xl border border-white/5 inline-block">
              <p className="font-bold text-white">AOS Entertainment</p>
              <p className="text-white/70">Cork, Ireland</p>
              <p className="text-pink">alan@aosentertainment.ie</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
