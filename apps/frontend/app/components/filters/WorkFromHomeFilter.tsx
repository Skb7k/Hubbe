'use client'

import FilterDropdown from './FilterDropdown';

interface WorkFromHomeFilterProps {
  value: boolean | null;
  onChange: (value: boolean | null) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function WorkFromHomeFilter({
  value,
  onChange,
  isOpen,
  onToggle,
}: WorkFromHomeFilterProps) {
  const handleSelect = (selectedValue: boolean | null) => {
    onChange(selectedValue);
    onToggle();
  };

  const isActive = value !== null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
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
        <span>Work from home</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <FilterDropdown isOpen={isOpen} onClose={onToggle}>
        <div className="p-2">
          <button
            type="button"
            onClick={() => handleSelect(null)}
            className={`
              w-full text-left px-3 py-2 text-sm rounded transition-colors
              ${
                value === null
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => handleSelect(true)}
            className={`
              w-full text-left px-3 py-2 text-sm rounded transition-colors
              ${
                value === true
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => handleSelect(false)}
            className={`
              w-full text-left px-3 py-2 text-sm rounded transition-colors
              ${
                value === false
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            No
          </button>
        </div>
      </FilterDropdown>
    </div>
  );
}


