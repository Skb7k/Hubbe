'use client'

import { useState } from 'react';
import JobSearchSection from '../components/JobSearchSection'
import JobListingContainer from '../components/JobListingContainer'
import { mockJobs } from '../../lib/data/mockJobs'
import type { JobFilters } from '../../lib/types/filters';
import { defaultFilters } from '../../lib/types/filters';

export default function BrowseJobs() {
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);

  return (
    <>
      <JobSearchSection onFiltersChange={setFilters} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <JobListingContainer jobs={mockJobs} filters={filters} />
      </main>
    </>
  )
}

