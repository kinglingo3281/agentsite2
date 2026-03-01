'use client';

import Link from 'next/link';
import { PRESETS } from '@/lib/listingsPresets';

interface SearchPresetsProps {
  activePresetId?: string;
}

export default function SearchPresets({ activePresetId }: SearchPresetsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {PRESETS.map((preset) => {
        const isActive = activePresetId === preset.id;
        return (
          <Link
            key={preset.id}
            href={`/search?p=${preset.id}`}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={`Search ${preset.label}: ${preset.description}`}
          >
            {preset.label}
          </Link>
        );
      })}
    </div>
  );
}
