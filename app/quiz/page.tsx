import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import BuyerQuiz from '@/components/BuyerQuiz';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Should You Buy Here? Quiz',
  description: 'Take our 5-question quiz to find which Delaware beach community fits your lifestyle and goals best.',
  path: '/quiz',
});

export default function QuizPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Find Your Perfect Beach Town"
          subtitle="Answer a few quick questions to discover which Delaware beach area matches your lifestyle"
          imageUrl="/images/hr-sensational-southern-delaware-cape-henlopen-state-park-lighthouses-southerndebeach-6.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <BuyerQuiz />
          </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Quiz Results Are Just a Starting Point
            </h2>
            <p className="text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
              This quiz uses local market data and buyer patterns to guide you toward areas that fit your goals. 
              But every situation is unique, and nuances matter.
            </p>
            <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
              Let&apos;s discuss your results and what they mean for your specific situation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
