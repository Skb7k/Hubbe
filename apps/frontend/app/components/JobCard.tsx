import type { Job } from '@hubbe/shared';

interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

export default function JobCard({ job, isSelected, onClick }: JobCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left p-4 border-b border-gray-200 transition-colors
        ${isSelected ? 'bg-gray-50 border-l-4 border-l-gray-900' : 'hover:bg-gray-50'}
        focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-inset
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {/* Urgent Badge */}
          {job.urgent && (
            <span className="inline-block mb-2 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
              Urgently sought
            </span>
          )}

          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
            {job.title}
          </h3>

          {/* Company */}
          <p className="text-sm text-gray-700 mb-1">{job.company}</p>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-2">{job.location}</p>

          {/* Salary */}
          {job.salary && (
            <p className="text-sm font-medium text-gray-900 mb-2">{job.salary}</p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {job.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-0.5 text-xs text-gray-600 bg-gray-100 rounded"
              >
                {tag}
              </span>
            ))}
            {job.tags.length > 3 && (
              <span className="inline-block px-2 py-0.5 text-xs text-gray-500">
                +{job.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bookmark Icon */}
        <div className="flex-shrink-0 mt-1">
          <svg
            className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}


