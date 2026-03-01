import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageHero from '@/components/ImageHero';
import { createMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Agent Name Real Estate website',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <ImageHero
          title="Privacy Policy"
          imageUrl="/images/state park far away.jpg"
        />
        
        <div className="bg-gradient-to-b from-coastal-sand/50 via-coastal-sand/60 to-coastal-blue/20 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-coastal-slate dark:text-gray-400 mb-8 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Information We Collect
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  This website is a static informational site. We collect minimal personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-coastal-slate dark:text-gray-300 mb-6">
                  <li>Contact information you voluntarily provide through forms (name, email, phone)</li>
                  <li>Basic analytics data about site usage (via standard web analytics)</li>
                  <li>Theme preferences stored locally in your browser</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  Information you provide is used solely to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-coastal-slate dark:text-gray-300 mb-6">
                  <li>Respond to your real estate inquiries</li>
                  <li>Provide requested information about properties</li>
                  <li>Communicate about real estate services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  This website embeds listing information from {siteConfig.brokerage.name}. When viewing embedded listings, 
                  you may be subject to their privacy policies and terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Data Storage
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  This is a static website hosted on Cloudflare Pages. We do not maintain a database of personal information. 
                  Form submissions are handled via secure methods and your information is transmitted directly to {siteConfig.agentName}.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Your Privacy Rights
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-coastal-slate dark:text-gray-300 mb-6">
                  <li>Request information about data we have collected</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of future communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Contact
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 mb-4 leading-relaxed">
                  For privacy-related questions, contact:<br />
                  <a href={`mailto:${siteConfig.email}`} className="text-coastal-blue dark:text-blue-400 hover:underline font-medium">
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-coastal-blue dark:text-white mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-coastal-slate dark:text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. The updated version will be indicated by an 
                  updated date at the top of this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
