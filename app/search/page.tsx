'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import Section from '@/components/Section';
import SearchPresets from '@/components/SearchPresets';
import IframeEmbed from '@/components/IframeEmbed';
import CustomSearchBar from '@/components/CustomSearchBar';
import ImageHero from '@/components/ImageHero';
import { getPresetById, DEFAULT_EMBED_URL } from '@/lib/listingsPresets';
import { siteConfig } from '@/lib/siteConfig';

function SearchContent() {
  const searchParams = useSearchParams();
  const presetId = searchParams.get('p');
  
  const preset = presetId ? getPresetById(presetId) : null;
  const displayUrl = preset?.url || DEFAULT_EMBED_URL;
  const displayTitle = preset?.label || 'Rehoboth Beach Listings';

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Search Rehoboth Beach Homes"
          imageUrl="/images/areas/bethany/hero.webp"
        />
        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="mb-8">
              <CustomSearchBar 
                defaultPresetId={presetId || undefined} 
                showPresetButtons={false}
              />
            </div>
            <SearchPresets activePresetId={presetId || undefined} />
          </div>

          {preset && preset.embed ? (
            <IframeEmbed
              url={displayUrl}
              title={displayTitle}
              cropTopDesktop={preset.cropTopDesktop}
              cropTopMobile={preset.cropTopMobile}
              cropLeft={preset.cropLeft}
              showOpenButton={true}
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                {displayTitle}
              </h2>
              <p className="text-coastal-slate dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                This search opens in a new window for the best browsing experience
              </p>
              <a
                href={displayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-coastal-blue text-white font-semibold rounded-2xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Listings
              </a>
            </div>
          )}

          <div className="mt-12 bg-coastal-sand dark:bg-blue-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-serif font-bold text-coastal-blue dark:text-white mb-3">
              Need Help Finding the Right Home?
            </h3>
            <p className="text-coastal-slate dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let {siteConfig.agentName} help you navigate the market and find properties that match your criteria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.primaryCtas.text.href}
                className="px-6 py-3 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-colors"
              >
                Text About a Listing
              </a>
              <a
                href={siteConfig.primaryCtas.call.href}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-coastal-blue dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                Call to Discuss
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-8">
            Listings provided via {siteConfig.brokerage.name} and {siteConfig.brokerage.teamName}. 
            All information is deemed reliable but not guaranteed. Properties subject to prior sale, price change, or withdrawal.
          </p>
        </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
