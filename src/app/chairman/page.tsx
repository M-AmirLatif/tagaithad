import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { chairmanProfile } from '@/data/leadership';
import { SectionHeading } from '@/components/SectionHeading';
import { DemoBadge } from '@/components/DemoBadge';
import { ArrowRight, Quote, ShieldCheck, HeartHandshake, Eye, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chairman Message & Vision | Dr. Zafar Iqbal Taga',
  description: 'Official address and humanitarian vision of Chairman Dr. Zafar Iqbal Taga for Taga Ittehad Pakistan.',
};

export default function ChairmanPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Chairman</span>
        </nav>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Executive Leadership</span>
          </div>
          <span className="block text-lg font-serif text-brand-green-800" dir="rtl">
            {chairmanProfile.urduName}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chairman&apos;s Profile & Address
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Guiding the community with moral integrity, mutual consensus, and humanitarian devotion.
          </p>
        </div>

        {/* Chairman Profile Card & Message Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-start">
            {/* Left: Portrait & Badges */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border-2 border-brand-gold-500/50 shadow-md">
                <Image
                  src={chairmanProfile.image}
                  alt="Chairman Dr. Zafar Iqbal Taga placeholder portrait in traditional dress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute top-3 right-3 z-10">
                  <DemoBadge label="Portrait Pending Confirmation" variant="demo" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-brand-gold-400 font-semibold uppercase tracking-wider">
                    Chairman
                  </p>
                  <p className="text-xl font-bold">
                    {chairmanProfile.name}
                  </p>
                  <p className="text-xs text-slate-300 font-serif" dir="rtl">
                    {chairmanProfile.urduName}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-brand-green-700" aria-hidden="true" />
                  <span>Administrative Verification</span>
                </div>
                <p>
                  Chairman portfolio confirmed under central organization charter. Official confirmed portrait photo will be updated upon final verification.
                </p>
              </div>
            </div>

            {/* Right: Message to the Community */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Quote className="w-8 h-8 text-brand-gold-500 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Message to the Community
                    </h2>
                    <span className="text-xs text-slate-500">
                      Taga Ittehad Pakistan (Central Assembly)
                    </span>
                  </div>
                </div>
                <DemoBadge label={chairmanProfile.messageStatus} variant="draft" />
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                {chairmanProfile.message.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-slate-900 text-base">
                    {chairmanProfile.name}
                  </p>
                  <p className="text-xs text-brand-green-800 font-semibold">
                    {chairmanProfile.title}
                  </p>
                </div>

                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-green-700 hover:bg-brand-green-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <span>Meet Central Cabinet</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-700 flex items-center justify-center">
              <Eye className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {chairmanProfile.vision}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold-50 text-brand-gold-700 flex items-center justify-center">
              <Target className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {chairmanProfile.mission}
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-brand-green-950 text-white rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold">
              The Four Fundamental Pillars
            </h3>
            <p className="text-xs sm:text-sm text-brand-green-200">
              Upholding these principles across every welfare initiative and regional council.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chairmanProfile.corePillars.map((pillar, idx) => (
              <div key={idx} className="bg-brand-green-900/70 p-5 rounded-xl border border-brand-green-800 space-y-2">
                <span className="text-brand-gold-400 font-mono text-sm font-bold">
                  0{idx + 1}.
                </span>
                <h4 className="font-bold text-base text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
