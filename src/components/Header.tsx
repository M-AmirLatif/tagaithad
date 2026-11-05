'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { Menu, X, Phone, Heart, Globe, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDonate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Programmatic navigation to guarantee reliable routing on mobile
  const handleMobileNavigate = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Chairman', href: '/chairman' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Areas', href: '/areas' },
    { label: 'Welfare', href: '/welfare' },
    { label: 'Progress', href: '/progress' },
    { label: 'News', href: '/news' },
    { label: 'Notices', href: '/notifications' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification Bar - Symmetrically Aligned on Mobile & Desktop */}
      <div className="bg-brand-green-950 text-white text-xs py-2 px-3 sm:px-4 border-b border-brand-green-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          {/* Motto & Landmark */}
          <div className="flex items-center justify-center sm:justify-start gap-2 text-center">
            <span className="font-serif italic text-brand-gold-400 font-medium">
              &quot;Qaum Ka Sahara, Ittehad Hamara&quot;
            </span>
            <span className="hidden md:inline text-brand-green-400">|</span>
            <span className="hidden md:inline text-brand-green-100">
              Central Office: Patan Road, Shorkot City
            </span>
          </div>

          {/* Contact & Language Pill */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 text-brand-green-100 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-brand-gold-400 rounded px-1.5 py-0.5"
              aria-label={`Call Central Office at ${siteConfig.contact.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-400" aria-hidden="true" />
              <span className="font-medium tracking-wide">{siteConfig.contact.displayPhone}</span>
            </a>

            <div
              className="inline-flex items-center gap-1 bg-brand-green-900 px-2 py-0.5 rounded text-[11px] border border-brand-green-700/80 text-brand-green-200"
              title="Urdu (RTL) mode is currently in preparation for Phase 2"
            >
              <Globe className="w-3 h-3 text-brand-gold-400" aria-hidden="true" />
              <span className="font-semibold text-white">EN</span>
              <span className="text-brand-green-400">|</span>
              <span className="opacity-60 cursor-not-allowed">
                اردو (Soon)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white transition-all ${
          scrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-100'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
            {/* Brand Logo & Name: Guaranteed Left-Aligned & Symmetrical */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-brand-green-700 rounded-lg p-1"
              aria-label="Taga Ittehad Pakistan Home"
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 flex-shrink-0">
                <Image
                  src="/images/logo/taga-ittehad-pakistan-logo.jpg"
                  alt="Taga Ittehad Pakistan Logo"
                  fill
                  sizes="(max-width: 640px) 44px, 56px"
                  className="object-contain rounded-full shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col items-start justify-center text-left">
                <span className="text-sm sm:text-base md:text-lg xl:text-xl font-bold text-brand-green-900 leading-tight group-hover:text-brand-green-700 transition-colors whitespace-nowrap">
                  Taga Ittehad Pakistan
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-brand-gold-600 font-serif leading-none mt-0.5 text-left block" dir="ltr">
                  <span dir="rtl" className="inline-block">تگہ اتحاد پاکستان</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Strong Active Highlight */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 flex-shrink">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-green-700 ${
                      isActive
                        ? 'bg-brand-green-800 text-white shadow-sm ring-1 ring-brand-green-900'
                        : 'text-slate-700 hover:text-brand-green-800 hover:bg-brand-green-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Header Right CTA: Dedicated Spacing */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0 pl-3 border-l border-slate-200">
              <Link
                href="/welfare"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs xl:text-sm font-bold text-white bg-brand-green-700 hover:bg-brand-green-800 active:bg-brand-green-900 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-700 whitespace-nowrap"
              >
                <Heart className="w-4 h-4 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
                <span>Get Involved</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-brand-green-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green-700 min-h-[44px] min-w-[44px]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay & Drawer with Guaranteed Navigation */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/images/logo/taga-ittehad-pakistan-logo.jpg"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm text-brand-green-900 leading-tight">
                        Taga Ittehad Pakistan
                      </span>
                      <span className="text-[11px] font-serif text-brand-gold-600">
                        تگہ اتحاد پاکستان
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-700 min-h-[44px] min-w-[44px]"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile Links using Programmatic Router Push for 100% Reliable Navigation */}
                <div className="py-4 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <button
                        key={link.href}
                        type="button"
                        onClick={() => handleMobileNavigate(link.href)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all text-left ${
                          isActive
                            ? 'bg-brand-green-800 text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-brand-green-800'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-3">
                <button
                  type="button"
                  onClick={() => handleMobileNavigate('/welfare')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-brand-green-700 hover:bg-brand-green-800 rounded-xl shadow min-h-[44px]"
                >
                  <Heart className="w-4 h-4 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
                  <span>Get Involved / Donate</span>
                </button>

                <div className="text-center text-xs text-slate-500 pt-2">
                  <p>Central Office: Patan Road, Shorkot City</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-brand-green-800 mt-1 block">
                    Tel: {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
