import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Live Beach Webcams',
  description: 'See what\'s happening right now at Rehoboth Beach, Dewey Beach, and other Delaware beaches with live webcam feeds',
  path: '/live',
});

const webcams = [
  {
    id: 'atlantic-sands-boardwalk',
    name: 'Rehoboth Beach Boardwalk',
    location: 'Rehoboth Beach - Atlantic Sands Hotel',
    url: 'https://www.visitdebeaches.com/webcams/live-boardwalk-cam-atlantic-sands-hotel-in-rehoboth-beach/',
    description: 'Live boardwalk view from Atlantic Sands Hotel',
    embed: true,
    embedUrl: 'https://streamer3.brownrice.com/atlanticsands/atlanticsands.stream/main_playlist.m3u8',
    type: 'hls'
  },
  {
    id: 'rehoboth-oceanfront',
    name: 'Rehoboth Beach Oceanfront',
    location: 'Rehoboth Beach - Atlantic Sands',
    url: 'https://www.visitdebeaches.com/live-webcams/rehoboth-beach-oceanfront-webcam/',
    description: 'Direct oceanfront view of Rehoboth Beach',
    embed: true,
    embedUrl: 'https://streamer3.brownrice.com/atlanticsands2/atlanticsands2.stream/main_playlist.m3u8',
    type: 'hls'
  },
  {
    id: 'ferry-terminal',
    name: 'Lewes Ferry Terminal',
    location: 'Cape May-Lewes Ferry',
    url: 'https://www.cmlf.com/check-traffic-live-camera-feeds',
    description: 'Live ferry traffic and terminal activity',
    embed: true,
    embedUrl: 'https://stream.vistawebcams.com:19350/live/vcde012.stream/playlist.m3u8',
    type: 'hls'
  },
  {
    id: 'irish-eyes-lewes',
    name: 'Irish Eyes Lewes Canal',
    location: 'Lewes Canal',
    url: 'https://youtu.be/3G10c_ege1E',
    description: 'Live canal view from Irish Eyes restaurant',
    embed: true,
    embedUrl: 'https://www.youtube.com/embed/3G10c_ege1E',
    type: 'iframe'
  },
  {
    id: 'rehoboth-outlets',
    name: 'Rehoboth Outlets Traffic',
    location: 'Tanger Outlets - Rehoboth',
    url: 'https://video.deldot.gov',
    description: 'Live traffic cam at Rehoboth Outlets',
    embed: true,
    embedUrl: 'https://video.deldot.gov:443/live/SCAM208.stream/playlist.m3u8',
    type: 'hls'
  },
  {
    id: 'dewey-beach-live',
    name: 'Dewey Beach Live',
    location: 'Dewey Beach',
    url: 'https://www.deweybeach.com/',
    description: 'Live beach and bay view in Dewey Beach',
    embed: true,
    embedUrl: 'https://content.streamhoster.com/player/lv_dbwebmaster2/broadcast1?autoPlay=1',
    type: 'iframe'
  }
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Beach Views"
          imageUrl="/images/areas/dewey/dewey3.jpg"
        />

        {/* Intro */}
        <div className="py-16 bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <p className="text-lg text-coastal-slate dark:text-gray-300 leading-relaxed font-medium">
                Considering buying here? See what each beach town looks like right now. Check crowds, weather, and the vibe before you visit.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Webcams Grid */}
        <div className="py-16 bg-gradient-to-b from-coastal-blue/20 via-coastal-sand/40 to-coastal-sand/50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {webcams.map((cam, idx) => (
                <FadeIn key={cam.id} delay={idx * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* Webcam Embed */}
                    <div className="relative aspect-video bg-gray-900">
                      {cam.embed ? (
                        <>
                          {cam.type === 'hls' && (
                            <video
                              muted
                              playsInline
                              controls
                              className="w-full h-full object-cover"
                              src={cam.embedUrl}
                            >
                              <source src={cam.embedUrl} type="application/x-mpegURL" />
                            </video>
                          )}
                          {cam.type === 'mjpeg' && (
                            <img
                              src={cam.embedUrl}
                              alt={cam.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                          {cam.type === 'iframe' && (
                            <iframe
                              src={cam.embedUrl}
                              title={cam.name}
                              className="w-full h-full"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          )}
                          <div className="absolute top-3 right-3 flex items-center text-xs text-white font-medium bg-green-600 px-2 py-1 rounded-full shadow-lg">
                            <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                            LIVE
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                          <a
                            href={cam.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-colors shadow-lg inline-flex items-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Live on Source Site
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-serif font-bold text-coastal-blue dark:text-white">
                          {cam.name}
                        </h3>
                      </div>
                      <p className="text-sm text-coastal-slate dark:text-gray-400 mb-3">
                        {cam.description}
                      </p>
                      <a
                        href={cam.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-coastal-blue dark:text-blue-400 hover:underline font-medium"
                      >
                        View on source site
                        <svg className="w-3 h-3 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coastal-blue via-coastal-blue to-coastal-slate opacity-95"></div>
          <div className="relative text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Ready to Visit in Person?
            </h2>
            <p className="text-blue-100 mb-6 text-sm">
              Let me show you around and explain what you&apos;re seeing
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="sms:+15550000100"
                className="px-6 py-3 bg-white text-coastal-blue font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                Text to Schedule
              </a>
              <Link
                href="/areas"
                className="px-6 py-3 bg-coastal-seafoam text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Explore Area Guides
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
