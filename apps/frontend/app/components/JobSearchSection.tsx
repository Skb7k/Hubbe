'use client'

import { useState } from 'react';
import SearchBar from './SearchBar'
import JobFilters from './JobFilters'
import type { JobFilters as JobFiltersType } from '../../lib/types/filters';
import { defaultFilters } from '../../lib/types/filters';

interface JobSearchSectionProps {
  onFiltersChange: (filters: JobFiltersType) => void;
}

export default function JobSearchSection({ onFiltersChange }: JobSearchSectionProps) {
  const [filters, setFilters] = useState<JobFiltersType>(defaultFilters);

  const handleFiltersChange = (newFilters: JobFiltersType) => {
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Filter Buttons */}
        <div>
          <JobFilters filters={filters} onFiltersChange={handleFiltersChange} />
        </div>
      </div>
    </div>
  )
}


