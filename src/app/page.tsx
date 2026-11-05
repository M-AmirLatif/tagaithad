'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { welfarePrograms } from '@/data/welfare';
import { executiveLeaders } from '@/data/leadership';
import { newsArticles } from '@/data/news';
import { officialNotifications } from '@/data/notifications';
import { SectionHeading } from '@/components/SectionHeading';
import { StatCounter } from '@/components/StatCounter';
import { PersonCard } from '@/components/PersonCard';
import { NewsCard } from '@/components/NewsCard';
import { NotificationRow } from '@/components/NotificationRow';
import { DemoBadge } from '@/components/DemoBadge';
import { DemoDonationModal } from '@/components/DemoDonationModal';
import {
  Heart,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  Users,
  Building,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState('Education Support & Scholarships');

  const openDonate = (causeTitle?: string) => {
    if (causeTitle) setSelectedCause(causeTitle);
    setDonateModalOpen(true);
  };

  const focusPrograms = welfarePrograms.slice(0, 4);
  const latestNews = newsArticles.slice(0, 3);
  const latestNotifications = officialNotifications.slice(0, 3);

  // Gallery items selected from verified photos
  const galleryPhotos = [
    {
      src: '/images/gallery/press-coverage-training-session.jpg',
      title: 'Press Coverage in 4 Dailies',
      alt: 'National newspaper clippings highlighting Taga Ittehad leaders training',
    },
    {
      src: '/images/gallery/free-medical-camp-poster.jpg',
      title: 'Free Medical Camp Collaboration',
      alt: 'Free medical camp banner organized with Alkhidmat & WHO',
    },
    {
      src: '/images/gallery/educational-scholarships-announcement.jpg',
      title: 'Student Scholarships Scheme',
      alt: 'Education stipend announcement for deserving students in Shorkot',
    },
    {
      src: '/images/gallery/ramadan-sehri-iftar-calendar-2026.jpg',
      title: 'Ramadan Welfare Timetable',
      alt: 'Ramadan 2026 Sehri & Iftar timetable publication',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section
        className="relative bg-gradient-to-b from-brand-green-950 via-brand-green-900 to-brand-green-950 text-white overflow-hidden py-16 sm:py-24 lg:py-28"
        aria-label="Hero Introduction"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green-800/80 border border-brand-gold-500/40 text-brand-gold-300 text-xs font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
                <span>Non-Political Humanitarian Welfare Organization</span>
              </div>

              <div className="space-y-2">
                <span className="block text-xl sm:text-2xl font-serif text-brand-gold-400" dir="rtl">
                  {siteConfig.urduName}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {siteConfig.name}
                </h1>
                <p className="text-lg sm:text-2xl font-serif italic text-brand-gold-300 pt-1">
                  &quot;{siteConfig.tagline}&quot;
                </p>
                <p className="text-sm sm:text-base font-sans text-brand-green-100 font-medium">
                  {siteConfig.englishSubline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {siteConfig.bio}
              </p>

              {/* 2 CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  href="/welfare"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 active:bg-brand-gold-700 text-slate-950 font-bold rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-400 min-h-[48px]"
                >
                  <span>Our Welfare Work</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => openDonate('General Community Welfare Fund')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-brand-green-800 hover:bg-brand-green-700 active:bg-brand-green-900 border border-brand-green-600 text-white font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold-400 min-h-[48px]"
                >
                  <Heart className="w-4 h-4 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
                  <span>Support / Join Us</span>
                </button>
              </div>

              {/* Guiding Pillars - Perfectly Symmetrical on Mobile (2x2) and Desktop (4) */}
              <div className="pt-6 border-t border-brand-green-800/80 flex flex-col items-center lg:items-start gap-2.5 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                  Our Guiding Pillars:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
                  {siteConfig.coreValues.map((val) => (
                    <span
                      key={val}
                      className="px-3.5 py-1.5 rounded-lg bg-brand-green-900/90 border border-brand-green-700/80 text-xs font-medium text-white text-center shadow-sm"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Real Office / Leadership Portrait */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none rounded-2xl overflow-hidden border-2 border-brand-gold-500/60 shadow-2xl bg-brand-green-900">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/members/ch-faisal-moon-sarohi.jpg"
                    alt="Central Vice President Chaudhry Faisal Moon Sarohi seated at executive desk with Pakistan flag"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-4 sm:p-5 bg-brand-green-950 text-white space-y-2 border-t border-brand-green-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-gold-400 uppercase tracking-wider">
                      Executive Leadership
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-600 px-2 py-0.5 rounded-full font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                      Active Office
                    </span>
                  </div>
                  <p className="font-bold text-base sm:text-lg leading-snug">
                    Chaudhry Faisal Moon Sarohi
                  </p>
                  <p className="text-xs text-slate-300">
                    Central Vice President • QEC Officer Air University Islamabad, Bahu Campus Shorkot
                  </p>
                  <p className="text-xs text-brand-green-200 italic pt-1 border-t border-brand-green-800/80">
                    &quot;Our goal is not positions but unity; bringing the community together with love and consensus.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact Counters (Demo Data) - Symmetrically Positioned */}
      <section className="relative -mt-6 sm:-mt-10 md:-mt-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-20 w-full" aria-label="Key Impact Statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          <StatCounter
            value={450}
            suffix="+"
            label="Deserving Students"
            sublabel="Monthly educational stipends"
            isDemo={true}
          />
          <StatCounter
            value={1850}
            suffix="+"
            label="Patients Treated"
            sublabel="Free medical camps & medicines"
            isDemo={true}
          />
          <StatCounter
            value={3200}
            suffix="+"
            label="Families Assisted"
            sublabel="Emergency aid & food baskets"
            isDemo={true}
          />
          <StatCounter
            value={340}
            suffix="+"
            label="Active Volunteers"
            sublabel="Across Shorkot, Islamabad & Karachi"
            isDemo={true}
          />
        </div>
      </section>

      {/* 3. Short About Overview */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="about-overview-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/gallery/press-coverage-training-session.jpg"
                  alt="Newspaper clippings reporting leadership reform session in Shorkot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-green-900 text-white p-4 rounded-xl shadow-lg border border-brand-gold-500/50 max-w-xs hidden sm:block">
                <p className="text-xs font-semibold text-brand-gold-400 uppercase tracking-wider">
                  Verified Public Record
                </p>
                <p className="text-xs text-slate-200 mt-1">
                  Reported across Daily Ausaf, Dunya, Muashira & Sarmaya.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
                <span>Who We Are</span>
              </div>
              <h2 id="about-overview-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Building a Society of Compassion, Education & Sincere Brotherhood
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Taga Ittehad Pakistan is a grassroots welfare body committed to humanitarian service. We work for education, healthcare, disaster relief, and social welfare—uniting our people under the sacred doctrine of selfless devotion.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our organization stands free of political ambition or personal rivalries. Whether managing the Tehreek Ittehad student stipend scheme (PKR 6,000–12,000) or deploying free medical clinics with Alkhidmat Foundation and WHO, every rupee and effort is directed to the most deserving.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Zero Personal Interest</h3>
                    <p className="text-xs text-slate-600">All office-bearers serve on an honorary, voluntary basis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Grassroot Verification</h3>
                    <p className="text-xs text-slate-600">Door-to-door welfare vetting to ensure aid reaches the needy.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green-700 hover:text-brand-green-900 focus:outline-none focus:underline"
                >
                  <span>Read our full charter & origin story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Four Core Focus Areas */}
      <section className="py-16 sm:py-24 bg-brand-warm border-y border-slate-200/80" aria-labelledby="focus-areas-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Pillars of Service"
            title="Core Welfare Programmes"
            urduTitle="خدمت خلق کے بنیادی شعبہ جات"
            subtitle="From primary education scholarships to emergency healthcare and relief, we implement sustainable community interventions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPrograms.map((prog) => {
              const IconComponent =
                prog.iconName === 'GraduationCap'
                  ? GraduationCap
                  : prog.iconName === 'HeartPulse'
                  ? HeartPulse
                  : prog.iconName === 'ShieldAlert'
                  ? ShieldAlert
                  : Users;

              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-brand-green-600 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <DemoBadge label={prog.beneficiariesLabel} variant="demo" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-lg bg-brand-green-50 text-brand-green-700 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-green-800 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {prog.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => openDonate(prog.title)}
                        className="text-xs font-bold text-brand-green-700 hover:text-brand-green-900 inline-flex items-center gap-1 focus:outline-none focus:underline"
                      >
                        <Heart className="w-3.5 h-3.5 text-brand-gold-500 fill-brand-gold-500" aria-hidden="true" />
                        <span>Support Cause</span>
                      </button>
                      <Link
                        href={`/welfare#${prog.slug}`}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/welfare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green-700 hover:bg-brand-green-800 text-white font-semibold rounded-xl shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-600"
            >
              <span>Explore All 5 Welfare Wings & Projects</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Leadership Preview */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="leadership-preview-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Executive Stewardship"
            title="Leadership of Taga Ittehad Pakistan"
            urduTitle="مرکزی قیادت اور کابینہ"
            subtitle="Meet the devoted leaders spearheading our educational, health, and social welfare agenda across Pakistan."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {executiveLeaders.map((leader) => (
              <PersonCard
                key={leader.id}
                name={leader.name}
                urduName={leader.urduName}
                title={leader.title}
                department={leader.department}
                image={leader.image}
                alt={leader.alt}
                isConfirmed={leader.isConfirmed}
                contact={leader.contact}
                affiliations={leader.affiliations}
                bio={leader.bio}
              />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow transition-all focus:outline-none focus:ring-2 focus:ring-slate-700"
            >
              <span>View Full Central & Union Cabinet</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/chairman"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold-50 hover:bg-brand-gold-100 text-brand-gold-900 border border-brand-gold-300 text-sm font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold-400"
            >
              <span>Chairman&apos;s Vision & Message</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Latest News (3 items) */}
      <section className="py-16 sm:py-24 bg-brand-warm border-t border-slate-200" aria-labelledby="latest-news-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200 mb-2">
                <span>Recent Updates</span>
              </div>
              <h2 id="latest-news-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Latest News & Public Press
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green-700 hover:text-brand-green-900 focus:outline-none focus:underline"
            >
              <span>View All News Articles</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <NewsCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                date={item.date}
                category={item.category}
                image={item.image}
                imageAlt={item.imageAlt}
                excerpt={item.excerpt}
                isVerifiedFact={item.isVerifiedFact}
                pressOutlets={item.pressOutlets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Latest Notifications (3 items) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" aria-labelledby="latest-notices-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200 mb-2">
                <span>Gazettes & Circulars</span>
              </div>
              <h2 id="latest-notices-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Official Notifications
              </h2>
            </div>
            <Link
              href="/notifications"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green-700 hover:text-brand-green-900 focus:outline-none focus:underline"
            >
              <span>View All Notifications & PDFs</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-4">
            {latestNotifications.map((notif) => (
              <NotificationRow
                key={notif.id}
                id={notif.id}
                refNumber={notif.refNumber}
                title={notif.title}
                date={notif.date}
                category={notif.category}
                summary={notif.summary}
                signatory={notif.signatory}
                pdfFileName={notif.pdfFileName}
                fileSize={notif.fileSize}
                isVerified={notif.isVerified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Photo Gallery Strip */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white" aria-label="Visual Archive & Field Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400 block mb-2">
              Visual Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Field Work, Press & Community Records
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Authentic newspaper reports, medical camp directives, and educational notifications from Tehsil Shorkot.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <p className="text-xs font-bold text-white leading-tight">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-green-900 via-brand-green-800 to-brand-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold-500/20 text-brand-gold-300 text-xs font-semibold border border-brand-gold-500/40">
            <span>Unity • Love • Service • Brotherhood</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Together, We Are The Nation&apos;s Support
          </h2>
          <p className="text-base sm:text-lg text-brand-green-100 max-w-2xl mx-auto leading-relaxed">
            Whether through student scholarships, medical assistance, or connecting our diaspora in Islamabad, Karachi, and beyond—your sincere involvement creates enduring change.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openDonate('General Community Welfare Fund')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 active:bg-brand-gold-700 text-slate-950 font-bold rounded-xl shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-400 min-h-[50px]"
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              <span>Contribute to Welfare Fund (Demo)</span>
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[50px]"
            >
              <span>Contact Central Secretariat</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Donation Modal */}
      <DemoDonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        defaultProgram={selectedCause}
      />
    </div>
  );
}
