import type { Job } from '@hubbe/shared';

interface JobDetailProps {
  job: Job | null;
}

export default function JobDetail({ job }: JobDetailProps) {
  if (!job) {
    return (
      <div className="flex items-center justify-center h-full p-8 text-center">
        <div className="text-gray-500">
          <p className="text-lg font-medium mb-2">Select a job to view details</p>
          <p className="text-sm">Click on a job from the list to see full information</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          {job.urgent && (
            <span className="inline-block mb-3 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
              Urgently sought
            </span>
          )}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <p className="text-lg text-gray-700 mb-1">{job.company}</p>
          <p className="text-sm text-gray-600 mb-2">{job.location}</p>
          {job.salary && (
            <p className="text-base font-medium text-gray-900">{job.salary}</p>
          )}
        </div>

        {/* Apply Button */}
        <div className="mb-6">
          <button
            type="button"
            className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Apply on employer's website
            <svg
              className="inline-block w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        {job.requirements.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {job.benefits.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">What we offer</h2>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Employment Details */}
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="font-medium text-gray-700 w-32">Employment type:</span>
              <span className="text-gray-600 capitalize">{job.employmentType}</span>
            </div>
            {job.contractDuration && (
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Contract:</span>
                <span className="text-gray-600">{job.contractDuration}</span>
              </div>
            )}
            {job.salary && (
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Salary:</span>
                <span className="text-gray-600">{job.salary}</span>
              </div>
            )}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">
            Your personal data will be collected and retained for 12 months for recruitment purposes.
          </p>
          <p className="text-xs text-gray-500">
            Acquisition based on this profile is not appreciated.
          </p>
        </div>
      </div>
    </div>
  );
}


