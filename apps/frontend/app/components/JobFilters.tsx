'use client'

import { useState } from 'react';
import type { JobFilters } from '../../lib/types/filters';
import type { EmploymentType } from '@hubbe/shared';
import EmploymentTypeFilter from './filters/EmploymentTypeFilter';
import DatePostedFilter from './filters/DatePostedFilter';
import LocationFilter from './filters/LocationFilter';
import WorkFromHomeFilter from './filters/WorkFromHomeFilter';

interface JobFiltersProps {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
}

export default function JobFilters({ filters, onFiltersChange }: JobFiltersProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const handleFilterToggle = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const updateFilter = <K extends keyof JobFilters>(key: K, value: JobFilters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const activeFilterCount =
    (filters.employmentType.length > 0 ? 1 : 0) +
    (filters.datePosted !== 'all' ? 1 : 0) +
    (filters.location.trim().length > 0 ? 1 : 0) +
    (filters.workFromHome !== null ? 1 : 0);

  const handleClearAll = () => {
    onFiltersChange({
      ...filters,
      employmentType: [],
      datePosted: 'all',
      location: '',
      workFromHome: null,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Phase 1 Filters */}
      <EmploymentTypeFilter
        selected={filters.employmentType}
        onChange={(value) => updateFilter('employmentType', value)}
        isOpen={openFilter === 'employmentType'}
        onToggle={() => handleFilterToggle('employmentType')}
      />

      <DatePostedFilter
        selected={filters.datePosted}
        onChange={(value) => updateFilter('datePosted', value)}
        isOpen={openFilter === 'datePosted'}
        onToggle={() => handleFilterToggle('datePosted')}
      />

      <LocationFilter
        value={filters.location}
        onChange={(value) => updateFilter('location', value)}
        isOpen={openFilter === 'location'}
        onToggle={() => handleFilterToggle('location')}
      />

      <WorkFromHomeFilter
        value={filters.workFromHome}
        onChange={(value) => updateFilter('workFromHome', value)}
        isOpen={openFilter === 'workFromHome'}
        onToggle={() => handleFilterToggle('workFromHome')}
      />

      {/* Placeholder filters for Phase 2 */}
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors opacity-50 cursor-not-allowed"
        disabled
      >
        <span>Salary</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors opacity-50 cursor-not-allowed"
        disabled
      >
        <span>Within 25 km</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors opacity-50 cursor-not-allowed"
        disabled
      >
        <span>Company</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Clear all button */}
      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={handleClearAll}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          Clear all ({activeFilterCount})
        </button>
      )}
    </div>
  );
}


