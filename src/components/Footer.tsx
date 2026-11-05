import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { Phone, Mail, MapPin, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-950 text-slate-200 border-t-4 border-brand-gold-500" aria-label="Footer">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Organization Bio & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-full p-1">
                <Image
                  src="/images/logo/taga-ittehad-pakistan-logo.jpg"
                  alt="Taga Ittehad Pakistan Crest"
                  fill
                  sizes="56px"
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {siteConfig.name}
                </h3>
                <p className="text-xs font-serif text-brand-gold-400" dir="rtl">
                  {siteConfig.urduName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 italic font-serif border-l-2 border-brand-gold-400 pl-3">
              &quot;{siteConfig.tagline}&quot;
              <span className="block not-italic text-xs text-slate-400 mt-0.5">
                {siteConfig.englishSubline}
              </span>
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.bio}
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400 block mb-1.5">
                Core Values
              </span>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.coreValues.map((val) => (
                  <span
                    key={val}
                    className="inline-block px-2.5 py-0.5 bg-brand-green-900/90 text-brand-green-100 rounded text-xs border border-brand-green-800"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
              Explore & Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  About Our Organization
                </Link>
              </li>
              <li>
                <Link href="/chairman" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Chairman&apos;s Message
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Central Cabinet & Executives
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Areas & Town Presidents
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Milestones & Progress
                </Link>
              </li>
              <li>
                <Link href="/welfare" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Welfare Programs & Aid
                </Link>
              </li>
              <li>
                <Link href="/notifications" className="hover:text-brand-gold-300 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:underline">
                  Official Notifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Central Office & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
              Central Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  {siteConfig.centralOffice.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  Phone / WhatsApp: {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-3">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs font-semibold shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[38px]"
                >
                  <span>Connect on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Social & Official Notice */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold-400 mb-4">
              Official Channels
            </h4>
            <div className="space-y-2.5">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-brand-green-900/60 hover:bg-brand-green-900 border border-brand-green-800 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold-400 min-h-[44px]"
              >
                <span className="font-medium text-slate-200">Official Facebook Page</span>
                <ExternalLink className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 bg-brand-green-900/60 hover:bg-brand-green-900 border border-brand-green-800 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold-400 min-h-[44px]"
              >
                <span className="font-medium text-slate-200">Official TikTok Portal</span>
                <ExternalLink className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-brand-green-900/40 border border-brand-green-800/80 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-brand-gold-400 font-semibold">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Demonstration Notice</span>
              </div>
              <p>
                This demo website presents verified facts, official circulars, and structured placeholders for community review prior to CMS deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Bottom Bar */}
      <div className="bg-brand-green-950/90 border-t border-brand-green-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} ({siteConfig.urduName}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-slate-200 focus:outline-none focus:underline">
              Privacy Policy
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className="hover:text-slate-200 focus:outline-none focus:underline">
              Terms of Use
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/contact" className="hover:text-slate-200 focus:outline-none focus:underline">
              Helpdesk & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
