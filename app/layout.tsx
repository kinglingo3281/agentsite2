import type { Metadata } from 'next';
import './globals.css';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...createMetadata({
    title: 'Agent Name - Rehoboth Beach Real Estate',
    description: 'Expert real estate services in Rehoboth Beach, Dewey Beach, Lewes & Sussex County Delaware. Local guidance, fast responses, zero pressure.',
    path: '/',
  }),
  icons: {
    icon: '/equal-housing.svg',
    apple: '/equal-housing.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
