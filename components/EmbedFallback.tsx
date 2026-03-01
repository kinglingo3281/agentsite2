interface EmbedFallbackProps {
  url: string;
  title: string;
  description?: string;
}

export default function EmbedFallback({ url, title, description }: EmbedFallbackProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 sm:p-12 text-center border-2 border-blue-200 dark:border-blue-800">
      <div className="max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {description}
          </p>
        )}
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          aria-label={`Open ${title} in new window`}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Listings
        </a>
        
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Opens in a new window via {new URL(url).hostname}
        </p>
      </div>
    </div>
  );
}
