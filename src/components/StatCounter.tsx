'use client';

import React, { useEffect, useState } from 'react';
import { DemoBadge } from './DemoBadge';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  isDemo?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '+',
  prefix = '',
  label,
  sublabel,
  isDemo = true,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1400; // ms
    const stepTime = 30;
    const steps = Math.floor(duration / stepTime);
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between hover:border-brand-gold-400 transition-all w-full">
      <div className="w-full flex justify-center sm:justify-end mb-2">
        {isDemo ? (
          <DemoBadge label="Demo Stat" variant="demo" />
        ) : (
          <DemoBadge label="Verified" variant="verified" />
        )}
      </div>

      <div className="my-1 sm:my-2">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-green-800 tracking-tight font-sans block">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
      </div>

      <div className="mt-1 w-full">
        <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-2">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};
