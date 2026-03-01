'use client';

import { useState } from 'react';

interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mb-12">
      {/* Main Image Display */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4 bg-gray-900">
        <img
          src={photos[currentIndex]}
          alt={`${title} - Photo ${currentIndex + 1}`}
          className="w-full h-[500px] object-contain"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
          aria-label="Previous photo"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all"
          aria-label="Next photo"
        >
          <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Photo Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-2 bg-black/70 text-white text-sm font-medium rounded-lg">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
              index === currentIndex
                ? 'ring-4 ring-coastal-blue shadow-lg scale-105'
                : 'ring-2 ring-gray-200 hover:ring-gray-400 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={photo}
              alt={`${title} thumbnail ${index + 1}`}
              className="w-24 h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
