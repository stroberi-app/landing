import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Financial Calculators & Tools | Stroberi",
  description:
    "Free financial calculators and tools to help you make smarter money decisions. Budget planner, rent vs buy calculator, investment growth calculator, loan calculator, savings goal planner, and net worth tracker.",
  keywords: [
    "financial calculator",
    "budget calculator",
    "rent vs buy calculator",
    "investment calculator",
    "compound interest calculator",
    "loan calculator",
    "savings calculator",
    "net worth calculator",
    "financial planning tools",
    "budget planner",
    "mortgage calculator",
    "retirement calculator",
    "free financial tools",
    "personal finance calculator",
    "expense calculator",
  ],
  alternates: {
    canonical: "https://stroberi.app/tools",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stroberi.app/tools",
    title: "Free Financial Calculators & Tools | Stroberi",
    description:
      "Free financial calculators and tools to help you make smarter money decisions. Budget planner, rent vs buy calculator, investment growth calculator, and more.",
    siteName: "Stroberi",
    images: [
      {
        url: "https://stroberi.app/icon_216.png",
        width: 216,
        height: 216,
        alt: "Stroberi Financial Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Financial Calculators & Tools | Stroberi",
    description:
      "Free financial calculators and tools to help you make smarter money decisions.",
    images: ["https://stroberi.app/icon_216.png"],
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
  category: "Finance",
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Financial Calculators & Tools",
            description:
              "Free financial calculators and tools to help you make smarter money decisions. Includes budget planner, rent vs buy calculator, investment growth calculator, loan calculator, savings goal planner, and net worth tracker.",
            url: "https://stroberi.app/tools",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SoftwareApplication",
                  name: "Budget Planner",
                  description:
                    "Plan and optimize your monthly spending with our budget calculator",
                  applicationCategory: "FinanceApplication",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Rent vs Buy Calculator",
                  description:
                    "Compare the long-term costs of renting versus buying a home",
                  applicationCategory: "FinanceApplication",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Investment Growth Calculator",
                  description:
                    "See how your investments grow with the power of compound interest",
                  applicationCategory: "FinanceApplication",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Loan Calculator",
                  description:
                    "Calculate your monthly loan payments and see your amortization schedule",
                  applicationCategory: "FinanceApplication",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Savings Goal Calculator",
                  description:
                    "Plan how to reach your financial goals with smart saving strategies",
                  applicationCategory: "FinanceApplication",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Net Worth Calculator",
                  description:
                    "Get a complete picture of your financial health by calculating your net worth",
                  applicationCategory: "FinanceApplication",
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Stroberi Financial Tools",
            description:
              "Free online financial calculators and planning tools. Calculate budgets, compare rent vs buy, plan investments, calculate loans, set savings goals, and track net worth.",
            url: "https://stroberi.app/tools",
            applicationCategory: "FinanceApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "Budget Planner",
              "Rent vs Buy Calculator",
              "Investment Growth Calculator",
              "Loan Calculator",
              "Savings Goal Calculator",
              "Net Worth Calculator",
            ],
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            operatingSystem: "Any",
          }),
        }}
      />
      {children}
    </>
  );
}

