import Link from 'next/link';
import { Listing, formatPrice, formatNumber } from '@/lib/sampleListings';

interface PropertyCardProps {
  listing: Listing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  const sourceLabel = listing.source === 'brokerage' ? 'Brokerage' : 'Team';
  
  return (
    <a
      href={listing.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-250 overflow-hidden border border-gray-100 dark:border-gray-700 min-w-[300px] sm:min-w-[320px]"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={listing.image}
          alt={`${listing.address}, ${listing.city}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {listing.daysOnMarket && listing.daysOnMarket <= 7 && (
          <div className="absolute top-3 left-3 bg-coastal-seafoam text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-coastal-slate dark:text-white text-xs font-medium px-3 py-1 rounded-full">
          {listing.status === 'active' ? 'Active' : listing.status === 'pending' ? 'Pending' : 'Sold'}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-2xl font-bold text-coastal-blue dark:text-blue-400">
            {formatPrice(listing.price)}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            via {sourceLabel}
          </span>
        </div>
        
        <p className="text-coastal-slate dark:text-white font-semibold mb-1">
          {listing.address}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-coastal-slate dark:text-gray-300">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{listing.beds} bd</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <span>{listing.baths} ba</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{formatNumber(listing.sqft)} sqft</span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{listing.daysOnMarket} days on market</span>
            <span className="text-coastal-blue dark:text-blue-400 font-medium group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
