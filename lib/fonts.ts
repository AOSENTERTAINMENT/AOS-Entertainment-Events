import { Cormorant_Garamond, Inter, Space_Grotesk } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['500', '700'],
  display: 'swap',
});

export const fontCormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
