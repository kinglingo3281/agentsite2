import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import Section from '@/components/Section';
import CostEstimator from '@/components/CostEstimator';
import Testimonials from '@/components/Testimonials';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Buying Delaware Beach Real Estate',
  description: 'Expert guidance and tools for buying in Rehoboth Beach, Dewey Beach, and Delaware beaches. True cost calculator and local market insights.',
  path: '/buy',
});

export default function BuyPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Buying Here"
          imageUrl="/images/areas/bethany/beth1.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              What You Need to Know
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  Seasonal Market
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Inventory peaks in spring. Best deals often come in fall/winter when competition is lower.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  True Costs Matter
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  HOA fees, taxes, and maintenance add up fast. Factor in rental income if you plan to offset costs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-coastal-blue dark:text-white mb-2">
                  Location Drives Value
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Walking distance to beach and boardwalk commands premium prices and better rental demand.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              True Cost + Rental Calculator
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed mb-8">
              Understanding the true cost of ownership is critical. This calculator uses local rental data 
              to give you realistic estimates for Delaware beach properties.
            </p>
          
          <CostEstimator />
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-white to-coastal-sand/20 md:from-coastal-sand/50 md:via-coastal-sand/60 md:to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4 text-center">
              Not Sure Which Area Fits Your Budget?
            </h2>
            <p className="text-coastal-slate dark:text-gray-300 mb-8 leading-relaxed text-center">
              Take our 5-question quiz to find which Delaware beach communities align with your goals and budget.
            </p>
            <Link
              href="/quiz"
              className="inline-block px-8 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
            >
              Take the Quiz
            </Link>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-6 text-center">
              Additional Buyer Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/areas"
                className="bg-white/50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-2">
                  Area Guides
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Detailed breakdowns of Rehoboth, Dewey, Lewes, Milton, and Bethany Beach
                </p>
              </Link>
              <Link
                href="/how-i-work"
                className="bg-white/50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-2">
                  How I Work
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  My approach: honest guidance, no pressure, local expertise
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-white to-coastal-sand/20 md:from-coastal-sand/50 md:via-coastal-sand/60 md:to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <FadeIn>
            <Testimonials />
          </FadeIn>
        </div>

        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Have Questions About Your Numbers?
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-400 mb-8">
              Let&apos;s discuss what these estimates mean for your specific situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.primaryCtas.text.href}
                className="px-8 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
              >
                Ask a Local Question
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-coastal-blue dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
