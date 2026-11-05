'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { areaMembers, areaDetails, AreaDetail, AreaMember } from '@/data/areas';
import { SectionHeading } from '@/components/SectionHeading';
import { PersonCard } from '@/components/PersonCard';
import { AreaDetailModal } from '@/components/AreaDetailModal';
import { Search, MapPin, Filter, Building, Phone } from 'lucide-react';

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalArea, setActiveModalArea] = useState<AreaDetail | null>(null);

  const categories = ['All', 'Shorkot City', 'Islamabad', 'Karachi', 'Others'];

  const filteredMembers = useMemo(() => {
    return areaMembers.filter((member) => {
      const matchesCategory =
        selectedCategory === 'All' || member.regionCategory === selectedCategory;

      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.businessOrProfession &&
          member.businessOrProfession.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenAreaModal = (category: string) => {
    const slugMap: Record<string, string> = {
      'Shorkot City': 'shorkot-city',
      'Islamabad': 'islamabad',
      'Karachi': 'karachi',
      'Others': 'others',
    };
    const slug = slugMap[category] || 'shorkot-city';
    setActiveModalArea(areaDetails[slug] || null);
  };

  return (
    <div className="py-12 sm:py-20 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-green-800">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">Areas & Towns</span>
        </nav>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
            <span>Regional Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Presidents & Members of Different Areas/Towns
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Searchable directory of community leaders, union council presidents, and regional coordinators across Pakistan.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search by name, role, town, or area (e.g. Shorkot, Yameen, Tahir)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-700 bg-slate-50 focus:bg-white"
                aria-label="Search area leaders and towns"
              />
            </div>

            {/* Quick Area Details Buttons */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 flex-shrink-0">
                <Building className="w-3.5 h-3.5 text-brand-green-700" aria-hidden="true" />
                Area Dossiers:
              </span>
              {['Shorkot City', 'Islamabad', 'Karachi'].map((areaName) => (
                <button
                  key={areaName}
                  type="button"
                  onClick={() => handleOpenAreaModal(areaName)}
                  className="px-3 py-1.5 text-xs font-semibold text-brand-green-800 bg-brand-green-50 hover:bg-brand-green-100 rounded-lg border border-brand-green-200 flex-shrink-0 transition-colors shadow-xs"
                >
                  {areaName} Info
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 border-t border-slate-100" role="tablist" aria-label="Filter by geographic region">
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
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-green-800 text-white shadow-sm ring-1 ring-brand-green-900'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Member Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500 font-medium">
              Showing <strong>{filteredMembers.length}</strong> representative{filteredMembers.length === 1 ? '' : 's'}
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-brand-green-800 hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredMembers.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
              <MapPin className="w-10 h-10 text-slate-400 mx-auto" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">No representatives found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No active area leader matched your criteria &quot;{searchQuery}&quot;. Please try a different town name or clear filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 bg-brand-green-700 text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <PersonCard
                  key={member.id}
                  name={member.name}
                  urduName={member.urduName}
                  title={member.role}
                  area={member.area}
                  image={member.image}
                  alt={`${member.name} – ${member.role}`}
                  isConfirmed={member.isConfirmed}
                  contact={member.contact}
                  affiliations={member.businessOrProfession ? [member.businessOrProfession] : undefined}
                  bio={member.description}
                  onSelectArea={() => handleOpenAreaModal(member.regionCategory)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Area Detail Modal */}
        <AreaDetailModal
          area={activeModalArea}
          isOpen={!!activeModalArea}
          onClose={() => setActiveModalArea(null)}
        />
      </div>
    </div>
  );
}
