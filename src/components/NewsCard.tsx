import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { DemoBadge } from './DemoBadge';

interface NewsCardProps {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  isVerifiedFact: boolean;
  pressOutlets?: string[];
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  slug,
  title,
  date,
  category,
  image,
  imageAlt,
  excerpt,
  isVerifiedFact,
  pressOutlets,
  className = '',
}) => {
  return (
    <article
      className={`group bg-white rounded-xl border border-slate-200/90 hover:border-brand-green-500 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden ${className}`}
    >
      {/* Article Thumbnail */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-green-900/90 text-white text-xs font-semibold backdrop-blur-sm border border-brand-green-700">
            <Tag className="w-3 h-3 text-brand-gold-400" aria-hidden="true" />
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          {isVerifiedFact ? (
            <DemoBadge label="Verified Fact" variant="verified" />
          ) : (
            <DemoBadge label="Demo Content" variant="demo" />
          )}
        </div>
      </div>

      {/* Article Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-brand-gold-600" aria-hidden="true" />
            <time dateTime={date}>{date}</time>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-green-800 transition-colors leading-snug">
            <Link href={`/news/${slug}`} className="focus:outline-none focus:underline">
              {title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </div>

        {/* Footer / Press outlets link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          {pressOutlets && pressOutlets.length > 0 ? (
            <span className="text-[11px] text-brand-green-800 font-medium bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
              {pressOutlets[0]} + {pressOutlets.length - 1} more
            </span>
          ) : (
            <span className="text-[11px] text-slate-400">Official Bulletin</span>
          )}

          <Link
            href={`/news/${slug}`}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-green-700 hover:text-brand-green-900 focus:outline-none focus:underline"
            aria-label={`Read full story: ${title}`}
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};
