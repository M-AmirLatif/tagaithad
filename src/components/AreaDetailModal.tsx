'use client';

import React, { useEffect } from 'react';
import { X, MapPin, Phone, Building2, CheckCircle2 } from 'lucide-react';
import { AreaDetail } from '@/data/areas';

interface AreaDetailModalProps {
  area: AreaDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AreaDetailModal: React.FC<AreaDetailModalProps> = ({
  area,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="area-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-brand-green-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-brand-gold-400" aria-hidden="true" />
            <div>
              <h2 id="area-modal-title" className="text-lg font-bold">
                {area.name}
              </h2>
              <p className="text-xs text-brand-green-200">
                {area.district}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-brand-green-200 hover:text-white hover:bg-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Regional Overview
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {area.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block">Lead Coordinator</span>
              <span className="font-bold text-slate-900 text-sm">{area.leadPerson}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Helpline / Contact</span>
              <div className="flex items-center gap-1 font-semibold text-brand-green-800 text-sm">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <a href={`tel:${area.contactNumber}`} className="hover:underline">
                  {area.contactNumber}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Office Location
            </h3>
            <div className="flex items-start gap-2 text-slate-700 bg-brand-green-50/50 p-3 rounded-lg border border-brand-green-100">
              <MapPin className="w-4 h-4 text-brand-green-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{area.officeLocation}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Key Local Initiatives & Focus Areas
            </h3>
            <ul className="space-y-2">
              {area.focusInitiatives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
