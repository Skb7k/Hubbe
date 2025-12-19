'use client'

import FilterDropdown from './FilterDropdown';
import type { DatePostedFilter } from '../../../lib/types/filters';

interface DatePostedFilterProps {
  selected: DatePostedFilter;
  onChange: (value: DatePostedFilter) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const dateOptions: { value: DatePostedFilter; label: string }[] = [
  { value: 'all', label: 'All time' },
  { value: '30d', label: 'Last 30 days' },
  { value: '7d', label: 'Last 7 days' },
  { value: '24h', label: 'Last 24 hours' },
];

export default function DatePostedFilter({
  selected,
  onChange,
  isOpen,
  onToggle,
}: DatePostedFilterProps) {
  const handleSelect = (value: DatePostedFilter) => {
    onChange(value);
    onToggle();
  };

  const isActive = selected !== 'all';
  const selectedLabel = dateOptions.find((opt) => opt.value === selected)?.label || 'Date posted';

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
        <span>{selectedLabel}</span>
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
          {dateOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`
                w-full text-left px-3 py-2 text-sm rounded transition-colors
                ${
                  selected === option.value
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </FilterDropdown>
    </div>
  );
}


