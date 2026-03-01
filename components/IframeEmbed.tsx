'use client';

import { useSearchParams } from 'next/navigation';

interface IframeEmbedProps {
  url: string;
  title: string;
  cropTopDesktop?: number;
  cropTopMobile?: number;
  cropLeft?: number;
  showOpenButton?: boolean;
}

export default function IframeEmbed({
  url,
  title,
  cropTopDesktop = 180,
  cropTopMobile = 280,
  cropLeft = 0,
  showOpenButton = true,
}: IframeEmbedProps) {
  const searchParams = useSearchParams();
  const currentPreset = searchParams.get('p') || '';
  const isMapView = currentPreset === 'rehoboth-map';

  return (
    <div className="space-y-4">
      {showOpenButton && (
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <a
              href="/listings"
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                !isMapView
                  ? 'bg-coastal-blue text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-coastal-slate dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              List View
            </a>
            <a
              href="/listings?p=rehoboth-map"
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                isMapView
                  ? 'bg-coastal-blue text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-coastal-slate dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Map View
            </a>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
            aria-label="Open listings in new tab"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open Fullscreen
          </a>
        </div>
      )}

      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-900">
        <div
          className="relative w-full"
          style={{
            height: `calc(80vh + ${cropTopDesktop}px)`,
          }}
        >
          <iframe
            src={url}
            title={title}
            className="absolute inset-0 w-full border-0 md:block hidden"
            style={{
              height: `calc(100% + ${cropTopDesktop}px)`,
              top: `-${cropTopDesktop}px`,
              left: `-${cropLeft}px`,
              width: cropLeft > 0 ? `calc(100% + ${cropLeft}px)` : '100%',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
          <iframe
            src={url}
            title={title}
            className="absolute inset-0 w-full border-0 md:hidden block"
            style={{
              height: `calc(100% + ${cropTopMobile}px)`,
              top: `-${cropTopMobile}px`,
              left: `-${cropLeft}px`,
              width: cropLeft > 0 ? `calc(100% + ${cropLeft}px)` : '100%',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Listings provided via {new URL(url).hostname}
      </p>
    </div>
  );
}
