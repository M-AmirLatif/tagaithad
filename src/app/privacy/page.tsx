import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Taga Ittehad Pakistan',
  description: 'Privacy Policy for Taga Ittehad Pakistan website and public services.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: November 2026 • Taga Ittehad Pakistan
            </p>
          </div>

          <p>
            Taga Ittehad Pakistan respects the privacy and confidentiality of our members, donors, and beneficiaries. This policy outlines how information is handled across our public portals.
          </p>

          <h2 className="text-xl font-bold text-slate-900">1. Information Collection</h2>
          <p>
            When submitting inquiries, scholarship verification forms, or contacting our helpline, we may collect your name, phone number, address, and academic documentation solely for verifying welfare eligibility.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Use of Information</h2>
          <p>
            Any personal details gathered are used strictly for delivering humanitarian assistance, processing student stipends, and coordinating disaster relief. We never sell, lease, or share personal data with political or commercial entities.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Demonstration Disclaimer</h2>
          <p>
            This website is currently an evaluation demo. Simulated donation entries and mock forms do not process monetary transactions or store financial credentials.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Contact Us</h2>
          <p>
            For questions regarding data protection, contact our Secretariat at: {siteConfig.centralOffice.address} or call {siteConfig.contact.displayPhone}.
          </p>
        </div>
      </div>
    </div>
  );
}
