'use client';

import { useState } from 'react';

interface QrGeneratorProps {
  defaultUrl?: string;
}

export default function QrGenerator({ defaultUrl = '' }: QrGeneratorProps) {
  const [url, setUrl] = useState(defaultUrl);
  const qrApiUrl = url
    ? `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`
    : '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        QR Code Generator
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Generate a QR code for flyers, open houses, or marketing materials
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="qr-url"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            URL to encode
          </label>
          <input
            id="qr-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/search?p=rehoboth-map"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {qrApiUrl && (
          <div className="flex flex-col items-center space-y-4 pt-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <img src={qrApiUrl} alt="QR Code" className="w-64 h-64" />
            </div>
            <a
              href={qrApiUrl}
              download="qr-code.png"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
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
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
