'use client';

import { useState, useEffect } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
  storageKey: string;
  title?: string;
}

export default function Checklist({ items, storageKey, title }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setChecked(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse checklist state');
      }
    }
  }, [storageKey]);

  const toggleItem = (id: string) => {
    const newChecked = { ...checked, [id]: !checked[id] };
    setChecked(newChecked);
    localStorage.setItem(storageKey, JSON.stringify(newChecked));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-250"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {completedCount}/{items.length}
            </span>
          </div>
        </div>
      )}

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checked[item.id] || false}
                onChange={() => toggleItem(item.id)}
                className="mt-1 w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
              />
              <span
                className={`flex-1 ${
                  checked[item.id]
                    ? 'text-gray-400 dark:text-gray-500 line-through'
                    : 'text-gray-700 dark:text-gray-300'
                } group-hover:text-gray-900 dark:group-hover:text-white transition-colors`}
              >
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
