'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/testimonials';

const ITEMS_PER_PAGE = 6;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestimonials = TESTIMONIALS.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-3">
          What My Clients Say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm text-coastal-slate dark:text-gray-400">Verified reviews from</span>
          <svg className="h-5" viewBox="0 0 97 24" fill="#006AFF">
            <path d="M13.5 0L0 7.5v9.8c0 6.4 4.5 12.4 13.5 14.2 9-1.8 13.5-7.8 13.5-14.2V7.5L13.5 0zm0 21.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5z"/>
            <text x="35" y="17" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#006AFF">Zillow</text>
          </svg>
        </div>
        <a 
          href="https://www.zillow.com/profile/youragent" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-coastal-blue dark:text-blue-400 hover:underline"
        >
          View all reviews on Zillow
          <svg className="w-3 h-3 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-4 right-4">
                <svg className="h-5 opacity-50" viewBox="0 0 24 24" fill="#006AFF">
                  <path d="M12 0L0 6v8.2c0 5.4 3.8 10.4 12 11.8 7.5-1.5 12-6.5 12-11.8V6L12 0z"/>
                </svg>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-coastal-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-medium">Zillow</span>
              </div>

              <p className="text-coastal-slate dark:text-gray-300 text-sm leading-relaxed mb-4">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <p className="font-semibold text-coastal-blue dark:text-white text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.location} • {testimonial.propertyType}
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="#00B67A" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Verified Zillow Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`p-2 rounded-full transition-colors ${
                currentPage === 0
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-coastal-blue text-white hover:bg-coastal-slate'
              }`}
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-sm text-coastal-slate dark:text-gray-400">
              {currentPage + 1} / {totalPages}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full transition-colors ${
                currentPage === totalPages - 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-coastal-blue text-white hover:bg-coastal-slate'
              }`}
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
