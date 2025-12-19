import SearchBar from './SearchBar'
import JobFilters from './JobFilters'

export default function JobSearchSection() {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Filter Buttons */}
        <div>
          <JobFilters />
        </div>
      </div>
    </div>
  )
}

