import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showCtas?: boolean;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = siteConfig.heroImageUrl,
  showCtas = true,
  compact = false,
}: HeroProps) {
  if (compact) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-coastal-blue to-coastal-slate dark:from-coastal-slate dark:to-gray-900">
        <div className="relative py-16 sm:py-20">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-coastal-sand dark:bg-gray-900">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh] px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-coastal-blue dark:text-white leading-tight">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-coastal-slate dark:text-gray-300 leading-relaxed">
              {subtitle}
            </p>

            {showCtas && (
              <div className="pt-4">
                <a
                  href={siteConfig.primaryCtas.text.href}
                  className="inline-block px-8 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-all shadow-lg hover:shadow-xl"
                  aria-label="Ask a Local Question"
                >
                  Ask a Local Question
                </a>
                <p className="mt-6 text-sm text-coastal-slate dark:text-gray-400">
                  {siteConfig.brokerageDisclosure}
                </p>
              </div>
            )}
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {backgroundImage && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-coastal-blue/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
