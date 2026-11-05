import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipLink } from '@/components/SkipLink';
import { siteConfig } from '@/data/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tagaittehad.org.pk'),
  title: {
    default: `${siteConfig.name} (${siteConfig.urduName}) | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    'Taga Ittehad Pakistan',
    'تگہ اتحاد پاکستان',
    'Shorkot City',
    'District Jhang',
    'Community Welfare Pakistan',
    'Chaudhry Muhammad Sadiq',
    'Chaudhry Faisal Moon Sarohi',
    'Dr Zafar Iqbal Taga',
    'Education scholarships',
    'Free medical camps',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.bio,
    url: 'https://tagaittehad.org.pk',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/logo/taga-ittehad-pakistan-logo.jpg',
        width: 800,
        height: 800,
        alt: `${siteConfig.name} Emblem`,
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.bio,
    images: ['/images/logo/taga-ittehad-pakistan-logo.jpg'],
  },
  icons: {
    icon: '/images/logo/tehriq-e-ithad-badge.jpg',
    shortcut: '/images/logo/tehriq-e-ithad-badge.jpg',
    apple: '/images/logo/taga-ittehad-pakistan-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden max-w-full`}>
      <body className="min-h-screen flex flex-col bg-brand-warm text-slate-800 overflow-x-hidden max-w-full">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none overflow-x-hidden max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
