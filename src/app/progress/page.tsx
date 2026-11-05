'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { milestonesTimeline, yearlyGrowthStats, strategicGoals2027, Milestone } from '@/data/progress';
import { SectionHeading } from '@/components/SectionHeading';
import { DemoBadge } from '@/components/DemoBadge';
import {
  Calendar,
  CheckCircle2,
  TrendingUp,
  Target,
  ArrowRight,
  ShieldCheck,
  Building,
  GraduationCap,
  HeartPulse,
  Maximize2,
  X,
  FileText,
} from 'lucide-react';

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'charts' | 'goals'>('timeline');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; alt: string } | null>(null);

  // SVG Chart Maximums
  const maxStudents = 1000;
  const maxPatients = 4500;

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Progress</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Organizational Journey</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Organisation Progress & Milestones
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            A transparent chronicle of our founding assemblies, verified executive ratifications, and ambitious goals for 2027.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-4" role="tablist">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            role="tab"
            aria-selected={activeTab === 'timeline'}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'timeline'
                ? 'bg-brand-green-800 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Chronological Timeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('charts')}
            role="tab"
            aria-selected={activeTab === 'charts'}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'charts'
                ? 'bg-brand-green-800 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Growth Charts (Demo)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('goals')}
            role="tab"
            aria-selected={activeTab === 'goals'}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'goals'
                ? 'bg-brand-green-800 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Goals for 2027
          </button>
        </div>

        {/* Tab 1: Chronological Timeline - Redesigned for Crystal-Clear Data and Compact Images */}
        {activeTab === 'timeline' && (
          <div className="space-y-8">
            <div className="relative border-l-2 border-brand-green-700/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
              {milestonesTimeline.map((item) => (
                <article key={item.id} className="relative group">
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-4 w-5 h-5 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${
                      item.isVerifiedFact ? 'bg-emerald-600' : 'bg-amber-500'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Milestone Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-brand-green-600 transition-all">
                    {/* Clear Header Data Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Prominent Date Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-green-900 text-white text-xs font-bold shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-brand-gold-400" aria-hidden="true" />
                          <span>{item.date}</span>
                        </div>

                        {/* Category Tag */}
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                          {item.category}
                        </span>
                      </div>

                      {/* Verification Status */}
                      <div>
                        {item.isVerifiedFact ? (
                          <DemoBadge label="Verified Organizational Record" variant="verified" />
                        ) : (
                          <DemoBadge label="Founding Milestone (Demo Date)" variant="demo" />
                        )}
                      </div>
                    </div>

                    {/* Card Content & Compact Media Side-by-Side */}
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Clear, Crisp Milestone Data & Typography */}
                      <div className={`${item.image ? 'md:col-span-8' : 'md:col-span-12'} space-y-3`}>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand-green-800 transition-colors leading-snug">
                          {item.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                          <span>Archived under Central Secretariat Records</span>
                        </div>
                      </div>

                      {/* Right: Compact Framed Media Thumbnail (Never oversized) */}
                      {item.image && (
                        <div className="md:col-span-4 flex flex-col items-center justify-center">
                          <div
                            onClick={() =>
                              setPreviewImage({
                                src: item.image!,
                                title: item.title,
                                alt: item.title,
                              })
                            }
                            className="relative w-full max-w-[260px] aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm cursor-pointer group/img hover:border-brand-green-600 transition-all"
                            title="Click to view full image"
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 260px"
                              className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-200"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[1px]">
                              <Maximize2 className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
                              <span>Enlarge Photo</span>
                            </div>
                          </div>
                          <span className="text-[11px] text-slate-500 mt-1.5">
                            Click to expand image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Growth Charts (Lightweight SVG) */}
        {activeTab === 'charts' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Beneficiary Growth & Trajectory (2024 – 2027)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Demonstration statistical progression across key welfare sectors.
                  </p>
                </div>
                <DemoBadge label="Demo Projected Metrics" variant="demo" />
              </div>

              {/* Chart 1: Deserving Students Supported */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-bold text-slate-800">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-green-700" aria-hidden="true" />
                    Students Supported (Scholarship Stipends)
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Target 2027: 1,000</span>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center text-xs">
                  {yearlyGrowthStats.map((stat) => {
                    const heightPercent = Math.min(100, (stat.studentsSupported / maxStudents) * 100);
                    return (
                      <div key={stat.year} className="flex flex-col items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-xl h-44 flex items-end p-2 border border-slate-200/60">
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full bg-gradient-to-t from-brand-green-800 to-brand-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow transition-all duration-500"
                          >
                            <span className="text-[11px] drop-shadow-sm">{stat.studentsSupported}</span>
                          </div>
                        </div>
                        <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">
                          {stat.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chart 2: Free Healthcare Patients Treated */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm font-bold text-slate-800">
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    Patients Treated in Free Medical Camps
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Target 2027: 4,500</span>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center text-xs">
                  {yearlyGrowthStats.map((stat) => {
                    const heightPercent = Math.min(100, (stat.patientsTreated / maxPatients) * 100);
                    return (
                      <div key={stat.year} className="flex flex-col items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-xl h-44 flex items-end p-2 border border-slate-200/60">
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full bg-gradient-to-t from-brand-gold-600 to-brand-gold-400 rounded-lg flex items-center justify-center text-slate-950 font-bold text-xs shadow transition-all duration-500"
                          >
                            <span className="text-[11px] drop-shadow-sm">{stat.patientsTreated}</span>
                          </div>
                        </div>
                        <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">
                          {stat.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Strategic Goals for 2027 */}
        {activeTab === 'goals' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategicGoals2027.map((goal) => (
                <div
                  key={goal.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
                        {goal.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Status: {goal.status}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                      {goal.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Target Outcome:</span>
                    <span className="font-bold text-brand-green-800">
                      {goal.targetMetric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Preview Lightbox Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm truncate pr-4">
                  {previewImage.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] max-h-[70vh] bg-slate-50 rounded-xl overflow-hidden">
                <Image
                  src={previewImage.src}
                  alt={previewImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="px-4 py-1.5 bg-brand-green-700 text-white text-xs font-semibold rounded-lg hover:bg-brand-green-800"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
