import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Taga Ittehad Pakistan',
  description: 'Terms of Use governing Taga Ittehad Pakistan digital platforms.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Terms of Use</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Terms of Use
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: November 2026 • Taga Ittehad Pakistan
            </p>
          </div>

          <p>
            Welcome to the official web portal of Taga Ittehad Pakistan (تگہ اتحاد پاکستان). By accessing this site, you agree to comply with our non-political charter and terms of brotherhood.
          </p>

          <h2 className="text-xl font-bold text-slate-900">1. Organizational Character</h2>
          <p>
            Taga Ittehad Pakistan is a welfare and humanitarian organization. No material, official notices, or gazettes published here may be distorted for partisan political campaigning or communal hostility.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property & Seal</h2>
          <p>
            The official emblem of Taga Ittehad Pakistan (featuring the green shield, handshake, book, and healthcare caduceus) is protected. Unauthorized commercial replication or fraudulent fundraising using the emblem is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Demonstration Environment</h2>
          <p>
            This website functions as a public demo presentation. Certain statistical projections and draft notices are clearly labelled with badges for transparent community review.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Official Inquiries</h2>
          <p>
            Direct all legal inquiries to the Legal Assistant & Welfare Secretariat at Shorkot City Courts or telephone: {siteConfig.contact.displayPhone}.
          </p>
        </div>
      </div>
    </div>
  );
}
