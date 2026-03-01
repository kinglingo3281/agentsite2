'use client';

import { useState } from 'react';

interface IframeLoaderProps {
  url: string;
  title: string;
  className?: string;
}

export default function IframeLoader({ url, title, className = '' }: IframeLoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 bg-coastal-sand dark:bg-gray-800 rounded-2xl flex items-center justify-center z-10">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-coastal-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-coastal-slate dark:text-gray-400 font-medium">Loading listings...</p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        className={`w-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
