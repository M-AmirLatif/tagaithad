'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, ShieldAlert, CheckCircle, CreditCard, Landmark, Smartphone } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface DemoDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const DemoDonationModal: React.FC<DemoDonationModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'Education Support & Scholarships',
}) => {
  const [selectedProgram, setSelectedProgram] = useState(defaultProgram);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<string>('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'jazzcash' | 'easypaisa'>('bank');
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultProgram) {
      setSelectedProgram(defaultProgram);
    }
  }, [defaultProgram]);

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
      setSubmitted(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const presetAmounts = ['2000', '5000', '10000', '25000', '50000'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-brand-green-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
            <div>
              <h2 id="donation-modal-title" className="text-lg font-bold">
                Support Community Welfare
              </h2>
              <p className="text-xs text-brand-green-200">
                Taga Ittehad Pakistan Welfare Fund
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-brand-green-200 hover:text-white hover:bg-brand-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close donation modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-2.5 flex items-center gap-2 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" aria-hidden="true" />
          <p className="font-medium">
            <strong>Demonstration Only:</strong> Live electronic payments are not active on this demo website. No actual credit card or funds will be debited.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                JazakAllah Khair! (Demo Intent Received)
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{donorName || 'Respected Supporter'}</strong>, for demonstrating your willingness to support <strong>{selectedProgram}</strong> with PKR {customAmount || amount}.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl text-left text-xs text-slate-600 space-y-1 border border-slate-200">
                <p className="font-semibold text-slate-800">For direct manual contributions:</p>
                <p>• Contact Central Finance: {siteConfig.contact.displayPhone}</p>
                <p>• Visit Central Office: Near Rescue Office, Patan Road, Shorkot City</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-brand-green-700 hover:bg-brand-green-800 text-white rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-600 min-h-[44px]"
              >
                Close Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Welfare Program Selection */}
              <div>
                <label htmlFor="program-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Welfare Cause
                </label>
                <select
                  id="program-select"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-white"
                >
                  <option value="Education Support & Scholarships">Education Support & Student Scholarships</option>
                  <option value="Free Healthcare & Medical Camps">Free Healthcare & Medical Camps</option>
                  <option value="Disaster Relief & Emergency Aid">Disaster Relief & Emergency Flood Aid</option>
                  <option value="Social Welfare & Ramadan Aid">Social Welfare, Clean Water & Ramadan Food Baskets</option>
                  <option value="Employment & Vocational Training">Youth Apprenticeship & Vocational Toolkits</option>
                  <option value="General Community Welfare Fund">General Community Welfare Fund</option>
                </select>
              </div>

              {/* Donation Frequency */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Frequency
                </span>
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Donation Frequency">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      frequency === 'once'
                        ? 'bg-brand-green-700 text-white border-brand-green-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                    role="radio"
                    aria-checked={frequency === 'once'}
                  >
                    One-time Donation
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      frequency === 'monthly'
                        ? 'bg-brand-green-700 text-white border-brand-green-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                    role="radio"
                    aria-checked={frequency === 'monthly'}
                  >
                    Monthly Sponsor
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Amount (PKR)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-2">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`py-2 px-1 text-xs font-bold rounded-lg border text-center transition-all ${
                        amount === preset && !customAmount
                          ? 'bg-brand-gold-500 text-slate-900 border-brand-gold-600 shadow'
                          : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {parseInt(preset, 10).toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount in PKR"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount('');
                  }}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                />
              </div>

              {/* Donor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="donor-name" className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="donor-name"
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  />
                </div>
                <div>
                  <label htmlFor="donor-phone" className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="donor-phone"
                    type="tel"
                    required
                    placeholder="0300-XXXXXXX"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  />
                </div>
              </div>

              {/* Payment Mode (Mock) */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Payment Method (Demonstration)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'bank'
                        ? 'border-brand-green-700 bg-brand-green-50 text-brand-green-900'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Landmark className="w-4 h-4 text-brand-green-700" aria-hidden="true" />
                    <span>Bank Transfer</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('jazzcash')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'jazzcash'
                        ? 'border-brand-green-700 bg-brand-green-50 text-brand-green-900'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-brand-green-700" aria-hidden="true" />
                    <span>JazzCash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('easypaisa')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'easypaisa'
                        ? 'border-brand-green-700 bg-brand-green-50 text-brand-green-900'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-brand-green-700" aria-hidden="true" />
                    <span>EasyPaisa</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-brand-green-700 hover:bg-brand-green-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-700 min-h-[48px]"
              >
                <Heart className="w-5 h-5 text-brand-gold-400 fill-brand-gold-400" aria-hidden="true" />
                <span>Simulate Donation: PKR {customAmount || amount}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
