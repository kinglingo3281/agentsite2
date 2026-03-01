'use client';

import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg pb-safe">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={siteConfig.primaryCtas.text.href}
          className="flex flex-col items-center justify-center py-3 px-2 bg-coastal-blue text-white rounded-xl hover:bg-coastal-slate transition-colors"
          aria-label="Text Agent"
        >
          <svg
            className="w-5 h-5 mb-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-xs font-medium">Text</span>
        </a>

        <a
          href={siteConfig.primaryCtas.call.href}
          className="flex flex-col items-center justify-center py-3 px-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Call Agent"
        >
          <svg
            className="w-5 h-5 mb-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs font-medium">Call</span>
        </a>

        <Link
          href="/search"
          className="flex flex-col items-center justify-center py-3 px-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Search homes"
        >
          <svg
            className="w-5 h-5 mb-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs font-medium">Search</span>
        </Link>
      </div>
    </div>
  );
}
