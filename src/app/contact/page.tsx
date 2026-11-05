'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { DemoBadge } from '@/components/DemoBadge';
import { MapPin, Phone, Mail, ExternalLink, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Contact</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Central Secretariat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Headquarters
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Reach out to our central secretariat in Shorkot City for community inquiries, scholarship applications, or welfare partnerships.
          </p>
        </div>

        {/* Main Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Central Office Details
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-green-50 text-brand-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Physical Address:</span>
                    <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                      {siteConfig.centralOffice.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-green-50 text-brand-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone & WhatsApp Helpline:</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs sm:text-sm text-brand-green-800 font-semibold hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:underline mt-1 font-medium"
                    >
                      <span>Direct WhatsApp Chat</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-green-50 text-brand-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Correspondence:</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs sm:text-sm text-brand-green-800 hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-green-50 text-brand-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Visiting Hours:</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Friday: 9:00 AM – 5:00 PM<br />
                      Closed on Sundays
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Official Channels:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-800 transition-colors border border-slate-200"
                  >
                    <span>Facebook: /tehreekeithad12</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-800 transition-colors border border-slate-200"
                  >
                    <span>TikTok: @tagaitehadpak</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (UI Only) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Send a Public Message
                </h2>
                <DemoBadge label="Form UI Only" variant="demo" />
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message Sent (Demo Mode)
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{name}</strong>! Your inquiry regarding &quot;{subject}&quot; has been recorded in our demo portal.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2 bg-brand-green-700 text-white text-xs font-semibold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Muhammad Imran Taga"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="0300-XXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject Matter
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-white"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="Student Scholarship">Student Scholarship Scheme Inquiry</option>
                      <option value="Healthcare Camp">Free Healthcare Camp Request</option>
                      <option value="Regional Cabinet">Union Cabinet & Membership</option>
                      <option value="Philanthropic Donation">Welfare Donation Protocol</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Petition *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Write your message, request, or inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-slate-50 focus:bg-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-brand-green-700 hover:bg-brand-green-800 text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Message (Demo)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Map Section: Shorkot City */}
        <section aria-labelledby="map-section-title" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h2 id="map-section-title" className="text-xl font-bold text-slate-900">
                Central Office Geographic Location
              </h2>
              <p className="text-xs text-slate-500">
                Patan Road, Near Rescue 1122 Office, Shorkot City, District Jhang (35050)
              </p>
            </div>
            <a
              href="https://www.openstreetmap.org/search?query=Shorkot%20City"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green-800 hover:underline"
            >
              <span>Open on OpenStreetMap</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="relative w-full aspect-[21/9] min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            {/* OpenStreetMap iframe embed for Shorkot City coordinates: ~30.8294° N, 72.0792° E */}
            <iframe
              title="Shorkot City Central Office OpenStreetMap"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.0400%2C30.8000%2C72.1200%2C30.8600&amp;layer=mapnik&amp;marker=30.8294%2C72.0792"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
