import { createMetadata } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Insights',
  description: 'Videos, market updates, and local insights about Delaware beach real estate.',
  path: '/insights',
});

const articles = [
  {
    slug: 'life-listings-and-a-little-lingo',
    title: 'Life, Listings, and a Little Lingo',
    description: 'Real estate meets real life. Monthly conversations about buying, selling, and life decisions in Rehoboth Beach and the 19971 area.',
    videoId: 'auYnVKh5e0A',
    category: 'Video Series',
    date: 'January 2026',
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Insights"
          subtitle="Videos, market updates, and local stories"
          imageUrl="/images/towersbannerstatepark.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8">
                Latest Content
              </h2>
              
              <div className="space-y-12">
                {articles.map((article) => (
                  <article key={article.slug} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${article.videoId}`}
                        title={article.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-coastal-blue text-white text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-coastal-slate dark:text-gray-400">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-3">
                        {article.title}
                      </h3>
                      <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                        {article.description}
                      </p>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="mt-4 inline-flex items-center text-coastal-blue dark:text-coastal-seafoam font-semibold hover:underline"
                      >
                        Read More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                More Content Coming Soon
              </h2>
              <p className="text-lg text-coastal-slate dark:text-gray-300 mb-8">
                New episodes and articles are released regularly. Check back for market updates, local stories, and more conversations about coastal Delaware real estate.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-coastal-blue/10 dark:bg-coastal-blue/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-coastal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Video Content
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Property tours, market updates, and local area highlights
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-coastal-seafoam/10 dark:bg-coastal-seafoam/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-coastal-seafoam" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Market Updates
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Real estate trends and data for Sussex County beaches
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-coastal-sand/20 dark:bg-coastal-sand/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-coastal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Local Stories
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Beach community events, lifestyle, and local insights
                  </p>
                </div>
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
