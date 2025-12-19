'use client'

interface FilterButtonProps {
  label: string
  isActive?: boolean
}

function FilterButton({ label, isActive = false }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`
        flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors
        ${
          isActive
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
        }
        focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
      `}
    >
      <span>{label}</span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
}

export default function JobFilters() {
  const filters = [
    // First row
    { label: 'Salary', isActive: false },
    { label: 'Work from home', isActive: false },
    { label: 'Within 25 km', isActive: true },
    { label: 'Company', isActive: false },
    { label: 'Employment type', isActive: false },
    { label: 'Vacancy language', isActive: false },
    { label: 'Posted by', isActive: false },
    { label: 'Location', isActive: false },
    { label: 'Education level', isActive: false },
    // Second row
    { label: 'Profession', isActive: false },
    { label: 'Date posted', isActive: false },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter, index) => (
        <FilterButton key={index} label={filter.label} isActive={filter.isActive} />
      ))}
    </div>
  )
}

