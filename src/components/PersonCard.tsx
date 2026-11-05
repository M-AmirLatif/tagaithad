import React from 'react';
import Image from 'next/image';
import { DemoBadge } from './DemoBadge';
import { Phone, Building, CheckCircle2 } from 'lucide-react';

interface PersonCardProps {
  name: string;
  urduName?: string;
  title: string;
  department?: string;
  area?: string;
  image: string;
  alt: string;
  isConfirmed: boolean;
  contact?: string;
  affiliations?: string[];
  bio?: string;
  onSelectArea?: () => void;
  className?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  urduName,
  title,
  department,
  area,
  image,
  alt,
  isConfirmed,
  contact,
  affiliations,
  bio,
  onSelectArea,
  className = '',
}) => {
  return (
    <article
      className={`group bg-white rounded-xl border border-slate-200/90 hover:border-brand-green-500 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden ${className}`}
    >
      {/* Card Image Banner */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Verification Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          {isConfirmed ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 border border-emerald-500/50 backdrop-blur-sm shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              Verified
            </span>
          ) : (
            <DemoBadge label="To Be Confirmed" variant="demo" />
          )}
        </div>

        {/* Area tag on image */}
        {area && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-block px-2.5 py-1 rounded bg-brand-green-900/90 text-white text-xs font-medium border border-brand-green-700/60 shadow">
              {area}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {urduName && (
            <span className="text-xs font-serif text-brand-green-700 font-semibold block" dir="rtl">
              {urduName}
            </span>
          )}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-green-800 transition-colors leading-snug">
            {name}
          </h3>
          <p className="text-sm font-semibold text-brand-gold-600 mt-0.5">
            {title}
          </p>

          {department && (
            <p className="text-xs text-slate-500 mt-1 font-medium">
              {department}
            </p>
          )}

          {bio && (
            <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
              {bio}
            </p>
          )}
        </div>

        {/* Affiliations / Contact Footer */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          {affiliations && affiliations.length > 0 && (
            <div className="flex items-start gap-1.5 text-xs text-slate-500">
              <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{affiliations.join(' • ')}</span>
            </div>
          )}

          {contact && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-green-800">
              <Phone className="w-3.5 h-3.5 text-brand-green-600" aria-hidden="true" />
              <a href={`tel:${contact}`} className="hover:underline focus:outline-none focus:ring-1 focus:ring-brand-green-600 rounded">
                {contact}
              </a>
            </div>
          )}

          {onSelectArea && (
            <button
              type="button"
              onClick={onSelectArea}
              className="w-full mt-2 text-xs font-semibold text-brand-green-700 hover:text-brand-green-900 hover:bg-brand-green-50 py-1.5 rounded transition-colors text-center border border-brand-green-200"
            >
              View Area Profile & Initiatives →
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
