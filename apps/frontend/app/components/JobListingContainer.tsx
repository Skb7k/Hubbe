'use client'

import { useState, useEffect } from 'react';
import type { Job } from '@hubbe/shared';
import type { JobFilters } from '../../lib/types/filters';
import { applyFilters } from '../../lib/utils/filterJobs';
import JobList from './JobList';
import JobDetail from './JobDetail';

interface JobListingContainerProps {
  jobs: Job[];
  filters: JobFilters;
}

export default function JobListingContainer({ jobs, filters }: JobListingContainerProps) {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Apply filters to jobs
  const filteredJobs = applyFilters(jobs, filters);

  // On desktop, select first job by default. On mobile, start with none selected.
  // Reset selection if current selection is not in filtered results
  useEffect(() => {
    if (filteredJobs.length === 0) {
      setSelectedJobId(null);
      return;
    }

    const isCurrentSelectionValid = selectedJobId && filteredJobs.some(job => job.id === selectedJobId);
    
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (!isCurrentSelectionValid) {
        setSelectedJobId(filteredJobs[0].id);
      }
    } else if (!isCurrentSelectionValid) {
      setSelectedJobId(null);
    }
  }, [filteredJobs, selectedJobId]);

  const selectedJob = filteredJobs.find((job) => job.id === selectedJobId) || null;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-200px)] max-h-[800px]">
      {/* Left Column - Job List */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0 border-r border-gray-200">
        <JobList
          jobs={filteredJobs}
          selectedJobId={selectedJobId}
          onJobSelect={setSelectedJobId}
        />
      </div>

      {/* Right Column - Job Detail */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 flex-shrink-0">
        <JobDetail job={selectedJob} />
      </div>

      {/* Mobile: Show detail view when job is selected (future: could be a modal or separate page) */}
      <div className="lg:hidden">
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedJobId(null)}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-sm font-medium text-gray-900">Job Details</span>
              <div className="w-6" /> {/* Spacer for centering */}
            </div>
            <JobDetail job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
}

