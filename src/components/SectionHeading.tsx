import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  urduTitle?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  urduTitle,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-50 text-brand-green-800 border border-brand-green-200 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600" aria-hidden="true" />
          {badge}
        </div>
      )}
      <div className="flex flex-col gap-1 items-center">
        {urduTitle && (
          <span className="text-sm font-medium text-brand-green-700 tracking-wide font-serif opacity-90" dir="rtl">
            {urduTitle}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div
        className={`w-16 h-1 bg-brand-gold-500 rounded-full mt-3 mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
