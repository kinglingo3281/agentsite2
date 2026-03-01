import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Area Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/areas/rehoboth-beach"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Rehoboth Beach
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/dewey-beach"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Dewey Beach
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/lewes"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Lewes
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/milton"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Milton
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/bethany-beach"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Bethany Beach
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Tools & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/listings"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/live"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Live Beach Cams
                </Link>
              </li>
              <li>
                <Link
                  href="/buy"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Should You Buy Here?
                </Link>
              </li>
              <li>
                <Link
                  href="/market-intel"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Market Intel
                </Link>
              </li>
              <li>
                <Link
                  href="/how-i-work"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  How I Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-coastal-seafoam transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Agent Name</h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-gray-300 hover:text-coastal-seafoam transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.primaryCtas.call.href}
                className="block text-gray-300 hover:text-coastal-seafoam transition-colors text-lg font-semibold"
              >
                Office: {siteConfig.phoneOffice}
              </a>
              <a
                href={siteConfig.primaryCtas.call.href}
                className="block text-gray-300 hover:text-coastal-seafoam transition-colors"
              >
                Cell: {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.primaryCtas.call.href}
                className="block text-gray-300 hover:text-coastal-seafoam transition-colors"
              >
                Direct: {siteConfig.phoneDirect}
              </a>
              <p className="text-gray-400 pt-2">
                {siteConfig.brokerage.address}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600/30 pt-8">
          {/* Team and Company Logos */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8 pb-6 border-b border-gray-600/20">
            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4">
              <img
                src="/images/areas/rehoboth/hero.webp"
                alt="Brokerage"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg px-4 sm:px-6 py-3 sm:py-4">
              <img
                src="/images/areas/lewes/lewes1.jpg"
                alt="Team"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <img
                src="/images/Sussex_County_Coast.webp"
                alt="Sussex County Coast"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <img
                src="/images/equal-housing-logo.svg"
                alt="Equal Housing Opportunity"
                className="h-12 w-12 sm:h-11 sm:w-11 opacity-80 flex-shrink-0 invert brightness-0"
              />
              <div>
                <p className="mb-2 text-xs">{siteConfig.brokerageDisclosure}</p>
                <p className="text-xs">
                  © {currentYear} {siteConfig.agentName}. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="text-xs hover:text-coastal-seafoam transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
