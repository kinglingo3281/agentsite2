'use client';

import { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  type: 'buyer' | 'seller';
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          What Clients Can Expect
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">🏠</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clear Guidance</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Step-by-step support through every stage of your transaction
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💬</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Responses</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fast replies to all your questions via text, call, or email
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✨</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Pressure</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your timeline, your decisions - no rush, no hard sell
            </p>
          </div>
        </div>
      </div>
    );
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-start mb-6">
          <svg className="w-12 h-12 text-blue-600 dark:text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {current.text}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{current.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{current.location}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
              {current.type === 'buyer' ? 'Home Buyer' : 'Home Seller'}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
