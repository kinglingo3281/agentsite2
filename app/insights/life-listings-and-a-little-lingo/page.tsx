import { createMetadata, createVideoObjectSchema, createLocalBusinessSchema } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';

export const metadata = createMetadata({
  title: 'Life, Listings, and a Little Lingo | Rehoboth Beach Real Estate Stories',
  description: 'Real estate meets real life. Honest conversations about buying, selling, and life decisions in Rehoboth Beach and the 19971 area.',
  path: '/insights/life-listings-and-a-little-lingo',
});

const videoData = {
  name: 'Life, Listings, and a Little Lingo',
  description: 'Monthly real estate conversations in Rehoboth Beach, DE',
  uploadDate: '2026-01-25',
  embedUrl: 'https://www.youtube.com/embed/auYnVKh5e0A',
};

export default function LifeListingsLingoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createVideoObjectSchema(videoData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createLocalBusinessSchema()),
        }}
      />
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              Life, Listings, and a Little Lingo
            </h1>
            <p className="text-lg sm:text-xl text-coastal-slate dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <strong>Life, Listings, and a Little Lingo</strong> is where real estate meets real life.
            </p>
            <p className="text-lg text-coastal-slate dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
              This monthly video series explores the moments behind buying, selling, downsizing, and moving through honest conversations with clients, friends, and voices from our local community.
            </p>
            <p className="text-xl font-serif italic text-coastal-blue dark:text-coastal-seafoam mt-6">
              Every home has a story. Every move is a life decision.
            </p>
          </div>
        </section>

        {/* Video Embed Section */}
        <section className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-800 dark:to-gray-900 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.youtube.com/embed/auYnVKh5e0A"
                title="Life, Listings, and a Little Lingo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              Real Estate Decisions Are Life Decisions
            </h2>
            <div className="space-y-4 text-lg text-coastal-slate dark:text-gray-300 leading-relaxed">
              <p>
                Buying or selling a home is rarely just about square footage or price per foot. It often comes during major life changes: career shifts, growing families, downsizing, relocations, or simply realizing that your current space no longer fits your life.
              </p>
              <p>
                In <strong>Life, Listings, and a Little Lingo</strong>, we talk openly about those moments and how they connect to real estate decisions in <strong>Rehoboth Beach, Lewes, and the surrounding 19971 area</strong>. These conversations are designed to feel relatable and informative, whether you&apos;re actively in the market or just starting to think about what&apos;s next.
              </p>
              <p>
                Real local insight from working daily with buyers and sellers in coastal Delaware. The goal isn&apos;t to sell. It&apos;s to make the process clearer, calmer, and more human.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section 2 */}
        <section className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              Local Perspective You Can Actually Use
            </h2>
            <div className="space-y-4 text-lg text-coastal-slate dark:text-gray-300 leading-relaxed mb-8">
              <p>
                The coastal Delaware real estate market is unique. From full-time residents to second-home buyers, downsizers, and relocations, no two moves look the same. This series focuses on real scenarios people face right here, not generic advice meant for everywhere and nowhere.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-coastal-blue dark:text-white mb-4">
                Topics include:
              </h3>
              <ul className="space-y-3">
                {[
                  'Navigating timing and transitions',
                  'Downsizing or upsizing thoughtfully',
                  'Buying or selling during life changes',
                  'Understanding local market dynamics',
                  'Community voices and client experiences',
                ].map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coastal-slate dark:text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-coastal-slate dark:text-gray-400 italic">
                Each episode builds on the idea that good decisions come from good conversations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Explore, Learn, and Join the Conversation
            </h2>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              New episodes of <strong>Life, Listings, and a Little Lingo</strong> are released monthly and featured here in the Insights section.
            </p>
            <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
              If you&apos;re considering a move, exploring the market, or simply curious about how real people navigate real estate decisions in coastal Delaware, you&apos;re in the right place.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
