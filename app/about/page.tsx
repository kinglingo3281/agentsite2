import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'About Agent Name',
  description: 'Meet your local Rehoboth Beach real estate expert. Dedicated to helping clients find their perfect Delaware beach home.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title={`About ${siteConfig.agentName}`}
          imageUrl="/images/areas/lewes/lewes2.jpg"
        />

        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl">
                  <img
                    src="/images/areas/rehoboth/hero.webp"
                    alt={siteConfig.agentName}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="absolute -top-3 -left-3">
                  <img
                    src="/images/Sussex_County_Coast.webp"
                    alt="Sussex County Coast"
                    className="h-36 w-auto object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Award-Winning Local Expertise. Personal Service.
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Welcome! I&apos;m {siteConfig.agentName}, a local Rehoboth Beach real estate expert. With deep roots in the community and years of experience, I bring unmatched local knowledge to every transaction.
                  </p>
                  <p>
                    With years of experience in the Delaware beach market, including extensive work in rental management, I bring unique insight into investment properties and what makes a home work for both owners and guests.
                  </p>
                  <p>
                    My community involvement runs deep. Active in local real estate associations and community organizations, I believe in giving back to the area I serve.
                  </p>
                  <p>
                    As part of the {siteConfig.brokerage.teamName} at {siteConfig.brokerage.name}, I bring extensive market data, buyer/seller networks, and team resources to every transaction.
                  </p>
                  <p>
                    Living here isn&apos;t just my job—it&apos;s my life. That local knowledge matters when you&apos;re making one of the biggest decisions you&apos;ll ever make.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={siteConfig.primaryCtas.text.href}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-center"
                  >
                    Text Me Anytime
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

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What I Bring to Your Transaction
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Market Knowledge
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep understanding of Rehoboth Beach, Dewey, Lewes, and surrounding areas. I know the neighborhoods,
                  market trends, and what makes each community unique.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Strong Negotiation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I&apos;ll handle contract negotiations, coordinate inspections, and guide you through closing. My goal is to protect your interests
                  and achieve the best possible outcome.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Responsive Communication
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick replies to texts, calls, and emails. You&apos;ll never wonder where things stand or feel left in the dark.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Team Resources
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to the brokerage and team network, including marketing, staging, and buyer connections.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8 mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ready to start your Delaware beach real estate journey?
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
