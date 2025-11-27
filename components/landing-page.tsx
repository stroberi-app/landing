'use client'

import { useState, useEffect } from "react"
import { CreditCard, FileSpreadsheet, FolderOpen, DollarSign, ChartLineIcon, Shield, ChevronDown, Github, Mail, Zap, Lock } from "lucide-react"
import logo from '../app/icon_216.png'
import image1 from '../app/ss/image1-min.png'
import image2 from '../app/ss/image2-min.png'
import image3 from '../app/ss/image3-min.png'
import googleImage from '../app/images/google.svg'
import iosImage from '../app/images/apple.svg'
import Image from "next/image"

const iconStyle = "h-6 w-6 text-white"

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const faqs = [
    {
      question: "Is my data really private?",
      answer: "Absolutely! All your expense data is stored locally on your device. We never collect, store, or transmit your financial information to our servers."
    },
    {
      question: "Can I sync data across devices?",
      answer: "Currently, data is stored locally on each device. However, you can export your data as CSV and import it on other devices to transfer your expenses."
    },
    {
      question: "Which currencies are supported?",
      answer: "Stroberi supports multiple currencies including USD, EUR, GBP, CAD, AUD, JPY, and many more. You can set your default currency in the app settings."
    },
    {
      question: "Is the app really free?",
      answer: "Yes, Stroberi is completely free and open-source. There are no ads, no premium features, and no subscription fees."
    },
    {
      question: "Can I contribute to the project?",
      answer: "Absolutely! Stroberi is open-source and we welcome contributions. Visit our GitHub repository to see how you can help improve the app."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial pointer-events-none" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Stroberi Logo" className="h-10 w-10 rounded-lg float" />
            <h1 className="text-2xl font-bold">Stroberi</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="/tools" className="text-gray-300 hover:text-white transition-colors">Tools</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="https://github.com/stroberi-app/stroberi" className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg hover-glow transition-all">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="fade-in-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Track Expenses
                <br />
                <span className="gradient-brand">Privately</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-1">
                Your financial data belongs to <span className="text-green-400 font-semibold">you</span>. 
                Stroberi keeps everything on your device - no cloud, no tracking, no compromises.
              </p>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 fade-in-up stagger-2">
              <a 
                href="https://apps.apple.com/app/stroberi/id6740559308"
                className="group hover-lift transition-all duration-300"
              >
                <Image src={iosImage} alt="Download on App Store" width={200} className="transition-transform group-hover:scale-102" />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.stroberi"
                className="group hover-lift transition-all duration-300"
              >
                <Image src={googleImage} alt="Get it on Google Play" width={200} className="transition-transform group-hover:scale-102" />
              </a>
            </div>

            {/* App Screenshots */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 scale-in stagger-3">
              <div className="relative hover-lift">
                <Image
                  src={image2}
                  alt="Expense List View"
                  width={250}
                  height={500}
                  className="rounded-3xl shadow-2xl opacity-90 md:transform md:-rotate-3"
                />
              </div>
              <div className="relative hover-lift glow-effect">
                <Image
                  src={image1}
                  alt="Add Expense View"
                  width={280}
                  height={560}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="relative hover-lift">
                <Image
                  src={image3}
                  alt="Statistics View"
                  width={250}
                  height={500}
                  className="rounded-3xl shadow-2xl opacity-90 md:transform md:rotate-3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-brand">Stroberi</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We built Stroberi with privacy and simplicity at its core. Here&apos;s what makes us different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard 
                icon={<Shield className="h-8 w-8 text-green-400" />}
                title="100% Private"
                description="Your data never leaves your device. No cloud sync, no tracking, no data collection."
                delay="stagger-1"
              />
              <BenefitCard 
                icon={<Zap className="h-8 w-8 text-yellow-400" />}
                title="Lightning Fast"
                description="Native performance with instant loading and smooth animations."
                delay="stagger-2"
              />
              <BenefitCard 
                icon={<Github className="h-8 w-8 text-purple-400" />}
                title="Open Source"
                description="Fully transparent code that you can inspect, modify, and contribute to."
                delay="stagger-3"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to track and manage your expenses effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<CreditCard className={iconStyle}/>} 
                title="Quick Expense Entry"
                description="Log expenses in seconds with our intuitive interface. Add amount, category, and notes effortlessly."
                delay="stagger-1"
              />
              <FeatureCard 
                icon={<FolderOpen className={iconStyle}/>} 
                title="Smart Categories"
                description="Organize expenses with customizable categories. Track where your money goes with detailed breakdowns."
                delay="stagger-2"
              />
              <FeatureCard 
                icon={<ChartLineIcon className={iconStyle}/>} 
                title="Visual Analytics"
                description="Beautiful charts and graphs show your spending patterns and help identify saving opportunities."
                delay="stagger-3"
              />
              <FeatureCard 
                icon={<DollarSign className={iconStyle}/>} 
                title="Multi-Currency"
                description="Support for 30+ currencies with automatic conversion. Perfect for travelers and international users."
                delay="stagger-4"
              />
              <FeatureCard 
                icon={<FileSpreadsheet className={iconStyle}/>} 
                title="Data Export"
                description="Export your data in CSV format for backup, analysis, or migration to other tools."
                delay="stagger-5"
              />
              <FeatureCard 
                icon={<Lock className={iconStyle}/>} 
                title="Secure & Private"
                description="All data encrypted and stored locally. Your financial information never touches our servers."
                delay="stagger-6"
              />
            </div>
          </div>
        </section>


        {/* <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Trusted by Users Worldwide</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-400" />
                  <span className="text-2xl font-bold">10,000+</span>
                  <span className="text-gray-300">Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span className="text-2xl font-bold">4.8</span>
                  <span className="text-gray-300">App Store Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-6 w-6 text-purple-400" />
                  <span className="text-2xl font-bold">500+</span>
                  <span className="text-gray-300">GitHub Stars</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-up stagger-2">
              <TestimonialCard 
                text="Finally, an expense tracker that respects my privacy! The interface is clean and intuitive."
                author="Sarah M."
                role="Freelance Designer"
              />
              <TestimonialCard 
                text="Love that it's open source. I can see exactly what the app does with my data - which is nothing!"
                author="Alex T."
                role="Software Developer"
              />
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about Stroberi
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  delay={`stagger-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-effect rounded-3xl p-12 glow-effect fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Take Control?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                 Join thousands who&apos;ve switched to private, secure expense tracking. 
                Download Stroberi today and experience the difference.
              </p>
                             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                 <a 
                   href="https://apps.apple.com/app/stroberi/id6740559308"
                   className="group hover-lift transition-all duration-300"
                 >
                   <Image src={iosImage} alt="Download on App Store" width={180} className="transition-transform group-hover:scale-102" />
                 </a>
                 <a 
                   href="https://play.google.com/store/apps/details?id=com.stroberi"
                   className="group hover-lift transition-all duration-300"
                 >
                   <Image src={googleImage} alt="Get it on Google Play" width={180} className="transition-transform group-hover:scale-102" />
                 </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="Stroberi Logo" className="h-8 w-8 rounded" />
                <h3 className="text-xl font-bold gradient-text">Stroberi</h3>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Privacy-first expense tracking that keeps your financial data where it belongs - on your device.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/stroberi-app/stroberi" className="hover-glow p-2 rounded-lg glass-effect transition-all">
                  <Github className="h-5 w-5" />
                </a>
                <a href="mailto:contact@stroberi.app" className="hover-glow p-2 rounded-lg glass-effect transition-all">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/tools" className="hover:text-white transition-colors">Tools</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://github.com/stroberi-app/stroberi" className="hover:text-white transition-colors">Open Source</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Stroberi App. Made with ❤️ for privacy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  delay?: string
}

function FeatureCard({ icon, title, description, delay = "" }: FeatureCardProps) {
  return (
    <div className={`glass-effect p-6 rounded-2xl hover-lift transition-all duration-300 fade-in-up ${delay}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-white/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}

function BenefitCard({ icon, title, description, delay = "" }: FeatureCardProps) {
  return (
    <div className={`text-center p-6 fade-in-up ${delay}`}>
      <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-6 hover-lift">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}



type FAQItemProps = {
  question: string
  answer: string
  isActive: boolean
  onClick: () => void
  delay?: string
}

function FAQItem({ question, answer, isActive, onClick, delay = "" }: FAQItemProps) {
  return (
    <div className={`glass-effect rounded-2xl hover-lift transition-all fade-in-up ${delay}`}>
      <button
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold pr-4">{question}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      {isActive && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}