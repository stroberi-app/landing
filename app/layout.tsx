import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stroberi - Privacy-First Expense Tracking App | Open Source",
  description:
    "Track your expenses with complete privacy. Stroberi is an open-source mobile app that keeps all your financial data on your device. Available for iOS and Android with multi-currency support, expense categorization, and CSV export.",
  keywords: [
    "expense tracking",
    "personal finance",
    "privacy-first",
    "open-source",
    "React Native",
    "local data storage",
    "expense management",
    "budget tracking",
    "financial app",
    "iOS",
    "Android",
    "multi-currency",
    "CSV export",
    "expense categories",
    "spending tracker"
  ],
  authors: [
    {
      name: "Danilo Gacevic",
      url: "https://danilothedev.com",
    },
  ],
  creator: "Danilo Gacevic",
  publisher: "Stroberi App",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stroberi.app",
    title: "Stroberi - Privacy-First Expense Tracking App",
    description: "Track your expenses with complete privacy. Open-source mobile app that keeps all your data on your device.",
    siteName: "Stroberi",
    images: [
      {
        url: "/icon_216.png",
        width: 216,
        height: 216,
        alt: "Stroberi App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stroberi - Privacy-First Expense Tracking",
    description: "Track expenses privately with our open-source mobile app. All data stays on your device.",
    images: ["/icon_216.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#e54b4b",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Stroberi",
              "description": "Privacy-first expense tracking mobile application",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Danilo Gacevic",
                "url": "https://danilothedev.com"
              },
              "downloadUrl": [
                "https://apps.apple.com/app/stroberi/id6740559308",
                "https://play.google.com/store/apps/details?id=com.stroberi"
              ],
              "screenshot": [
                "/ss/image1-min.png",
                "/ss/image2-min.png",
                "/ss/image3-min.png"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
