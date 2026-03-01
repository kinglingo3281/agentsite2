import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import Section from '@/components/Section';
import { AREAS } from '@/lib/areas';
import { createMetadata, createFAQSchema } from '@/lib/seo';
import Link from 'next/link';

export async function generateStaticParams() {
  return AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = AREAS.find(a => a.slug === slug);
  
  if (!area) {
    return {};
  }

  return createMetadata({
    title: `${area.name} Real Estate Guide`,
    description: `${area.shortDescription}. ${area.vibe}`,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = AREAS.find(a => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFAQSchema(area.faqs)),
        }}
      />
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Hero Image with Overlay Text */}
        {area.heroImage && (
          <section className="relative overflow-hidden bg-gray-900">
            <div className="relative h-[500px] sm:h-[550px]">
              <img
                src={area.heroImage}
                alt={`${area.name} beach view`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="relative text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl">
                    {area.name} Real Estate
                  </h1>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                The Vibe
              </h2>
              <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed">
                {area.vibe}
              </p>
            </div>

            {area.idealFor && (
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8">
                  Who This Area Is Actually For
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-coastal-seafoam/10 dark:bg-gray-800 rounded-xl p-6 border border-coastal-seafoam/30">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h3 className="text-lg font-semibold text-coastal-blue dark:text-white">
                        Ideal
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {area.idealFor.map((item, idx) => (
                        <li key={idx} className="text-sm text-coastal-slate dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {area.mixedFor && (
                    <div className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-lg font-semibold text-coastal-blue dark:text-white">
                          Mixed
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {area.mixedFor.map((item, idx) => (
                          <li key={idx} className="text-sm text-coastal-slate dark:text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {area.notGreatFor && (
                    <div className="bg-accent-rust/10 dark:bg-gray-800 rounded-xl p-6 border border-accent-rust/30">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6 text-accent-rust" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-lg font-semibold text-coastal-blue dark:text-white">
                          Not Great
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {area.notGreatFor.map((item, idx) => (
                          <li key={idx} className="text-sm text-coastal-slate dark:text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {area.marketReality && (
          <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                Market Reality
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                    Median Price (12 mo)
                  </p>
                  <p className="text-3xl font-bold text-coastal-blue dark:text-blue-400">
                    {area.marketReality.medianPrice}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                    Typical Buyer Type
                  </p>
                  <p className="text-lg font-semibold text-coastal-blue dark:text-white">
                    {area.marketReality.typicalBuyer}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-2">
                    Speed of Market
                  </p>
                  <p className="text-lg font-semibold text-coastal-blue dark:text-white">
                    {area.marketReality.marketSpeed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {area.gotchas && area.gotchas.length > 0 && (
          <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                What People Don&apos;t Expect Here
              </h2>
              <ul className="space-y-2">
                {area.gotchas.map((gotcha, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-coastal-slate dark:text-gray-300"
                  >
                    <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{gotcha}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {area.galleryImages && area.galleryImages.length > 0 && (
          <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                See {area.name}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {area.galleryImages.map((image, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <img
                      src={image}
                      alt={`${area.name} view ${idx + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {area.localFavorites && area.localFavorites.length > 0 && (
          <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                Local Favorites
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {area.localFavorites.map((favorite, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-coastal-blue dark:hover:border-coastal-seafoam transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      {favorite.url ? (
                        <a 
                          href={favorite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-coastal-blue dark:text-white hover:text-coastal-seafoam dark:hover:text-coastal-seafoam text-lg inline-flex items-center gap-2 group"
                        >
                          {favorite.name}
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <h3 className="font-bold text-coastal-blue dark:text-white text-lg">
                          {favorite.name}
                        </h3>
                      )}
                      <span className="text-xs px-3 py-1 bg-coastal-seafoam/20 text-coastal-blue dark:text-coastal-seafoam rounded-full flex-shrink-0">
                        {favorite.category}
                      </span>
                    </div>
                    <p className="text-sm text-coastal-slate dark:text-gray-300">
                      {favorite.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {area.seasonalHighlights && (
          <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-8 text-center">
                What to Expect Each Season
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-coastal-blue dark:text-white">Summer</h3>
                  </div>
                  <p className="text-sm text-coastal-slate dark:text-gray-300">{area.seasonalHighlights.summer}</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-coastal-blue dark:text-white">Fall</h3>
                  </div>
                  <p className="text-sm text-coastal-slate dark:text-gray-300">{area.seasonalHighlights.fall}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-coastal-blue dark:text-white">Winter</h3>
                  </div>
                  <p className="text-sm text-coastal-slate dark:text-gray-300">{area.seasonalHighlights.winter}</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-coastal-blue dark:text-white">Spring</h3>
                  </div>
                  <p className="text-sm text-coastal-slate dark:text-gray-300">{area.seasonalHighlights.spring}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
              Area Highlights
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {area.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-coastal-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-coastal-slate dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>

            {area.searchPresetId && (
              <div className="text-center mt-8">
                <Link
                  href={`/search?p=${area.searchPresetId}`}
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Browse Homes in {area.name}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {area.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-blue/30 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in {area.name}?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let&apos;s discuss what makes this area right for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`sms:+15550000100?&body=Hi,%20I'm%20interested%20in%20learning%20more%20about%20${encodeURIComponent(area.name)}`}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Text About {area.name}
              </a>
              {area.searchPresetId && (
                <Link
                  href={`/search?p=${area.searchPresetId}`}
                  className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
                >
                  View Listings
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
