import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'The Team',
  description: 'Meet the team. Award-winning Delaware beach real estate experts helping you find your perfect coastal home.',
  path: '/team',
});

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Custom Hero with adjusted image position */}
        <section className="relative overflow-hidden bg-gray-900">
          <div className="relative h-[500px] sm:h-[550px]">
            <img
              src="/images/areas/lewes/lewes2.jpg"
              alt="The Team"
              className="absolute inset-0 w-full h-full object-cover object-[60%_30%] sm:object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl text-center">
                The Team
              </h1>
            </div>
          </div>
        </section>

        {/* SECTION 1 - Sand Gradient - Team Introduction */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl">
                    <img
                      src="/images/areas/lewes/lewes1.jpg"
                      alt="The Team"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    The Coastal Team
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We are a high-producing real estate team based in Sussex County with a strong focus on the Delaware coast. Our team of experienced agents handles a wide range of residential transactions across the area.
                    </p>
                    <p>
                      Working as a team allows us to manage high volume while staying responsive. There is always someone available to follow up on showings, review offers, handle inspections, or move a deal forward when timing matters. Clients are not relying on one person being available at the right moment.
                    </p>
                    <p>
                      Our work is concentrated in Rehoboth Beach, Lewes, and other Sussex County communities. We regularly handle primary residences, second homes, and properties with rental or HOA considerations—transactions that require local experience and close attention, especially in coastal markets.
                    </p>
                    <p>
                      Much of our business comes from repeat clients and referrals. Clear communication, realistic pricing guidance, and attention to detail are expected, not optional. Clients get answers based on what is actually happening in the market, not just one person&apos;s opinion.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href={siteConfig.primaryCtas.text.href}
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-center"
                    >
                      Text Us Anytime
                    </a>
                    <a
                      href={siteConfig.primaryCtas.call.href}
                      className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 2 - Blue Gradient - Performance Stats */}
        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  2025 Zillow Performance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mx-auto max-w-2xl">
                  Backed by verified results and client reviews
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                
                {/* Trusted & Rated */}
                <div className="relative bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-amber-100 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-full opacity-20"></div>
                  <div className="relative mb-4 inline-block">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                    5.0★
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Trusted, Highly Rated
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Average Zillow rating
                  </p>
                </div>

                {/* Sales Activity */}
                <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20"></div>
                  <div className="relative mb-4 inline-block">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    100+
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Sales Activity
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Homes sold in past year
                  </p>
                </div>

                {/* Premier Agent */}
                <div className="relative bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-emerald-100 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full opacity-20"></div>
                  <div className="relative mb-4 inline-block">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-emerald-600 dark:to-emerald-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    Premier
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Zillow Premier Agent
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Recognized team status
                  </p>
                </div>

              </div>

              {/* Detailed Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-gradient-to-br from-coastal-seafoam/10 to-coastal-blue/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-coastal-seafoam/20 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-seafoam/20 dark:bg-coastal-seafoam/10 flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-coastal-seafoam dark:text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        200+ Verified Client Reviews
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Consistently praised for responsiveness, communication, and local expertise
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-coastal-seafoam/10 to-coastal-blue/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-coastal-seafoam/20 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-seafoam/20 dark:bg-coastal-seafoam/10 flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-coastal-seafoam dark:text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        High-Volume, Experienced Team
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Years of consistent production across all price points, from entry-level to luxury properties
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-coastal-seafoam/10 to-coastal-blue/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-coastal-seafoam/20 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-seafoam/20 dark:bg-coastal-seafoam/10 flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-coastal-seafoam dark:text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Sussex County Focused
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Actively serving buyers and sellers throughout Sussex County, including Rehoboth Beach and Lewes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-coastal-seafoam/10 to-coastal-blue/5 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-coastal-seafoam/20 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coastal-seafoam/20 dark:bg-coastal-seafoam/10 flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-coastal-seafoam dark:text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Proven Market Success
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Wide range of successful transactions including primary residences, second homes, and rental properties
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 - Sand Gradient - CTA */}
        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-8 mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Ready to start your Delaware beach real estate journey with experienced local experts?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/search"
                  className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
                >
                  Browse Listings
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
