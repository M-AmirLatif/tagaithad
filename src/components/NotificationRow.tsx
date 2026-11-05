'use client';

import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Calendar, ShieldAlert } from 'lucide-react';
import { DemoBadge } from './DemoBadge';

interface NotificationRowProps {
  id: string;
  refNumber: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  signatory: string;
  pdfFileName: string;
  fileSize: string;
  isVerified: boolean;
}

export const NotificationRow: React.FC<NotificationRowProps> = ({
  refNumber,
  title,
  date,
  category,
  summary,
  signatory,
  pdfFileName,
  fileSize,
  isVerified,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate generating and downloading official gazette PDF demo
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      // Create a clean text/blob download placeholder
      const content = `TAGA ITTEHAD PAKISTAN (تگہ اتحاد پاکستان)
CENTRAL ADMINISTRATIVE SECRETARIAT
Near Rescue Office, Patan Road, Shorkot City, District Jhang

OFFICIAL GAZETTE NOTIFICATION
Reference: ${refNumber}
Date: ${date}
Category: ${category}

TITLE: ${title}

SUMMARY:
${summary}

SIGNATORY:
${signatory}

[DEMO OFFICIAL SEAL: TAGA ITTEHAD PAKISTAN]
Note: This is a verified electronic copy generated for community record.`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = pdfFileName.replace('.pdf', '.txt');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 700);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-brand-green-500 shadow-sm hover:shadow transition-all space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
            {refNumber}
          </span>
          <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            {category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-brand-gold-600" aria-hidden="true" />
            <time dateTime={date}>{date}</time>
          </div>
          {isVerified ? (
            <DemoBadge label="Verified Gazette" variant="verified" />
          ) : (
            <DemoBadge label="Draft Notice" variant="draft" />
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          <span className="text-slate-400">Issued by: </span>
          <span className="font-semibold text-slate-700">{signatory}</span>
        </div>

        <div className="flex items-center gap-2">
          {downloadSuccess && (
            <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-semibold">
              <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
              Downloaded Electronic Copy
            </span>
          )}

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-brand-green-900 bg-brand-green-50 hover:bg-brand-green-100 border border-brand-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-600 min-h-[36px]"
            aria-label={`Download official gazette PDF: ${title}`}
          >
            <Download className="w-3.5 h-3.5 text-brand-green-700" aria-hidden="true" />
            <span>{downloading ? 'Preparing...' : `Download Gazette (${fileSize})`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
