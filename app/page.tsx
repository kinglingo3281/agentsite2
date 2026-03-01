'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import WalkthroughCarousel from '@/components/WalkthroughCarousel';
import Testimonials from '@/components/Testimonials';
import { siteConfig } from '@/lib/siteConfig';
import { FEATURED_WALKTHROUGHS } from '@/lib/walkthroughData';
import { AREAS } from '@/lib/areas';
import { createRealEstateAgentSchema } from '@/lib/seo';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createRealEstateAgentSchema()),
        }}
      />
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Custom Branded Hero with Video */}
        <section className="relative overflow-hidden bg-gray-900">
          <div className="relative h-[500px] sm:h-[550px]">
            <video
              id="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ imageRendering: 'auto' }}
            >
              <source src="/images/mixkit-waves-reaching-the-shore-1925-hd-ready.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-coastal-sand/60 dark:to-gray-900/80" />
            
            {/* Branded Header Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="relative text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.18em] uppercase text-white drop-shadow-2xl mb-4">
                  AGENT NAME
                </h1>
                <div className="hidden md:block w-[70%] max-w-2xl h-[1px] bg-white/80 mb-3"></div>
                <p className="text-xs sm:text-sm tracking-[0.28em] uppercase text-amber-200 drop-shadow-lg mb-2">
                  OF THE COASTAL TEAM,<span className="text-[0.6em] align-super ml-0.5"></span>
                </p>
                <div 
                  className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent drop-shadow-lg mb-6 md:mb-0 md:absolute md:left-auto md:translate-x-0 md:-right-4 lg:right-0 md:bottom-0"
                  style={{ fontFamily: "'Allura', cursive" }}
                >
                  REALTOR<span className="text-lg sm:text-xl md:text-2xl align-super ml-2">®</span>
                </div>
              </div>
            </div>
            
            {/* Pause/Play Button */}
            <button
              onClick={() => {
                const video = document.getElementById('hero-video') as HTMLVideoElement;
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }}
              className="absolute bottom-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-30 hover:opacity-100"
              aria-label="Pause/Play video"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </section>

        {/* About Me + Trust Pillars */}
        <div className="py-12 bg-gradient-to-b from-gray-900/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Agent Photo */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="/images/areas/rehoboth/hero.webp"
                        alt="Agent Name"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-coastal-blue text-white px-6 py-3 rounded-lg shadow-lg">
                      <p className="text-sm font-semibold">Your Local Expert</p>
                    </div>
                    <div className="absolute -top-3 -left-3">
                      <img
                        src="/images/Sussex_County_Coast.webp"
                        alt="Sussex County Coast"
                        className="h-36 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white/80 dark:bg-gray-800/90 rounded-2xl p-6 md:p-8 shadow-lg md:shadow-none md:bg-transparent dark:md:bg-transparent">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                    Why Work With Me
                  </h2>
                  <div className="space-y-6 text-gray-700 dark:text-gray-200">
                    <p className="text-lg">
                      Hi, I&apos;m {siteConfig.agentName}, an award-winning real estate agent with Your Brokerage REALTOR®. I help buyers and sellers navigate the Delaware beach real estate market 
                      with honest guidance and zero pressure.
                    </p>
                    <p className="text-coastal-slate dark:text-gray-400 leading-relaxed">
                      No pressure tactics, no rushed decisions. Just straightforward advice about what actually 
                      makes sense for you.
                    </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-coastal-blue dark:text-white mb-1 text-lg">
                          Honest Guidance
                        </h3>
                        <p className="text-sm text-coastal-slate dark:text-gray-400">
                          I&apos;ll tell you when pricing is off, when to wait for better timing, or when an offer isn&apos;t right for your situation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-coastal-blue dark:text-white mb-1 text-lg">
                          Deep Local Knowledge
                        </h3>
                        <p className="text-sm text-coastal-slate dark:text-gray-400">
                          Market trends, seasonal patterns, what buyers and sellers need to know. I understand both sides of every transaction.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-coastal-blue dark:text-white mb-1 text-lg">
                          No Pressure Timeline
                        </h3>
                        <p className="text-sm text-coastal-slate dark:text-gray-400">
                          Buy or Sell when it makes sense for you. My job is honest guidance, not pushing you into decisions before you&apos;re ready.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/how-i-work"
                    className="inline-flex items-center mt-6 text-coastal-blue dark:text-blue-400 hover:underline font-medium text-sm"
                  >
                    Learn more about my approach →
                  </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Featured Listing - compact */}
        <div className="py-10 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <WalkthroughCarousel walkthroughs={FEATURED_WALKTHROUGHS} />
            </FadeIn>
          </div>
        </div>

        {/* Areas - with background image */}
        <div className="relative py-12 overflow-hidden bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-coastal-blue via-coastal-seafoam to-coastal-sand"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-coastal-blue dark:text-white mb-2">
                Find Your Beach Town
              </h2>
              <p className="text-center text-coastal-slate dark:text-gray-400 max-w-xl mx-auto mb-8 text-sm">
                Each has its own vibe. Pick one to explore.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              {AREAS.map((area, idx) => {
                const imageMap: Record<string, string> = {
                  'rehoboth-beach': '/images/areas/rehoboth/reho.jpg',
                  'dewey-beach': '/images/areas/dewey/hero.jpg',
                  'lewes': '/images/areas/lewes/lewes1.jpg',
                  'milton': '/images/areas/milton/hero.jpg',
                  'bethany-beach': '/images/areas/bethany/beth1.jpg',
                };
                return (
                  <FadeIn key={area.id} delay={idx * 50}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-coastal-blue dark:hover:border-coastal-seafoam"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={imageMap[area.id]}
                          alt={area.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        {/* <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex items-center text-white text-xs font-medium">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Delaware Beach
                          </div>
                        </div> */}
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800">
                        <h3 className="text-lg font-serif font-bold text-coastal-blue dark:text-white mb-2">
                          {area.name}
                        </h3>
                        <p className="text-sm text-coastal-slate dark:text-gray-400 leading-relaxed">
                          {area.shortDescription.split('.')[0]}
                        </p>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
              
              {/* Multi-Town Card */}
              <FadeIn delay={AREAS.length * 50}>
                <Link
                  href="/areas/other-sussex-towns"
                  className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-coastal-blue dark:hover:border-coastal-seafoam"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="/images/georgetown.jpg"
                      alt="More Sussex County Towns"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center text-white text-xs font-medium">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Sussex County
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-lg font-serif font-bold text-coastal-blue dark:text-white mb-2">
                      More Sussex County Towns
                    </h3>
                    <p className="text-sm text-coastal-slate dark:text-gray-400 leading-relaxed">
                      Ocean View, Fenwick Island, South Bethany, Millsboro, and more
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Live Webcam Widget */}
        <div className="py-12 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-3">
                    See It Live Right Now
                  </h2>
                  <p className="text-coastal-slate dark:text-gray-400 mb-4 leading-relaxed">
                    Check current conditions at Rehoboth Beach. See crowds, weather, and the vibe before you visit.
                  </p>
                  <Link
                    href="/live"
                    className="inline-flex items-center text-sm text-coastal-blue dark:text-blue-400 hover:underline font-medium"
                  >
                    View all beach cams →
                  </Link>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="relative aspect-video bg-gray-900">
                    <video
                      autoPlay
                      muted
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                      src="https://streamer3.brownrice.com/atlanticsands/atlanticsands.stream/main_playlist.m3u8"
                    >
                      <source src="https://streamer3.brownrice.com/atlanticsands/atlanticsands.stream/main_playlist.m3u8" type="application/x-mpegURL" />
                    </video>
                    <div className="absolute top-3 right-3 flex items-center text-xs text-white font-medium bg-green-600 px-2 py-1 rounded-full shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                      LIVE
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-coastal-slate dark:text-gray-400">
                      Rehoboth Beach Boardwalk
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-10 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <FadeIn>
            <Testimonials />
          </FadeIn>
        </div>

        {/* CTA - with gradient bg */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coastal-sand via-coastal-seafoam/30 to-coastal-blue/40"></div>
          <div className="relative text-center max-w-2xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-coastal-slate dark:text-gray-300 mb-8 text-base">
              Take the quiz or reach out about a specific property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-coastal-blue text-white font-semibold rounded-lg hover:bg-coastal-slate transition-all shadow-lg"
              >
                Contact Me
              </Link>
              <Link
                href="/quiz"
                className="px-8 py-3 bg-white text-coastal-blue border-2 border-coastal-blue font-semibold rounded-lg hover:bg-coastal-blue hover:text-white transition-all shadow-lg"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
