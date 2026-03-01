import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'How I Work',
  description: 'My approach to real estate: honest guidance, no pressure, and helping you avoid bad decisions in Rehoboth Beach and Delaware beaches.',
  path: '/how-i-work',
});

export default function HowIWorkPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="How I Work"
          imageUrl="/images/areas/dewey/dewey3.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              My Philosophy
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
                My job isn&apos;t to sell you a house. It&apos;s to help you avoid a bad decision.
              </p>
              <p className="text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
                The Delaware beach market is nuanced. What works in Rehoboth doesn&apos;t work in Dewey. 
                What makes sense for a vacation rental might be terrible for year-round living. 
                I&apos;ve seen buyers rush into purchases they regret six months later.
              </p>
              <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                My approach is to understand your actual goals, show you the tradeoffs honestly, 
                and guide you toward properties that fit your life. Not just properties that close quickly.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-12 items-center mb-12">
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/images/areas/lewes/lewes3.jpg"
                    alt="Real Estate Agent"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Honest Over Easy
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                  I&apos;d rather have you make an informed decision (even if that means telling you to wait or look elsewhere) 
                  than rush into something that doesn&apos;t work for you.
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-8">
              What I&apos;ll Tell You That Others Won&apos;t
            </h2>
            <div className="space-y-4">
              {[
                'If a property is overpriced for the area, even if it means losing the deal',
                'When rental income projections are unrealistic based on actual market data',
                'If your budget puts you in a neighborhood with resale challenges',
                'When waiting 3-6 months will likely get you better options',
                'If the HOA rules will conflict with how you plan to use the property',
                'When flood insurance costs will make monthly ownership uncomfortable',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-coastal-seafoam/20 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
              My Process (Simple)
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  number: '1',
                  title: 'Use Case',
                  description: 'What are you actually trying to accomplish? Vacation home? Rental income? Retirement?',
                },
                {
                  number: '2',
                  title: 'Narrow Areas',
                  description: 'Based on your goals and budget, which 1-2 areas make the most sense?',
                },
                {
                  number: '3',
                  title: 'Evaluate Fit',
                  description: 'Look at properties that match criteria. Discuss tradeoffs honestly.',
                },
                {
                  number: '4',
                  title: 'Execute Cleanly',
                  description: 'Handle negotiations, inspections, and closing without drama.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-coastal-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-coastal-slate dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-coastal-slate dark:text-gray-400 mb-8">
              Let&apos;s start with a conversation about what you&apos;re looking for
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.primaryCtas.text.href}
                className="px-8 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
              >
                Text Me
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
