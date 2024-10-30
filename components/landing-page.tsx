'use client'

import { CreditCard, FileSpreadsheet, FolderOpen, DollarSign, Fingerprint, ChartLineIcon } from "lucide-react"
import logo from '../app/icon_216.png'
import image1 from '../app/ss/image1.png'
import image2 from '../app/ss/image2.png'
import image3 from '../app/ss/image3.png'
import googleImage from '../app/images/google_play.png'
import iosImage from '../app/images/ios.svg'
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
        <section className="py-20 text-center fade-in-top">
          <h2 className="text-4xl font-bold mb-4">Effortless <span style={{color: '#E54B4B'}}>Expense</span> Tracking</h2>
          <p className="text-xl mb-8">Log your expenses <span style={{color: "hsl(151, 50.0%, 53.2%)"}}>securely</span>. No data ever leaves your device.</p>
          <div className="relative h-[600px] mb-20">
            <Image
              src={image1}
              alt="App Screenshot"
              width={300}
              height={600}
              className="absolute left-1/2 transform -translate-x-1/2  rounded-3xl shadow-2xl"
            />
            <Image
              src={image2}
              alt="App Screenshot"
              width={280}
              height={550}
              className="absolute left-1/4 transform -translate-x-1/2 -translate-y-[-50px] rounded-3xl shadow-2xl opacity-50"
            />
            <Image
              src={image3}
              alt="App Screenshot"
              width={280}
              height={550}
              className="absolute left-3/4 transform -translate-x-1/2 -translate-y-[-50px] rounded-3xl shadow-2xl opacity-50"
            />
          </div>
        </section>

        <section className="py-20 text-center">
        <div className="flex flex-row gap-4 flex-grow-0 items-center justify-center">
        <div className="flex flex-row gap-4">
          <Image src={iosImage} alt="download on apple" width={200}/>
          <Image src={googleImage} alt="download on google" width={220} />
        </div>
        </div>
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<CreditCard className={iconStyle} />} title="Track daily expenses" />
            <FeatureCard icon={<FolderOpen className={iconStyle} />} title="Categorize expenses" />
            <FeatureCard icon={<FileSpreadsheet className={iconStyle} />} title="Export and import expenses" />
            <FeatureCard icon={<ChartLineIcon className={iconStyle} />} title="Spend graphs and trends" />
            <FeatureCard icon={<DollarSign className={iconStyle} />} title="Multy currency support" />
            <FeatureCard icon={<Fingerprint className={iconStyle} />} title="Face ID security" />
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 Stroberi App. All rights reserved.</p>
      </footer>
    </div>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
}
function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg flex items-start space-x-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}