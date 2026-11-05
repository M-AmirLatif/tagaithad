import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { executiveLeaders, cabinetMembers } from '@/data/leadership';
import { SectionHeading } from '@/components/SectionHeading';
import { PersonCard } from '@/components/PersonCard';
import { DemoBadge } from '@/components/DemoBadge';
import { CheckCircle2, Shield, Calendar, Users, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Leadership & Cabinet | Taga Ittehad Pakistan',
  description: 'Central President Chaudhry Muhammad Sadiq, Central Vice President Chaudhry Faisal Moon Sarohi, and Central Cabinet office-bearers.',
};

export default function LeadershipPage() {
  const president = executiveLeaders.find((l) => l.id === 'ch-muhammad-sadiq');
  const vicePresident = executiveLeaders.find((l) => l.id === 'ch-faisal-moon-sarohi');
  const educationSecretary = executiveLeaders.find((l) => l.id === 'central-education-secretary');

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Leadership</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Organizational Hierarchy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Central Executive Leadership & Cabinet
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            &quot;Our goal is not positions but unity; bringing the entire community together on one platform with love and consensus.&quot;
          </p>
        </div>

        {/* President & Vice President Spotlight Section */}
        <section aria-labelledby="presidential-council" className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h2 id="presidential-council" className="text-2xl font-bold text-slate-900">
              President & Vice President
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Executive Presidency Ratified 06 Sept 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Central President Card */}
            {president && (
              <div className="bg-white rounded-2xl border-2 border-brand-gold-500/80 shadow-md overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/11] w-full bg-slate-100">
                    <Image
                      src={president.image}
                      alt={president.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold-500 text-slate-950 shadow">
                        <Award className="w-3.5 h-3.5" aria-hidden="true" />
                        Central President
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <DemoBadge label="Verified Leader" variant="verified" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-sm font-serif text-brand-green-700 font-semibold block" dir="rtl">
                        {president.urduName}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {president.name}
                      </h3>
                      <p className="text-xs text-brand-gold-600 font-semibold mt-0.5">
                        Central President • Taga Ittehad Pakistan (Advisor)
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {president.bio}
                    </p>

                    {president.keyQuote && (
                      <blockquote className="p-3 bg-brand-green-50 rounded-lg border-l-4 border-brand-green-600 text-xs italic text-brand-green-900">
                        &quot;{president.keyQuote}&quot;
                      </blockquote>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-gold-600" aria-hidden="true" />
                    <span>Oath taken: 06 September 2026</span>
                  </div>
                  <div className="font-semibold text-brand-green-800">
                    Phone: {president.contact}
                  </div>
                </div>
              </div>
            )}

            {/* Central Vice President Card */}
            {vicePresident && (
              <div className="bg-white rounded-2xl border-2 border-brand-green-600/80 shadow-md overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/11] w-full bg-slate-100">
                    <Image
                      src={vicePresident.image}
                      alt={vicePresident.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-green-700 text-white shadow">
                        <Award className="w-3.5 h-3.5 text-brand-gold-400" aria-hidden="true" />
                        Central Vice President
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <DemoBadge label="Verified Leader" variant="verified" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-sm font-serif text-brand-green-700 font-semibold block" dir="rtl">
                        {vicePresident.urduName}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {vicePresident.name}
                      </h3>
                      <p className="text-xs text-brand-green-700 font-semibold mt-0.5">
                        Central Vice President • QEC Officer Air University Islamabad, Bahu Campus Shorkot Cantt
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {vicePresident.bio}
                    </p>

                    {vicePresident.keyQuote && (
                      <blockquote className="p-3 bg-brand-gold-50 rounded-lg border-l-4 border-brand-gold-500 text-xs italic text-brand-gold-950">
                        &quot;{vicePresident.keyQuote}&quot;
                      </blockquote>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Academic & Legal Advisor</span>
                  </div>
                  <div className="font-semibold text-brand-green-800">
                    Office of the Vice President
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Central Education Secretary Banner */}
          {educationSecretary && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-brand-green-600">
                <Image
                  src={educationSecretary.image}
                  alt={educationSecretary.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-brand-green-50 text-brand-green-800 font-bold text-xs">
                    Portfolio Announced 18 Oct 2026
                  </span>
                  <DemoBadge label="Nomination In Review" variant="demo" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {educationSecretary.name}
                </h3>
                <p className="text-xs text-brand-gold-600 font-semibold">
                  Central Education Secretary • Student Stipend Administration
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {educationSecretary.bio}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/welfare#education"
                  className="px-4 py-2.5 bg-brand-green-700 hover:bg-brand-green-800 text-white rounded-lg text-xs font-semibold shadow transition-colors inline-block"
                >
                  View Education Schemes →
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Central & Union Cabinet Grid */}
        <section aria-labelledby="cabinet-grid-title" className="space-y-8">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <h2 id="cabinet-grid-title" className="text-2xl font-bold text-slate-900">
                Central & Union Cabinet Office-Bearers
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Newly appointed central secretariat secretaries and regional union leaders.
              </p>
            </div>
            <span className="text-xs font-semibold text-brand-green-800 bg-brand-green-50 px-2.5 py-1 rounded">
              Cabinet Protocol 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinetMembers.map((member) => (
              <PersonCard
                key={member.id}
                name={member.name}
                urduName={member.urduName}
                title={member.title}
                department={member.department}
                image={member.image}
                alt={member.alt}
                isConfirmed={member.isConfirmed}
                contact={member.contact}
                affiliations={member.affiliations}
                bio={member.bio}
              />
            ))}
          </div>
        </section>

        {/* Values Callout */}
        <div className="bg-brand-green-950 text-white p-8 rounded-2xl border border-brand-green-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Guiding Principle of the Cabinet
            </h3>
            <p className="text-xs sm:text-sm text-brand-green-200 max-w-2xl leading-relaxed">
              &quot;Our goal is not positions but unity; we do not aim to compete with or prove anyone wrong, but to bring the entire community together on one platform with love and consensus; no member has personal interests; the aim is service and brotherhood.&quot;
            </p>
          </div>
          <Link
            href="/areas"
            className="px-6 py-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow flex-shrink-0 transition-colors"
          >
            Explore Areas & Towns Directory →
          </Link>
        </div>
      </div>
    </div>
  );
}
