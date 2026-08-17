import type { Metadata } from 'next';
import './globals.css';
import { Navbar, Footer } from './components';
import { JsonLd } from './components/JsonLd';
import { fontCormorant, fontInter, fontSpaceGrotesk } from '@/lib/fonts';
import { metadataBase, defaultRobots } from '@/lib/metadata';
import { getStructuredData } from '@/lib/structured-data';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const fontVars = `${fontInter.variable} ${fontSpaceGrotesk.variable} ${fontCormorant.variable}`;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'AOS Entertainment - Weddings & Events',
    template: '%s | AOS Entertainment',
  },
  description:
    'Professional DJ Cork for weddings, corporate events & parties. Event DJ Cork & Wedding DJ Cork by AOS Entertainment. Book your date.',
  keywords: [
    'DJ Cork',
    'Wedding DJ Cork',
    'Event DJ Cork',
    'Corporate DJ Cork',
    'AOS Entertainment',
  ],
  robots: defaultRobots,
  icons: {
    icon: '/aos-favicon.ico',
  },
  openGraph: {
    siteName: 'AOS Entertainment',
    locale: 'en_IE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVars}>
      <body className="font-sans antialiased selection:bg-pink/30 selection:text-white overflow-x-hidden">
        <JsonLd data={getStructuredData()} />
        <Navbar />
        <main className="min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
