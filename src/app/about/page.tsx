import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { SectionHeading } from '@/components/SectionHeading';
import { CheckCircle2, ShieldCheck, Heart, Award, ArrowRight, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Taga Ittehad Pakistan',
  description: 'Learn about the history, non-political charter, core values, and humanitarian mission of Taga Ittehad Pakistan.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">About</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Organizational Charter</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Taga Ittehad Pakistan
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            &quot;The Nation&apos;s Support, Unity Is Our Strength&quot;
          </p>
        </div>

        {/* Main Charter Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-base">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Genesis & Noble Mandate
            </h2>
            <p>
              Taga Ittehad Pakistan (Urdu: تگہ اتحاد پاکستان) is an autonomous, non-political welfare organization founded to serve humanity, eradicate ignorance through educational sponsorship, provide dignified healthcare to underserved villages, and restore genuine fraternal unity.
            </p>
            <p>
              Under the central presidency of Chaudhry Muhammad Sadiq Taga Ittehad (Advisor) and Central Vice President Chaudhry Faisal Moon Sarohi, our organization functions on a singular bedrock principle: <strong>Our goal is not positions or worldly praise, but unity; we do not aim to compete with or prove anyone wrong, but to bring the entire community together on one platform with love and consensus.</strong>
            </p>
          </div>

          {/* Core Values 4-Box */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Our Four Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-brand-green-800 uppercase tracking-wider">1. Unity (Ittehad)</span>
                <p className="text-xs sm:text-sm text-slate-600">
                  Bringing every family across Tehsil Shorkot, Islamabad, Karachi, and rural union councils together without factionalism.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-brand-green-800 uppercase tracking-wider">2. Love (Mohabbat)</span>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fostering unconditional mutual respect, compassion for orphans and widows, and gentle reconciliation of civil disputes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-brand-green-800 uppercase tracking-wider">3. Service (Khidmat)</span>
                <p className="text-xs sm:text-sm text-slate-600">
                  Executing concrete relief: student monthly stipends, multi-specialty medical camps, clean water, and flood relief.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-brand-green-800 uppercase tracking-wider">4. Brotherhood (Ukhuwwat)</span>
                <p className="text-xs sm:text-sm text-slate-600">
                  Standing by community members during bereavement, illness, and economic hardship as a single undivided family.
                </p>
              </div>
            </div>
          </div>

          {/* Central Headquarters Info */}
          <div className="p-6 rounded-2xl bg-brand-green-50/70 border border-brand-green-200 space-y-2">
            <div className="flex items-center gap-2 text-brand-green-900 font-bold">
              <MapPin className="w-5 h-5 text-brand-green-700" aria-hidden="true" />
              <span>Central Administrative Seat</span>
            </div>
            <p className="text-sm text-slate-700">
              <strong>Address:</strong> Near Rescue Office, Patan Road, Shorkot City, District Jhang, Punjab, Pakistan – 35050
            </p>
            <p className="text-xs text-slate-600">
              The office oversees educational verification committees, legal grievance arbitration, and disaster relief dispatches.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-green-700 hover:bg-brand-green-800 text-white rounded-xl text-xs font-bold shadow transition-colors"
            >
              <span>View Executive Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
            >
              <span>Contact Central Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
