'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { welfarePrograms, WelfareProgram } from '@/data/welfare';
import { SectionHeading } from '@/components/SectionHeading';
import { DemoBadge } from '@/components/DemoBadge';
import { DemoDonationModal } from '@/components/DemoDonationModal';
import {
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  Users,
  Briefcase,
  Heart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function WelfarePage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Education Support & Scholarships');

  const handleOpenDonate = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setDonateModalOpen(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Welfare Work</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Humanitarian Portfolios</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Welfare Programmes & Initiatives
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated wings established to serve education, health, emergency relief, and youth empowerment without personal ambition or competition.
          </p>
        </div>

        {/* Welfare Programs Deep-Dive List */}
        <div className="space-y-12">
          {welfarePrograms.map((program, index) => {
            const isReversed = index % 2 === 1;
            const IconComponent =
              program.iconName === 'GraduationCap'
                ? GraduationCap
                : program.iconName === 'HeartPulse'
                ? HeartPulse
                : program.iconName === 'ShieldAlert'
                ? ShieldAlert
                : program.iconName === 'Users'
                ? Users
                : Briefcase;

            return (
              <section
                key={program.id}
                id={program.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 transition-all hover:border-brand-green-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual / Poster */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 450px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <DemoBadge label={program.beneficiariesLabel} variant="demo" />
                      </div>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-700 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-xs font-serif text-brand-green-700 font-semibold block" dir="rtl">
                          {program.urduTitle}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {program.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-brand-gold-600 italic">
                      &quot;{program.tagline}&quot;
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {program.description}
                    </p>

                    {/* Sample Projects */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Featured Projects & Direct Interventions:
                      </h3>
                      <div className="space-y-2">
                        {program.projects.map((proj, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900">{proj.title}</span>
                              <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 font-medium">
                                {proj.location}
                              </span>
                            </div>
                            <p className="text-slate-600 text-xs">{proj.impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action & Stats Footer */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-extrabold text-brand-green-800">
                          {program.beneficiariesCount}
                        </span>
                        <span className="text-xs text-slate-500 leading-tight">
                          {program.beneficiariesLabel}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenDonate(program.title)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-green-700 hover:bg-brand-green-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                      >
                        <Heart className="w-4 h-4 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
                        <span>Support This Cause (Demo)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Support Our Work Banner / Donation Section */}
        <section className="bg-gradient-to-r from-brand-green-950 via-brand-green-900 to-brand-green-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold-500 text-slate-950 uppercase tracking-wider">
              Community Philanthropy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Support Our Humanitarian Mission
            </h2>
            <p className="text-xs sm:text-sm text-brand-green-100 leading-relaxed">
              Every stipend, clinic, and relief parcel is made possible through the generous contributions of the Taga brotherhood across Pakistan and overseas.
            </p>
          </div>

          <div className="p-4 bg-brand-green-900/60 rounded-xl border border-brand-green-800 max-w-lg mx-auto text-xs text-brand-green-200">
            <p className="font-semibold text-brand-gold-400">DEMO DONATION FORM DISCLOSURE:</p>
            <p className="mt-1">
              Payments on this website are simulated for layout evaluation. For authentic verified contributions, please contact Central Finance directly at 0301-7696784.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleOpenDonate('General Community Welfare Fund')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-slate-950 font-bold rounded-xl shadow-xl transition-all text-sm sm:text-base"
          >
            <Heart className="w-5 h-5 fill-slate-950" aria-hidden="true" />
            <span>Open Demo Donation Interface</span>
          </button>
        </section>

        {/* Demo Donation Modal */}
        <DemoDonationModal
          isOpen={donateModalOpen}
          onClose={() => setDonateModalOpen(false)}
          defaultProgram={selectedProgram}
        />
      </div>
    </div>
  );
}
