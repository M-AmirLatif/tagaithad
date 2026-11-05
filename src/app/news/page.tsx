import React from 'react';
import Link from 'next/link';
import { newsArticles } from '@/data/news';
import { NewsCard } from '@/components/NewsCard';
import { SectionHeading } from '@/components/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Media Bulletins | Taga Ittehad Pakistan',
  description: 'Verified public news, press reports, oath ceremonies, and announcements of Taga Ittehad Pakistan.',
};

export default function NewsPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">News</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Media & Bulletins</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            News, Press Coverage & Official Updates
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Stay updated with presidential oath declarations, national newspaper coverage, and educational initiatives.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              date={article.date}
              category={article.category}
              image={article.image}
              imageAlt={article.imageAlt}
              excerpt={article.excerpt}
              isVerifiedFact={article.isVerifiedFact}
              pressOutlets={article.pressOutlets}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
