import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Market Intel',
  description: 'Local insights, market trends, and area updates for Delaware beach real estate',
  path: '/market-intel',
});

export default function MarketIntelPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Market Intel"
          imageUrl="/images/areas/bethany/beth2.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-coastal-sand dark:bg-gray-800 rounded-2xl p-12 border border-gray-200 dark:border-gray-700">
              <svg 
                className="w-16 h-16 mx-auto mb-6 text-coastal-seafoam"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                Content Coming Soon
              </h2>
              <p className="text-lg text-coastal-slate dark:text-gray-300 mb-6 leading-relaxed">
                This section will feature market updates, area comparisons, buying guides, and local insights for Rehoboth Beach and Delaware beaches.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-left max-w-2xl mx-auto">
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-3">
                  Planned Content:
                </h3>
                <ul className="space-y-2 text-coastal-slate dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly market snapshots with median prices and days-on-market by area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal buying guides (when to buy, what to expect by quarter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Area deep dives (parking realities, HOA quirks, flood zones explained)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rental income reality checks with actual local booking data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Buyer mistake breakdowns (what people regret, what they miss)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-6 text-center">
              In the Meantime
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/areas"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  Browse Areas
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Detailed guides for each beach community
                </p>
              </Link>

              <Link
                href="/quiz"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  Take the Quiz
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Find your ideal area in 5 questions
                </p>
              </Link>

              <Link
                href="/buy"
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  Use Calculator
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Estimate true ownership costs
                </p>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
