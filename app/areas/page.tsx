import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import Section from '@/components/Section';
import { AREAS } from '@/lib/areas';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Beach Communities & Areas Guide',
  description: 'Explore Rehoboth Beach, Dewey Beach, Lewes, Milton, and Bethany Beach. Find the perfect Delaware beach community for your lifestyle.',
  path: '/areas',
});

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Delaware Beach Communities"
          imageUrl="/images/areas/rehoboth/reho.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Explore Local Areas
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Each beach town has its own unique character. Discover which community fits your lifestyle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => {
              const imageMap: Record<string, string> = {
                'rehoboth-beach': '/images/areas/rehoboth/reho.jpg',
                'dewey-beach': '/images/areas/dewey/hero.jpg',
                'lewes': '/images/areas/lewes/lewes1.jpg',
                'milton': '/images/areas/milton/hero.jpg',
                'bethany-beach': '/images/areas/bethany/beth1.jpg',
              };
              return (
                <Link
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageMap[area.id]}
                      alt={area.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {area.shortDescription}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* More Sussex County Towns Card */}
            <Link
              href="/areas/other-sussex-towns"
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/georgetown.jpg"
                  alt="More Sussex County Towns"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  More Sussex County Towns
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore Ocean View, Fenwick Island, South Bethany, Millsboro, Selbyville, Georgetown, and other Sussex County communities
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Not Sure Which Area Is Right?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let&apos;s help you find the perfect neighborhood for your Delaware beach lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:+15550000100?&body=Hi,%20I'd%20like%20to%20discuss%20which%20beach%20area%20is%20best%20for%20me"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Text to Discuss
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
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
