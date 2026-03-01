import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import ImageHero from '@/components/ImageHero';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/siteConfig';
import { createMetadata, createRealEstateAgentSchema } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Contact Agent Name',
  description: 'Get in touch for all your Rehoboth Beach real estate needs. Call, text, or email today.',
  path: '/contact',
});

export default function ContactPage() {
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
        <ImageHero
          title="Get In Touch"
          imageUrl="/images/state park far away.jpg"
        />

        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                        Phone
                      </h3>
                      <a
                        href={siteConfig.primaryCtas.call.href}
                        className="text-coastal-blue dark:text-blue-400 hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                        Text
                      </h3>
                      <a
                        href={siteConfig.primaryCtas.text.href}
                        className="text-coastal-blue dark:text-blue-400 hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                        Work Phone
                      </h3>
                      <a
                        href={siteConfig.primaryCtas.call.href}
                        className="text-coastal-blue dark:text-blue-400 hover:underline"
                      >
                        {siteConfig.phoneDirect}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-coastal-blue dark:text-blue-400 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coastal-seafoam/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coastal-seafoam" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-coastal-blue dark:text-white mb-1">
                        Service Area
                      </h3>
                      <p className="text-coastal-slate dark:text-gray-400">
                        {siteConfig.serviceArea}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-coastal-sand/30 to-coastal-seafoam/20 dark:from-coastal-blue/10 dark:to-coastal-seafoam/10 rounded-2xl p-6 border border-coastal-sand/50 dark:border-coastal-seafoam/30">
                  <h3 className="font-serif font-semibold text-coastal-blue dark:text-white mb-2">
                    Prefer to text?
                  </h3>
                  <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                    Text is often the fastest way to reach me. I typically respond the same day during business hours.
                  </p>
                  <a
                    href={siteConfig.primaryCtas.text.href}
                    className="inline-block px-6 py-3 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-colors shadow-lg"
                  >
                    Send a Text Now
                  </a>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-coastal-sand/40 via-coastal-blue/25 to-coastal-blue/30 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-xl text-coastal-slate dark:text-gray-400 mb-8">
              Use the contact methods above to set up a convenient time to talk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.primaryCtas.text.href}
                className="px-8 py-4 bg-coastal-blue text-white font-semibold rounded-2xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
              >
                Text to Schedule
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Schedule a Call`}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                Email to Schedule
              </a>
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
