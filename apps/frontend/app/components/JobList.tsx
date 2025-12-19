'use client'

import { useState } from 'react';
import type { Job } from '@hubbe/shared';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
  selectedJobId: string | null;
  onJobSelect: (jobId: string) => void;
}

export default function JobList({ jobs, selectedJobId, onJobSelect }: JobListProps) {
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance');

  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    }
    // Relevance: urgent first, then by date
    if (a.urgent && !b.urgent) return -1;
    if (!a.urgent && b.urgent) return 1;
    return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
  });

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header with count and sort */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900">
            {jobs.length.toLocaleString()} {jobs.length === 1 ? 'vacancy' : 'vacancies'}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Sort by:</span>
          <button
            type="button"
            onClick={() => setSortBy('relevance')}
            className={`px-2 py-1 rounded transition-colors ${
              sortBy === 'relevance'
                ? 'text-gray-900 font-medium underline'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            relevance
          </button>
          <span className="text-gray-400">-</span>
          <button
            type="button"
            onClick={() => setSortBy('date')}
            className={`px-2 py-1 rounded transition-colors ${
              sortBy === 'date'
                ? 'text-gray-900 font-medium underline'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            date
          </button>
        </div>
      </div>

      {/* Job Cards List */}
      <div className="flex-1 overflow-y-auto">
        {sortedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            isSelected={selectedJobId === job.id}
            onClick={() => onJobSelect(job.id)}
          />
        ))}
      </div>
    </div>
  );
}

