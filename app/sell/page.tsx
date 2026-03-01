import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import FadeIn from '@/components/FadeIn';
import Testimonials from '@/components/Testimonials';
import NetProceedsCalculator from '@/components/NetProceedsCalculator';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Selling Your Home in Rehoboth Beach',
  description: 'Expert guidance for selling your Rehoboth Beach, Dewey Beach, or Sussex County property. Get maximum value with strategic marketing.',
  path: '/sell',
});

const sellingSteps = [
  { id: '1', text: 'Consultation & pricing strategy' },
  { id: '2', text: 'Staging & prep tips' },
  { id: '3', text: 'Professional photos & listing' },
  { id: '4', text: 'Negotiate & close successfully' },
];

export default function SellPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Sell Your Delaware Beach Property"
          imageUrl="/images/rehoyach.jpg"
        />

        {/* Agent Photo with FOR SALE sign */}
        <div className="py-12 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Ready to List Your Home?
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
                  I bring proven marketing strategies, honest pricing guidance, and my brokerage network to get your property sold quickly and for top dollar.
                </p>
                <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                  Whether you&apos;re selling a vacation home, year-round residence, or investment property, I&apos;ll guide you through every step of the process.
                </p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                  <div className="relative h-[400px]">
                    <img
                      src="/images/areas/rehoboth/reho3.avif"
                      alt="Sell Your Home"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selling Process - compact timeline */}
        <div className="py-12 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                The Selling Process
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-4">
              {sellingSteps.slice(0, 4).map((step, idx) => (
                <FadeIn key={step.id} delay={idx * 50}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 flex flex-col min-h-[100px]">
                    <div className="w-8 h-8 bg-coastal-seafoam/20 rounded-full flex items-center justify-center mb-3 text-coastal-seafoam font-bold text-sm">
                      {step.id}
                    </div>
                    <p className="text-xs text-coastal-slate dark:text-gray-300">{step.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose - compact */}
        <div className="py-12 bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                Why Sellers Work With Me
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-coastal-seafoam/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                      Honest Pricing
                    </h3>
                    <p className="text-xs text-coastal-slate dark:text-gray-400">
                      I&apos;ll tell you real market value, not inflated numbers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-coastal-seafoam/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                      Strong Marketing
                    </h3>
                    <p className="text-xs text-coastal-slate dark:text-gray-400">
                      Professional photos, full market exposure, and our buyer network
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-coastal-seafoam/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                      Results-Focused
                    </h3>
                    <p className="text-xs text-coastal-slate dark:text-gray-400">
                      Strategic pricing and active follow-up to get your property sold
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <FadeIn>
            <Testimonials />
          </FadeIn>
        </div>

        {/* What Is My Home Worth? */}
        <div className="py-16 bg-gradient-to-b from-white to-coastal-sand/20 md:from-coastal-sand/50 md:via-coastal-sand/60 md:to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-8 mx-auto max-w-2xl">
                <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4 text-center mx-auto">
                  What Is My Home Worth?
                </h2>
                <p className="text-coastal-slate dark:text-gray-400 mb-2 leading-relaxed text-center mx-auto">
                  Online estimates are often wrong at the beach. I&apos;ll send a personalized value range within 24 hours.
                </p>
                <p className="text-sm text-coastal-slate/80 dark:text-gray-500 text-center mx-auto">
                  Manual valuation, not an instant Zestimate.
                </p>
              </div>
            </FadeIn>

            <form className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 space-y-5">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="123 Beach Ave, Rehoboth Beach, DE 19971"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                >
                  <option value="">Select property type</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                  <option value="multi-family">Multi-Family</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
                  Phone Number <span className="text-gray-400 font-normal">(optional but recommended)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-colors shadow-lg text-lg"
              >
                Get My Home Value
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                I&apos;ll personally review and respond within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Net Proceeds Estimator */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4 text-center">
                Net Proceeds Estimator
              </h2>
              <p className="text-coastal-slate dark:text-gray-400 mb-8 text-center">
                Get a quick estimate of what you&apos;ll walk away with after closing.
              </p>
            </FadeIn>

            <NetProceedsCalculator />
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-center text-coastal-blue dark:text-white mb-8">
                Seller FAQs
              </h2>
            </FadeIn>
            <div className="space-y-4">
              <details className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  What&apos;s my home worth in today&apos;s market?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Home values fluctuate based on season, inventory, and local demand. I provide a comprehensive market 
                  analysis using recent comparable sales, current listings, and market trends specific to your area.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  How long does it typically take to sell?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  In the Rehoboth Beach market, well-priced homes typically sell within 30-90 days. Summer months see 
                  faster sales due to higher buyer activity. Pricing and presentation are key to a quick sale.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  Should I make repairs before listing?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Minor repairs and cosmetic improvements often provide strong ROI. I&apos;ll walk through your property 
                  and recommend which updates will yield the best return versus what can be left as-is.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  What are the costs of selling?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Typical costs include real estate commissions, title fees, transfer taxes, and any agreed-upon repairs. 
                  I&apos;ll provide a detailed net sheet showing your estimated proceeds after all costs.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                  Can I sell if I have tenants?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Yes, tenant-occupied properties can be sold. We&apos;ll work around showing schedules and ensure compliance 
                  with lease agreements and Delaware tenant rights. Many investors prefer properties with tenants in place.
                </p>
              </details>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
