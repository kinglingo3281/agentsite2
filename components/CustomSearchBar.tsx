'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRESETS } from '@/lib/listingsPresets';

interface CustomSearchBarProps {
  defaultPresetId?: string;
  placeholder?: string;
  showPresetButtons?: boolean;
}

export default function CustomSearchBar({ 
  defaultPresetId,
  placeholder = "Search by area, price, or property type...",
  showPresetButtons = true
}: CustomSearchBarProps) {
  const [selectedPreset, setSelectedPreset] = useState(defaultPresetId || '');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPreset) {
      router.push(`/search?p=${selectedPreset}`);
    } else {
      router.push('/search');
    }
  };

  const quickSearchPresets = PRESETS.slice(0, 4); // Show first 4 presets

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <select
            value={selectedPreset}
            onChange={(e) => setSelectedPreset(e.target.value)}
            className="w-full pl-12 pr-32 py-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all shadow-lg appearance-none cursor-pointer"
            aria-label="Select search category"
          >
            <option value="">{placeholder}</option>
            {PRESETS.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.label} - {preset.description}
              </option>
            ))}
          </select>
          
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-6 m-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </form>
      
      {showPresetButtons && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {quickSearchPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPreset(preset.id);
                router.push(`/search?p=${preset.id}`);
              }}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
