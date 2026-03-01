import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Other Sussex County Delaware Beach Towns & Communities',
  description: 'Explore Ocean View, Fenwick Island, South Bethany, Millsboro, Selbyville, Georgetown and other Sussex County Delaware communities. Find your perfect Delaware location.',
  path: '/areas/other-sussex-towns',
});

export default function OtherSussexTownsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-900">
          <div className="relative h-[500px] sm:h-[550px]">
            <img
              src="/images/Sussex_County_Coast.webp"
              alt="Sussex County Delaware communities"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="relative text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl">
                  More Sussex County Towns
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mt-4 drop-shadow-lg max-w-3xl">
                  Ocean View • Fenwick Island • South Bethany • Millsboro • Selbyville • Georgetown
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/areas"
              className="inline-flex items-center text-sm text-coastal-blue dark:text-blue-400 hover:underline mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Areas
            </Link>
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Beyond the Main Beach Towns
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
              Sussex County offers diverse communities beyond Rehoboth, Dewey, Lewes, Milton, and Bethany. From coastal quiet resorts to inland value plays, these towns provide unique opportunities for beach-adjacent living, year-round communities, and investment properties.
            </p>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed">
              Whether you&apos;re seeking a peaceful beach escape, affordable inland living with beach access, or a canal-front lifestyle, Sussex County&apos;s other communities deliver distinct characteristics and price points worth exploring.
            </p>
          </div>
        </div>

        {/* Market Reality Overview */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
              Market Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                  Price Range
                </p>
                <p className="text-2xl font-bold text-coastal-blue dark:text-blue-400">
                  $340K - $1.37M
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Georgetown to South Bethany
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                  Typical Buyers
                </p>
                <p className="text-lg font-semibold text-coastal-blue dark:text-white">
                  Varied by Town
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Primary residents to investors
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                  Beach Proximity
                </p>
                <p className="text-lg font-semibold text-coastal-blue dark:text-white">
                  Coastal to 20 min
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Direct beach to inland access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Town Highlights Grid */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
              Community Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Ocean View */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  Ocean View
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Historic inland town, 1 mile from Bethany Beach
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$540K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Quiet Resorts</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fresh Pond State Park, kayaking, trails
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Coastal Towns Museum, historic village
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Golf courses, Bethany Beach proximity
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Small-town heritage with coastal convenience
                  </li>
                </ul>
              </div>

              {/* Fenwick Island */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  Fenwick Island
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Southern Delaware coast, quieter beach alternative
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$2.35M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Tranquil Beach</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fenwick Island State Park, lighthouse
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Laid-back beach experience, slower pace
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Near Ocean City MD, fewer crowds
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Part of Delaware&apos;s &quot;Quiet Resorts&quot; area
                  </li>
                </ul>
              </div>

              {/* South Bethany */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  South Bethany
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Canal-front community between Bethany and Fenwick
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$1.37M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Upscale Quiet</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Extensive canal system, boat access
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Wide clean beach, guarded access
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Primarily single-family homes, minimal commercial
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    &quot;Best little beach in Delaware&quot;
                  </li>
                </ul>
              </div>

              {/* Millsboro */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  Millsboro
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Fastest-growing inland town, 20 min to beaches
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$440K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Growth & Value</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    New construction boom, master-planned communities
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    PC Magazine top 50 city for remote work
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Historic Indian River town, Nanticoke heritage
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    10-14% year-over-year population growth
                  </li>
                </ul>
              </div>

              {/* Selbyville */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  Selbyville
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Residential community, 5 miles to DE and MD beaches
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$550K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Suburban Beach Access</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Proximity to both Delaware and Ocean City beaches
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    58% homeownership rate, residential feel
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suburban living with beach proximity
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Best of both Delaware and Maryland beaches
                  </li>
                </ul>
              </div>

              {/* Georgetown */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-coastal-blue dark:text-white mb-3">
                  Georgetown
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                  Sussex County seat, inland town center
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Median Price</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">~$375K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Vibe</span>
                    <span className="font-semibold text-coastal-blue dark:text-white">Small Town Hub</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-coastal-slate dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Most affordable option, under $400K median
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    County government hub, central location
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Historic downtown, true small-town Delaware
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Strong year-round community, local services
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* What to Know Section */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              What to Know About These Communities
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>Price variation is significant:</strong> Georgetown at $340K to South Bethany at $1.37M. Know your budget and what you&apos;re getting for it.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>Beach proximity varies:</strong> Fenwick Island and South Bethany are direct beach access. Ocean View is 1 mile. Inland towns (Millsboro, Georgetown, Selbyville) are 15-20 minute drives.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>Growth patterns differ:</strong> Millsboro is experiencing rapid development with new construction. Coastal towns are established with limited inventory.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>Rental potential varies:</strong> Coastal areas (Fenwick, South Bethany) have rental demand. Inland towns are better for primary residence or long-term rentals, not vacation rental investment.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span><strong>Seasonal character:</strong> Ocean View, Fenwick Island, and South Bethany have distinct summer/off-season patterns. Inland towns (Georgetown, Millsboro) are year-round communities.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  Which of these towns is best for full-time living?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Millsboro and Georgetown are the most year-round friendly with services, schools, and consistent community. Ocean View offers year-round living with closer beach access. Fenwick Island and South Bethany are quieter off-season with limited services.
                </p>
              </details>
              
              <details className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  Are these towns good for rental income?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Fenwick Island and South Bethany have vacation rental potential due to beach proximity. Ocean View has some rental demand. Inland towns (Millsboro, Georgetown, Selbyville) work better for long-term rentals, not weekly vacation rentals.
                </p>
              </details>
              
              <details className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  How do these compare to Rehoboth or Dewey?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Generally less expensive with fewer amenities and crowds. Coastal options (Fenwick, South Bethany) offer quieter beach alternatives. Inland options (Millsboro, Georgetown) trade walkability for affordability and space. You&apos;re choosing between premium beach-town convenience and value-driven beach-adjacent living.
                </p>
              </details>
              
              <details className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  What&apos;s the fastest growing area?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Millsboro is experiencing the most rapid growth with new construction communities and 10-14% annual population increases.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Sussex County Listings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Ready to see what&apos;s available in these communities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:+15550000100?&body=Hi,%20I'd%20like%20to%20learn%20more%20about%20Sussex%20County%20communities"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Text to Discuss
              </a>
              <a
                href="https://www.yourbrokerage.com/real-estate/sussex-county-residential-listings"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Browse All Sussex County Listings
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
