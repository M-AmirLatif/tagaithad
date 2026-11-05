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
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 ${className}`}
        title="Verified organizational fact"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
        {label || 'Verified Record'}
      </span>
    );
  }

  if (variant === 'draft') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 ${className}`}
        title="Draft copy pending official ratification"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" aria-hidden="true" />
        {label || 'Draft – To be approved'}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-300 ${className}`}
      title="Placeholder data for demonstration purposes"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden="true" />
      {label}
    </span>
  );
};
