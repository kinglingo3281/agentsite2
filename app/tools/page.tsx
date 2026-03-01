import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import CostEstimator from '@/components/CostEstimator';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Tools & Calculators',
  description: 'True Cost + Rental Calculator for Delaware beach properties. Estimate monthly ownership costs and rental income potential.',
  path: '/tools',
});

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Tools & Calculators"
          imageUrl="/images/areas/lewes/lewes1.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              True Cost + Rental Calculator
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed mb-8">
              Understanding the true cost of ownership is critical. This calculator uses local rental data 
              to give you realistic estimates for Delaware beach properties.
            </p>
          </div>
          
          <CostEstimator />
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              More Tools Coming Soon
            </h2>
            <p className="text-coastal-slate dark:text-gray-300 mb-8 leading-relaxed">
              We&apos;re building additional tools to help you make confident decisions about Delaware beach real estate.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-2">
                  Area Comparison Tool
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Compare Rehoboth, Dewey, Lewes, and other areas side-by-side on key metrics
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-2">
                  Rental Income Analyzer
                </h3>
                <p className="text-sm text-coastal-slate dark:text-gray-400">
                  Deep dive into seasonal rental trends and income projections by property type
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Have Questions About the Numbers?
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-400 mb-8">
              Let&apos;s discuss what these estimates mean for your specific situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:+15550000100?&body=Hi,%20I%20used%20the%20calculator%20and%20have%20questions"
                className="px-8 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
              >
                Text About Your Results
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
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
