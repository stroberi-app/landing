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
  title: "Stroberi - Open-source Personal Expense Tracking App",
  description: "Open-source personal expense tracking app built with React Native. Manage your finances by tracking and categorizing expenses. Privacy first, data stored locally.",
  keywords: "expense tracking, personal finance, open-source, React Native, privacy, local data storage, manage expenses, categorize expenses, export data, import data, CSV format, default currency",
  authors: [{
    name: "Danilo Gacevic",
    url: "https://danilothedev.com",
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {children}
      </body>
    </html>
  );
}
