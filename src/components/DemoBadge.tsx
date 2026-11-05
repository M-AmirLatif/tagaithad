import React from 'react';

interface DemoBadgeProps {
  label?: string;
  variant?: 'demo' | 'verified' | 'draft';
  className?: string;
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({
  label = 'Demo Content',
  variant = 'demo',
  className = '',
}) => {
  if (variant === 'verified') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 bg-emerald-100 text-emerald-800 border border-emerald-300 ${className}`}
        title="Verified organizational fact"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" aria-hidden="true" />
        <span>{label || 'Verified Record'}</span>
      </span>
    );
  }

  if (variant === 'draft') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 bg-amber-100 text-amber-900 border border-amber-300 shadow-xs ${className}`}
        title="Draft copy pending official ratification"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" aria-hidden="true" />
        <span>{label || 'Draft – To be approved'}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap flex-shrink-0 bg-slate-100 text-slate-700 border border-slate-300 ${className}`}
      title="Placeholder data for demonstration purposes"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
};
