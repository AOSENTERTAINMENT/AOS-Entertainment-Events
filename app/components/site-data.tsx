import type { ReactNode } from 'react';
import {
  Music,
  Users,
  Mic2,
  Speaker,
  Play,
  Heart,
  Sparkles,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  vibe: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const SERVICES: Service[] = [
  { id: 'weddings', title: 'Weddings', vibe: 'Elegant & Energetic', description: 'Specializing in reading the room and playing exactly what the crowd needs, from your romantic first dance to a high-energy finale.', icon: <Users className="w-6 h-6" /> },
  { id: 'parties', title: 'Private Parties', vibe: 'High-Octane Fun', description: 'Unforgettable nights for 21sts, 30ths, 50ths, and festivals. Versatile open-format mixing that keeps every guest on their feet.', icon: <Music className="w-6 h-6" /> },
  { id: 'corporate', title: 'Corporate Events', vibe: 'Professional & Polished', description: 'Full AV solutions including high-quality sound, lighting, and video screens for awards nights, brand launches, and conferences.', icon: <Speaker className="w-6 h-6" /> },
  { id: 'interactive', title: 'Interactive Entertainment', vibe: 'Engaging & Fun', description: 'Beyond traditional DJ sets: Music Bingo, Quiz Nights, and Karaoke. Perfect for corporate team building or hen parties.', icon: <Mic2 className="w-6 h-6" /> },
  { id: 'themed', title: 'Themed Events', vibe: 'Nostalgic & Themed', description: 'Immersive 70s, 80s, 90s, and 00s Decades Nights. The perfect soundtrack for your themed celebration.', icon: <Sparkles className="w-6 h-6" /> },
  { id: 'hen', title: 'Hen Party Packages', vibe: 'Fun & Tailored', description: 'Tailored music and games to kick off the celebrations. High-energy entertainment designed for the ultimate hen night.', icon: <Heart className="w-6 h-6" /> },
  { id: 'clubs', title: 'Nightclubs & Festivals', vibe: 'Pure Energy', description: 'Expert technical mixing for high-capacity venues and festivals. Reading the crowd and delivering high-octane sets.', icon: <Play className="w-6 h-6" /> },
];

export const FAQS = [
  { q: 'Do you travel across Cork?', a: 'Yes. I am based in Cork and regularly provide DJ services across Cork City and the entire county, including West Cork and East Cork. I am also available for nationwide bookings upon request.' },
  { q: 'Do you DJ weddings in Cork?', a: 'Yes. I have performed at many weddings across Cork City and County. I offer full-night sets or after-band packages tailored to your specific requirements.' },
  { q: 'Can you provide music for private parties and corporate events?', a: 'Yes. I provide bespoke entertainment for corporate gala dinners, brand launches, and private milestone birthdays (21sts, 30ths, 40ths, etc.) throughout Cork.' },
  { q: 'Do you provide sound and lighting?', a: 'Yes, every booking includes a professional-grade sound system and intelligent lighting rig. I use premium brands like RCF and Pioneer to ensure the best possible experience for your guests.' },
  { q: 'How far in advance should I book?', a: 'Cork is a busy hub for events, especially during wedding season. I recommend booking at least 6–12 months in advance for weddings, and 2–3 months for private parties.' },
  { q: 'Can guests request songs?', a: 'Yes. I am happy to take requests on the night, provided they fit the vibe of the event and your specific "do not play" list.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Aoife Fennessy',
    role: 'Party & Hen Client',
    content:
      "DJ Alan is the go to entertainment for all our parties, hens etc! He brings such enthusiasm and fun, putting so much effort into planning the types of music to play, games & prizes etc. Nothing is an hassle with Alan and he can get any crowd going no matter the size of the group! Looking forward to booking with Alan again in the future & giving mc'ing another go 😀",
    rating: 5,
  },
  {
    id: 2,
    name: 'Jesca Collins',
    role: 'Hen Party Client',
    content:
      "My sister booked DJ Alan for my hen in killarney, he was absolutely fantastic I can't recommend him enough. Such amazing craic!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Alison Browne',
    role: '18th Birthday Client',
    content:
      "Alan dj'd my 18th birthday and honestly no better man! He kept the party going and honestly made the night, his jokes and everything else than comes with him is just spectacular. All I heard from my friends the day after the birthday was 'That dj was amazing he made the night' and I can honestly and truely agree. Don't hesitate to book this man he is amazing!",
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  '/images/wedding-reception.png',
  '/images/full-dancefloor.png',
  '/images/dancefloor-full.png',
  '/images/dj-setup.png',
  '/images/dj-setup-2.png',
  '/images/dancefloor-branding.png',
  '/images/dj-alan.png',
  '/images/party-bench.png',
  '/images/rock-the-boat.png',
  '/images/aos-banner.png',
  '/images/dj-alan-logo.png',
];

export const GALLERY_VIDEOS = [
  '/videos/aos-video-1.mp4',
  '/videos/aos-video-2.mp4',
  '/videos/aos-video-3.mp4',
  '/videos/aos-video-4.mp4',
  '/videos/aos-video-5.mp4',
  '/videos/aos-video-6.mp4',
  '/videos/aos-video-7.mp4',
  '/videos/aos-video-8.mp4',
  '/videos/aos-video-9.mp4',
  '/videos/aos-video-10.mp4',
  '/videos/aos-video-11.mp4',
  '/videos/aos-video-12.mp4',
  '/videos/aos-video-13.mp4',
];

/** Descriptive alt text for gallery images (SEO + accessibility). */
export const GALLERY_ALT: Record<string, string> = {
  '/images/wedding-reception.png': 'Wedding reception dancefloor at a Cork event with DJ setup and guests',
  '/images/full-dancefloor.png': 'Full dancefloor at a Cork event with lighting and crowd',
  '/images/dancefloor-full.png': 'Cork event dancefloor with DJ branding and atmosphere',
  '/images/dj-setup.png': 'Professional DJ setup and lighting at a Cork venue',
  '/images/dj-setup-2.png': "DJ Alan O'Sullivan setup with screens and equipment at Cork event",
  '/images/dancefloor-branding.png': 'Dancefloor with AOS Entertainment DJ branding, Cork',
  '/images/dj-alan.png': "DJ Alan O'Sullivan performing at a Cork event",
  '/images/party-bench.png': 'Party entertainment with guests and screens, Cork',
  '/images/rock-the-boat.png': 'Interactive party event with crowd, Cork',
  '/images/aos-banner.png': 'AOS Entertainment & Events brand banner',
  '/images/dj-alan-logo.png': "DJ Alan O'Sullivan logo",
};

export const HOMEPAGE_GALLERY_ITEMS: ({ type: 'image'; src: string } | { type: 'video'; src: string })[] = [
  { type: 'image', src: '/images/wedding-reception.png' },
  { type: 'video', src: '/videos/aos-video-4.mp4' },
  { type: 'video', src: '/videos/aos-video-6.mp4' },
  { type: 'image', src: '/images/dj-setup.png' },
  { type: 'video', src: '/videos/aos-video-9.mp4' },
  { type: 'image', src: '/images/dancefloor-branding.png' },
];

/** Google Business / reviews search (stable short URL; avoids brittle tracking params). */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=DJ+Alan+O%27Sullivan+Reviews&hl=en&udm=1';

export const homeHubItems = [
  { title: 'Weddings', desc: 'Elegant, romantic, and high-energy finales. The perfect score for your love story.', link: '/weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', accent: 'text-gold', border: 'hover:border-gold/50', imgAlt: 'Wedding couple and guests celebrating at a Cork reception — wedding DJ services' },
  { title: 'Clubs & Parties', desc: 'Pure energy, expert mixing, and a dancefloor that never stops. 21sts, 30ths, and more.', link: '/clubs-parties', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', accent: 'text-pink', border: 'hover:border-pink/50', imgAlt: 'Packed nightclub dancefloor with lighting — party DJ Cork' },
  { title: 'Corporate', desc: 'Professional, polished, and perfectly timed. Awards nights, brand launches, and parties.', link: '/corporate', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', accent: 'text-gold', border: 'hover:border-gold/50', imgAlt: 'Corporate event venue with stage lighting — corporate DJ Cork' },
];
