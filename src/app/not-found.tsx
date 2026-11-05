import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-brand-warm flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <span className="text-5xl sm:text-6xl font-extrabold text-brand-green-800 font-serif">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or official record you requested could not be located on the Taga Ittehad Pakistan portal.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-green-700 hover:bg-brand-green-800 text-white text-xs sm:text-sm font-semibold rounded-xl shadow transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
          >
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
