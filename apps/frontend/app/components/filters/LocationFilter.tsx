'use client'

import { useState, useEffect } from 'react';
import FilterDropdown from './FilterDropdown';

interface LocationFilterProps {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function LocationFilter({
  value,
  onChange,
  isOpen,
  onToggle,
}: LocationFilterProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleApply = () => {
    onChange(inputValue);
    onToggle();
  };

  const handleClear = () => {
    setInputValue('');
    onChange('');
    onToggle();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  const isActive = value.trim().length > 0;

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
        <span>Location</span>
        {isActive && value && (
          <span className="px-1.5 py-0.5 text-xs bg-white/20 rounded truncate max-w-[100px]">
            {value}
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

      <FilterDropdown isOpen={isOpen} onClose={onToggle} className="min-w-[250px]">
        <div className="p-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter location..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent mb-3"
            autoFocus
          />
          <div className="flex gap-2">
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


