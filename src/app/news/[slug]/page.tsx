import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { newsArticles, NewsItem } from '@/data/news';
import { DemoBadge } from '@/components/DemoBadge';
import { Calendar, Tag, ArrowLeft, Share2, Building2, Newspaper } from 'lucide-react';
import type { Metadata } from 'next';

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: NewsDetailPageProps): Metadata {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'News Not Found' };

  return {
    title: `${article.title} | Taga Ittehad Pakistan`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/news" className="hover:text-brand-green-800">News</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-900 focus:outline-none focus:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to All News</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
              <Tag className="w-3 h-3 text-brand-green-700" aria-hidden="true" />
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-brand-gold-600" aria-hidden="true" />
              <time dateTime={article.date}>{article.date}</time>
            </div>
            {article.isVerifiedFact ? (
              <DemoBadge label="Verified Record" variant="verified" />
            ) : (
              <DemoBadge label="Demo Content" variant="demo" />
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium italic border-l-4 border-brand-gold-500 pl-4 py-1">
            {article.excerpt}
          </p>
        </header>

        {/* Article Featured Image */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover"
            priority
          />
        </div>

        {/* Press Outlets Citation if present */}
        {article.pressOutlets && article.pressOutlets.length > 0 && (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <Newspaper className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-bold block">Verified National Press Publication:</span>
              <p className="text-amber-800">
                This event was prominently covered across: {article.pressOutlets.join(', ')}.
              </p>
            </div>
          </div>
        )}

        {/* Main Article Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          {article.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related News Section */}
        {relatedArticles.length > 0 && (
          <div className="pt-10 border-t border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Related Announcements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-green-500 transition-all shadow-sm space-y-2 block"
                >
                  <span className="text-xs text-brand-gold-600 font-semibold">{rel.category}</span>
                  <h3 className="font-bold text-sm text-slate-900 line-clamp-2">{rel.title}</h3>
                  <span className="text-xs text-slate-400">{rel.date}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
