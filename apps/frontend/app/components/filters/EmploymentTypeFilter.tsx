'use client'

import { useState } from 'react';
import type { EmploymentType } from '@hubbe/shared';
import FilterDropdown from './FilterDropdown';

interface EmploymentTypeFilterProps {
  selected: EmploymentType[];
  onChange: (selected: EmploymentType[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const employmentTypes: { value: EmploymentType; label: string }[] = [
  { value: 'fulltime', label: 'Fulltime' },
  { value: 'parttime', label: 'Parttime' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
];

export default function EmploymentTypeFilter({
  selected,
  onChange,
  isOpen,
  onToggle,
}: EmploymentTypeFilterProps) {
  const [tempSelected, setTempSelected] = useState<EmploymentType[]>(selected);

  const handleToggle = (value: EmploymentType) => {
    setTempSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    onChange(tempSelected);
    onToggle();
  };

  const handleClear = () => {
    setTempSelected([]);
    onChange([]);
    onToggle();
  };

  const isActive = selected.length > 0;

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
        <span>Employment type</span>
        {isActive && (
          <span className="px-1.5 py-0.5 text-xs bg-white/20 rounded">
            {selected.length}
          </span>
        )}
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
        <div className="p-3">
          <div className="space-y-2 mb-3">
            {employmentTypes.map((type) => (
              <label
                key={type.value}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
              >
                <input
                  type="checkbox"
                  checked={tempSelected.includes(type.value)}
                  onChange={() => handleToggle(type.value)}
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-2 pt-2 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="flex-1 px-3 py-1.5 text-sm bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </FilterDropdown>
    </div>
  );
}


