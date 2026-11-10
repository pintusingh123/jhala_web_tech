import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientLayout from '../components/ClientLayout';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jhalawebtech.vercel.app'),
  title: {
    default: 'Web & Mobile App Development Company in Rajasthan | JhalaWebTech',
    template: '%s | JhalaWebTech',
  },
  description:
    'Custom websites starting from ₹15k and mobile apps starting from ₹30k. Fast development, transparent fixed pricing, weekly live demos, and launch in weeks.',
  keywords: [
    'website development company in Rajasthan',
    'mobile app development India',
    'React Native app developers',
    'e-commerce website development',
    'Node.js',
    'Django',
    'CRM development',
  ],
  authors: [{ name: 'JhalaWebTech' }],
  creator: 'JhalaWebTech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jhalawebtech.vercel.app',
    siteName: 'JhalaWebTech',
    title: 'Web & Mobile App Development Company in Rajasthan | JhalaWebTech',
    description:
      'Custom websites and React Native mobile apps that turn visitors into customers. Clear pricing, weekly demos, launch in weeks.',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'JhalaWebTech - Web & Mobile App Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Mobile App Development Company in Rajasthan | JhalaWebTech',
    description:
      'Custom websites and React Native mobile apps that turn visitors into customers. Clear pricing, weekly demos, launch in weeks.',
    images: ['/images/logo.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JhalaWebTech',
    legalName: 'JhalaWebTech Software Agency',
    url: 'https://jhalawebtech.vercel.app',
    logo: 'https://jhalawebtech.vercel.app/images/logo.svg',
    image: 'https://jhalawebtech.vercel.app/images/logo.svg',
    description:
      'Custom website and React Native mobile app development agency based in Rajasthan, India. Websites from ₹15k, mobile apps from ₹30k with transparent fixed pricing and weekly demos.',
    telephone: '+91-8441992003',
    email: 'info@jhalawebtech.com',
    priceRange: '₹₹ - ₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.9124',
      longitude: '75.7873',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Pintu Jhala',
        jobTitle: 'Principal Software Architect',
      },
      {
        '@type': 'Person',
        name: 'Abhay Prajapati',
        jobTitle: 'Lead Full-Stack Engineer',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '18',
    },
  };

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Zero-Flash Theme Initialization Script (Default: Light Mode) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('jhala-color-theme')||localStorage.getItem('jwt-theme');if(saved==='dark'){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />

        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body className="min-h-screen bg-page text-primary antialiased flex flex-col">
        <ClientLayout>
          {/* Header & Sticky Nav */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1 w-full outline-none pb-16 lg:pb-0">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
