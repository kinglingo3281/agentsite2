import { Metadata } from 'next';
import { siteConfig } from './siteConfig';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yoursite.com';

export function createMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = title.includes(siteConfig.agentName) 
    ? title 
    : `${title} | ${siteConfig.agentName} - Rehoboth Beach Real Estate`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${siteConfig.agentName} Real Estate`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function createRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.agentName,
    url: baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.brokerage.address,
      addressLocality: 'Rehoboth Beach',
      addressRegion: 'DE',
      postalCode: '19971',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.7201,
        longitude: -75.0761,
      },
      geoRadius: '50000',
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Real Estate Services',
        description: 'Residential real estate services including buying, selling, and market consultation in Rehoboth Beach and Sussex County, Delaware',
      },
    },
  };
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createVideoObjectSchema({
  name,
  description,
  uploadDate,
  embedUrl,
  thumbnailUrl,
}: {
  name: string;
  description: string;
  uploadDate: string;
  embedUrl: string;
  thumbnailUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    uploadDate,
    embedUrl,
    thumbnailUrl: thumbnailUrl || `https://img.youtube.com/vi/${embedUrl.split('/').pop()}/maxresdefault.jpg`,
    publisher: {
      '@type': 'Person',
      name: 'Agent Name',
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Your Brokerage REALTOR®',
    areaServed: ['Rehoboth Beach', 'Lewes', '19971'],
    employee: {
      '@type': 'Person',
      name: 'Agent Name',
      jobTitle: 'Realtor',
    },
    department: {
      '@type': 'Organization',
      name: 'Your Team',
    },
  };
}
