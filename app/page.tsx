import { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

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
    "spending tracker",
    "free expense tracker",
    "offline expense app",
    "privacy-focused finance",
  ],
  alternates: {
    canonical: "https://stroberi.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stroberi.app",
    title: "Stroberi - Privacy-First Expense Tracking App",
    description:
      "Track your expenses with complete privacy. Open-source mobile app that keeps all your data on your device.",
    siteName: "Stroberi",
    images: [
      {
        url: "https://stroberi.app/icon_216.png",
        width: 216,
        height: 216,
        alt: "Stroberi App Logo",
      },
      {
        url: "https://stroberi.app/ss/home-screenshot.png",
        width: 320,
        height: 640,
        alt: "Stroberi Expense Tracking App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stroberi - Privacy-First Expense Tracking",
    description:
      "Track expenses privately with our open-source mobile app. All data stays on your device.",
    images: ["https://stroberi.app/icon_216.png"],
    creator: "@stroberi_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Finance",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Stroberi",
            description:
              "Privacy-first expense tracking mobile application. Track your expenses with complete privacy - all data stays on your device.",
            url: "https://stroberi.app",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://stroberi.app/tools?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Stroberi",
            applicationCategory: "FinanceApplication",
            operatingSystem: ["iOS", "Android"],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "100",
            },
            description:
              "Privacy-first expense tracking app. Track your spending with complete privacy - all data stays on your device. No accounts, no cloud sync, no data collection.",
            featureList: [
              "100% Local Storage",
              "Multi-Currency Support",
              "Budget Tracking",
              "Expense Categorization",
              "CSV Export/Import",
              "Recurring Transactions",
              "Offline Functionality",
              "Open Source",
            ],
            screenshot: [
              "https://stroberi.app/ss/home-screenshot.png",
              "https://stroberi.app/ss/budget-alert-on-home.png",
              "https://stroberi.app/ss/create-flow.png",
            ],
            downloadUrl: [
              "https://apps.apple.com/app/stroberi/id6740559308",
              "https://play.google.com/store/apps/details?id=com.stroberi",
            ],
            author: {
              "@type": "Person",
              name: "Danilo Gacevic",
              url: "https://danilothedev.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is my financial data truly private?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Stroberi stores everything locally on your device. We have zero servers, zero data collection, and zero access to your information. Your finances are yours alone.",
                },
              },
              {
                "@type": "Question",
                name: "How does multi-currency support work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Log transactions in any of 36+ currencies. Stroberi automatically converts everything to your base currency using real-time exchange rates, so you always know exactly where you stand.",
                },
              },
              {
                "@type": "Question",
                name: "Can I export my data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Export your transactions to CSV or JSON anytime. Your data is never locked in. Import from other apps using our CSV template for easy migration.",
                },
              },
              {
                "@type": "Question",
                name: "Is it really free? What's the catch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No catch. Stroberi is 100% free and open-source. No ads, no premium tiers, no subscriptions. We built this because we needed it ourselves.",
                },
              },
              {
                "@type": "Question",
                name: "What about recurring transactions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Set up recurring income or expenses (rent, subscriptions, salary) and Stroberi automatically creates them on schedule. Never forget a regular payment again.",
                },
              },
            ],
          }),
        }}
      />
      <LandingPage />
    </>
  );
}
