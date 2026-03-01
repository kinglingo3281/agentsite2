'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import PhotoGallery from '@/components/PhotoGallery';

export default function SpinnakerListing() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="relative pt-24 pb-12 bg-gradient-to-b from-coastal-blue/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <div className="mb-6">
                <Link 
                  href="/"
                  className="inline-flex items-center text-sm text-coastal-blue dark:text-blue-400 hover:underline mb-4"
                >
                  ← Back to Home
                </Link>
              </div>
              
              <div className="mb-6">
                <div className="inline-block bg-coastal-seafoam/20 text-coastal-blue dark:text-coastal-seafoam px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Listing
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  116 S Spinnaker Ln
                </h1>
                <p className="text-xl text-coastal-slate dark:text-gray-300">
                  Milton, DE 19968 • Shipbuilders Village
                </p>
                <p className="text-2xl font-bold text-coastal-blue dark:text-white mt-2">
                  $299,000
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://www.yourbrokerage.com/real-estate/delaware/milton/desu2101298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-coastal-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  View Full Listing
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="mailto:agent@yourbrokerage.com?subject=Inquiry about 116 S Spinnaker Ln"
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-coastal-blue dark:text-white border-2 border-coastal-blue dark:border-gray-600 font-semibold rounded-lg hover:bg-coastal-blue hover:text-white dark:hover:bg-gray-700 transition-all"
                >
                  Contact Agent
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Property Display */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          {/* Photo Gallery */}
          <FadeIn>
            <PhotoGallery
              photos={[
                '/images/listings/116-spinnaker/photo_1.jpg',
                '/images/listings/116-spinnaker/photo_2.jpg',
                '/images/listings/116-spinnaker/photo_3.jpg',
                '/images/listings/116-spinnaker/photo_4.jpg',
                '/images/listings/116-spinnaker/photo_5.jpg',
                '/images/listings/116-spinnaker/photo_6.jpg',
                '/images/listings/116-spinnaker/photo_7.jpg',
                '/images/listings/116-spinnaker/photo_8.jpg',
                '/images/listings/116-spinnaker/photo_9.jpg',
                '/images/listings/116-spinnaker/photo_10.jpg',
              ]}
              title="116 S Spinnaker Ln"
            />
          </FadeIn>

          {/* Property Details */}
          <FadeIn delay={100}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Main Details */}
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-coastal-blue text-white text-xs font-semibold rounded-full">
                      MLS# DESU2101298
                    </span>
                    <span className="px-3 py-1 bg-coastal-seafoam/20 text-coastal-blue text-xs font-semibold rounded-full">
                      Active Listing
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                    Property Overview
                  </h2>
                  
                  <p className="text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
                    Discover this well-appointed 3-bedroom, 1.5-bath end-unit townhome in Shipbuilder&apos;s Village with no HOA and no rental restrictions. 
                    Features BRAND-NEW flooring, fresh paint, updated hardware, and thoughtful improvements throughout. The roof, HVAC, and 
                    washer/dryer are all only a few years old, offering added comfort and reliability. Includes a convenient storage shed and 
                    the added privacy of an end-unit setting. Less than a mile from downtown Milton with easy access to local restaurants, 
                    scenic parks, and all the character this historic town has to offer. Move-in ready and perfectly located!
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-coastal-sand/20 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-coastal-blue dark:text-white mb-1">3</div>
                      <div className="text-xs text-coastal-slate dark:text-gray-400">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-coastal-sand/20 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-coastal-blue dark:text-white mb-1">1.5</div>
                      <div className="text-xs text-coastal-slate dark:text-gray-400">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-coastal-sand/20 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-coastal-blue dark:text-white mb-1">1,254</div>
                      <div className="text-xs text-coastal-slate dark:text-gray-400">Sq Ft</div>
                    </div>
                    <div className="text-center p-4 bg-coastal-sand/20 dark:bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-coastal-blue dark:text-white mb-1">0.16</div>
                      <div className="text-xs text-coastal-slate dark:text-gray-400">Acres</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-3">
                    Property Features
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {[
                      'End-unit townhome',
                      'No HOA fees',
                      'No rental restrictions',
                      'Brand new LVP flooring',
                      'Fresh paint throughout',
                      'Updated hardware',
                      'Roof only a few years old',
                      'HVAC recently replaced',
                      'Storage shed included',
                      'Heat pump heating/cooling',
                      'Central A/C',
                      'Built 1989',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-coastal-slate dark:text-gray-300">
                        <svg className="w-5 h-5 text-coastal-seafoam flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-gradient-to-br from-coastal-blue to-coastal-slate text-white rounded-xl p-6 shadow-xl mb-6">
                  <h3 className="text-xl font-serif font-bold mb-4">Contact Agent</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    As the listing agent, I can provide complete details and schedule a private showing.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:agent@yourbrokerage.com?subject=116 S Spinnaker Ln Inquiry"
                      className="block w-full px-4 py-3 bg-white text-coastal-blue font-semibold rounded-lg hover:bg-blue-50 transition-all text-center text-sm"
                    >
                      Email Me
                    </a>
                    <a
                      href="tel:+15550000100"
                      className="block w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-center text-sm border border-white/30"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-coastal-blue dark:text-white mb-3">
                    View Full Listing
                  </h3>
                  <p className="text-sm text-coastal-slate dark:text-gray-400 mb-4">
                    See complete details, photos, and documentation on the brokerage site.
                  </p>
                  <a
                    href="https://www.yourbrokerage.com/real-estate/delaware/milton/desu2101298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-coastal-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center text-sm"
                  >
                    Full Listing →
                  </a>
                  <p className="text-xs text-coastal-slate dark:text-gray-500 mt-3">
                    MLS# DESU2101298<br />
                    Updated: 12/30/2025
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Why This Property Section */}
          <FadeIn delay={100}>
            <div className="mt-12 bg-gradient-to-br from-coastal-sand/30 to-coastal-blue/10 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-coastal-sand/50 dark:border-gray-700">
              <h3 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                Agent&apos;s Insight
              </h3>
              <p className="text-coastal-slate dark:text-gray-300 leading-relaxed mb-6">
                This is the rare combination people are looking for: no HOA fees, no rental restrictions, and recent updates that mean 
                you won&apos;t be dumping money into big repairs right away. The end-unit location gives you more privacy and natural light. 
                Being under a mile from downtown Milton means walkable restaurants and parks, but you&apos;re still close enough to beaches 
                for weekend trips. At $299k, you&apos;re getting move-in ready without the coastal price tag.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                  <div className="text-coastal-seafoam mb-2">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-coastal-blue dark:text-white mb-1">No HOA</h4>
                  <p className="text-sm text-coastal-slate dark:text-gray-400">
                    No monthly fees, no restrictions
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                  <div className="text-coastal-seafoam mb-2">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-coastal-blue dark:text-white mb-1">Move-In Ready</h4>
                  <p className="text-sm text-coastal-slate dark:text-gray-400">
                    New floors, fresh paint, updated systems
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                  <div className="text-coastal-seafoam mb-2">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-coastal-blue dark:text-white mb-1">End Unit Privacy</h4>
                  <p className="text-sm text-coastal-slate dark:text-gray-400">
                    Extra windows, more natural light
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact CTA */}
          <FadeIn delay={200}>
            <div className="mt-12 text-center bg-gradient-to-r from-coastal-blue to-coastal-slate p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Interested in This Property?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss whether this home fits your beach property goals. I&apos;ll give you honest 
                feedback about the pros and cons for your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:agent@yourbrokerage.com?subject=116 S Spinnaker Ln Inquiry"
                  className="px-8 py-3 bg-white text-coastal-blue font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
                >
                  Email Agent
                </a>
                <Link
                  href="/how-i-work"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-coastal-blue transition-all"
                >
                  Learn My Approach
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
