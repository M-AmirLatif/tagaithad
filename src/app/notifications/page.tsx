'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { officialNotifications } from '@/data/notifications';
import { NotificationRow } from '@/components/NotificationRow';
import { SectionHeading } from '@/components/SectionHeading';
import { Search, Filter, Calendar, FileText } from 'lucide-react';

export default function NotificationsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['All', '2026'];
  const categories = [
    'All',
    'Cabinet & Oath',
    'Headquarters',
    'Education & Welfare',
    'Felicitations',
    'Public Circular',
  ];

  const filteredNotifications = useMemo(() => {
    return officialNotifications.filter((item) => {
      const matchesYear =
        selectedYear === 'All' || item.year.toString() === selectedYear;

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.refNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesYear && matchesCategory && matchesSearch;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Official Notifications</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Official Gazette Repository</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Official Notifications & Circulars
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Official gazettes, portfolio appointments, administrative decrees, and public welfare circulars issued by the Central Secretariat.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search by reference number, title, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-slate-50 focus:bg-white"
                aria-label="Search notifications"
              />
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-green-700" aria-hidden="true" />
                Year:
              </span>
              <div className="flex gap-1">
                {years.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedYear === yr
                        ? 'bg-brand-green-800 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 border-t border-slate-100" role="tablist">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 mr-1" aria-hidden="true" />
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-green-800 text-white font-semibold shadow-sm ring-1 ring-brand-green-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications Listing */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Displaying <strong>{filteredNotifications.length}</strong> official circulars
            </span>
            {(searchQuery || selectedCategory !== 'All' || selectedYear !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedYear('All');
                }}
                className="text-brand-green-800 font-semibold hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredNotifications.length === 0 ? (
            <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center space-y-2">
              <FileText className="w-8 h-8 text-slate-400 mx-auto" aria-hidden="true" />
              <p className="font-bold text-slate-800">No official notifications match your filter criteria.</p>
              <p className="text-xs text-slate-500">Try modifying search keywords or select &quot;All&quot; categories.</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <NotificationRow
                key={notif.id}
                id={notif.id}
                refNumber={notif.refNumber}
                title={notif.title}
                date={notif.date}
                category={notif.category}
                summary={notif.summary}
                signatory={notif.signatory}
                pdfFileName={notif.pdfFileName}
                fileSize={notif.fileSize}
                isVerified={notif.isVerified}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
