'use client';

import { useRef } from 'react';

interface Walkthrough {
  id: string;
  videoUrl?: string;
  imageUrl: string;
  address: string;
  price: string;
  whyItMatters: string;
  tags: string[];
  detailUrl: string;
}

interface WalkthroughCarouselProps {
  walkthroughs: Walkthrough[];
}

export default function WalkthroughCarousel({ walkthroughs }: WalkthroughCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  if (walkthroughs.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-coastal-blue dark:text-white">
          Featured Listing
        </h2>
      </div>
      
      <div className="flex justify-center">
        <div className="max-w-md w-full">
        {walkthroughs.map((item) => (
          <a
            key={item.id}
            href={item.detailUrl}
            className="group block w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
              {item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            
            <div className="p-4">
              <p className="text-coastal-slate dark:text-white font-semibold mb-2">
                {item.address}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {item.whyItMatters}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium bg-coastal-sand/50 dark:bg-gray-700 text-coastal-slate dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="text-coastal-blue dark:text-blue-400 font-semibold text-sm">
                  {item.price}
                </span>
                <span className="text-coastal-blue dark:text-blue-400 font-medium text-sm group-hover:underline flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
