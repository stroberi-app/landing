'use client'

import { CreditCard, FileSpreadsheet, FolderOpen, DollarSign, ChartLineIcon } from "lucide-react"
import logo from '../app/icon_216.png'
import image1 from '../app/ss/image1-min.png'
import image2 from '../app/ss/image2-min.png'
import image3 from '../app/ss/image3-min.png'
import googleImage from '../app/images/google.svg'
import iosImage from '../app/images/apple.svg'
import Image from "next/image"

const iconStyle = "h-8 w-8 text-brand"
export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">Stroberi</h1>
        <Image src={logo} alt="Stroberi Logo" className="h-12 w-12 rounded" />
      </header>

      <main className="container mx-auto px-4">
        <section className="md:py-20 text-center fade-in-top">
          <h2 className="text-4xl font-bold mb-4">Effortless <span style={{color: '#E54B4B'}}>Expense</span> Tracking</h2>
          <p className="text-xl mb-8">Log your expenses <span style={{color: "hsl(151, 50.0%, 53.2%)"}}>securely</span>. No data ever leaves your device.</p>
          <div className="relative flex flex-col md:flex-row items-center justify-center">
            <Image
              src={image2}
              alt="App Screenshot"
              width={280}
              height={550}
              className="rounded-3xl shadow-2xl mb-4 md:mb-0 md:mr-4 opacity-75 md:order-first"
            />
            <Image
              src={image1}
              alt="App Screenshot"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl mb-4 md:mb-0 md:mr-4 md:order-2 order-first"
            />
            <Image
              src={image3}
              alt="App Screenshot"
              width={280}
              height={550}
              className="rounded-3xl shadow-2xl opacity-75 md:order-3 order-2"
            />
          </div>
        </section>

        <section className="py-10 text-center">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center relative">
            <div className="relative">
              <Image src={iosImage} alt="download on apple" width={220} className="mb-4 md:mb-0 grayscale opacity-75"/>
              <div
                className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Coming
                Soon
              </div>
            </div>
            <div className="relative">
              <Image src={googleImage} alt="download on google" width={220} className="grayscale opacity-95"/>
              <div
                className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Coming
                Soon
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <FeatureCard icon={<CreditCard className={iconStyle}/>} title="Track daily expenses"
                         description="Easily log your daily expenses and keep track of your spending habits. Stroberi allows you to input your expenses quickly and efficiently."/>
            <FeatureCard icon={<FolderOpen className={iconStyle}/>} title="Categorize expenses"
                         description="Organize your expenses by categorizing them. This feature helps you understand where your money is going and allows you to make informed financial decisions." />
            <FeatureCard icon={<ChartLineIcon className={iconStyle} />} title="Spend graphs and trends" description="Visualize your spending patterns with graphs and trends. This feature provides insights into your financial habits, helping you identify areas where you can save money." />
            <FeatureCard icon={<DollarSign className={iconStyle} />} title="Multi-currency support" description="Manage expenses in multiple currencies. Stroberi supports various currencies, making it ideal for travelers and those with international financial activities." />
            <FeatureCard icon={<FileSpreadsheet className={iconStyle} />} title="Export expenses" description="Export your expense data in CSV format for easy analysis and record-keeping. This feature allows you to back up your data and use it in other applications." />
            <FeatureCard icon={<FileSpreadsheet className={iconStyle} />} title="Import expenses" description="Import data from other sources in CSV format. This feature makes it simple to switch to Stroberi and consolidate your financial information." />          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 Stroberi App. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="/terms-and-conditions" className="text-gray-500 hover:text-gray-300 mx-2">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-start space-y-4">
      <div className="flex items-center space-x-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  )
}