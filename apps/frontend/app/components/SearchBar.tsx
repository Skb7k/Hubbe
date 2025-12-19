'use client'

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row w-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Job/Keyword Input */}
      <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-300">
        <svg
          className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0"
        />
      </div>

      {/* Location Input */}
      <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-300">
        <svg
          className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Location"
          className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none focus:ring-0"
        />
      </div>

      {/* Search Button */}
      <button
        type="button"
        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Search Jobs
      </button>
    </div>
  )
}

