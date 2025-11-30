'use client'

import { useState } from "react"
import { ChevronDown, Github, Mail, Shield, Zap, Lock, TrendingUp, FileText, Smartphone, ArrowRight, PiggyBank, Bell, BarChart3 } from "lucide-react"
import logo from '../app/icon_216.png'
import image1 from '../app/ss/image1-min.png'
import budgetAlertImage from '../app/ss/budget-alert-on-home.png'
import createFlowImage from '../app/ss/create-flow.png'
import homeScreenImage from '../app/ss/home-screenshot.png'
import googleImage from '../app/images/google.svg'
import iosImage from '../app/images/apple.svg'
import Image from "next/image"

export function LandingPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isNavScrolled, setIsNavScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsNavScrolled(window.scrollY > 20)
    }, { passive: true })
  }

  const faqs = [
    {
      question: "Is my financial data truly private?",
      answer: "Absolutely. Stroberi stores everything locally on your device. We have zero servers, zero data collection, and zero access to your information. Your finances are yours alone."
    },
    {
      question: "How does multi-currency support work?",
      answer: "Log transactions in any of 36+ currencies. Stroberi automatically converts everything to your base currency using real-time exchange rates, so you always know exactly where you stand."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! Export your transactions to CSV or JSON anytime. Your data is never locked in. Import from other apps using our CSV template for easy migration."
    },
    {
      question: "Is it really free? What's the catch?",
      answer: "No catch. Stroberi is 100% free and open-source. No ads, no premium tiers, no subscriptions. We built this because we needed it ourselves."
    },
    {
      question: "What about recurring transactions?",
      answer: "Set up recurring income or expenses (rent, subscriptions, salary) and Stroberi automatically creates them on schedule. Never forget a regular payment again."
    }
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">
      <div className="noise-overlay" />
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isNavScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image src={logo} alt="Stroberi" className="h-10 w-10 rounded-xl transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 rounded-xl bg-[#e54b4b]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight">Stroberi</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/tools" className="nav-link text-sm font-medium">Tools</a>
            <a href="#faq" className="nav-link text-sm font-medium">FAQ</a>
            <a 
              href="https://github.com/stroberi-app/stroberi" 
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-white/10 transition-all duration-200"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
          <div className="absolute inset-0 hero-gradient-bg" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e54b4b]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 privacy-badge mb-8 animate-fade-in-up">
                  <Shield className="h-4 w-4" />
                  <span>100% Local • Zero Data Collection</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
                  Your Money.
                  <br />
                  <span className="gradient-brand">Your Device.</span>
                  <br />
                  <span className="text-neutral-400">Your Privacy.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-neutral-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                  The expense tracker that keeps your financial data exactly where it belongs — 
                  <span className="text-white font-medium"> on your device</span>. 
                  No accounts. No cloud. No compromise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12 animate-fade-in-up delay-300">
                  <a 
                    href="https://apps.apple.com/app/stroberi/id6740559308"
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image src={iosImage} alt="Download on App Store" width={180} className="h-14 w-auto" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.stroberi"
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image src={googleImage} alt="Get it on Google Play" width={180} className="h-14 w-auto" />
                  </a>
                </div>
                
                <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-neutral-500 animate-fade-in delay-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>No Ads</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end animate-scale-in delay-300">
                <div className="relative">
                  <div className="absolute -inset-20 bg-gradient-to-b from-[#e54b4b]/20 via-transparent to-transparent rounded-full blur-3xl" />
                  
                  <div className="relative animate-float-slow">
                    <Image
                      src={image1}
                      alt="Stroberi App"
                      width={320}
                      height={640}
                      className="w-[280px] sm:w-[320px] rounded-[3rem]"
                      priority
                    />
                  </div>
                  
                  <div className="absolute -left-16 top-1/4 animate-float-medium delay-200">
                    <div className="glass-strong rounded-2xl p-4 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#e54b4b]/20 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-[#e54b4b]" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400">This Month</p>
                          <p className="text-lg font-bold">-$2,847</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -right-12 bottom-1/3 animate-float-medium delay-400">
                    <div className="glass-strong rounded-2xl p-4 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-lg">🍔</span>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400">Food</p>
                          <p className="text-lg font-bold text-[#e54b4b]">-$45.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700 hidden lg:block">
              <div className="scroll-indicator" />
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="brand-badge mb-6">Optional Feature</span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-6 mb-6">
                  Set budgets.
                  <br />
                  <span className="gradient-mint">Stay on track.</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Take control with flexible budgets. Set weekly, monthly, or yearly limits — 
                  for all spending or specific categories. Get alerts before you overspend.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <PiggyBank className="h-5 w-5 text-emerald-400" />, title: "Flexible periods", desc: "Weekly, monthly, or yearly budgets" },
                    { icon: <Bell className="h-5 w-5 text-amber-400" />, title: "Smart alerts", desc: "Notifications at your custom threshold" },
                    { icon: <BarChart3 className="h-5 w-5 text-violet-400" />, title: "Visual progress", desc: "See exactly where you stand" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-neutral-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="absolute -inset-10 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="phone-mockup w-[280px]">
                    <div className="phone-screen">
                      <Image
                        src={budgetAlertImage}
                        alt="Budget Alert on Home Screen"
                        width={280}
                        height={560}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="h-6 w-6" />,
                  title: "Private by Design",
                  description: "Your data never leaves your device. No servers, no cloud sync, no data mining. True financial privacy.",
                  color: "from-emerald-500/20 to-emerald-500/5",
                  iconBg: "bg-emerald-500/10",
                  iconColor: "text-emerald-400"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Instant & Offline",
                  description: "Works anywhere, anytime. No internet required. Add expenses on a plane, in a subway, wherever life takes you.",
                  color: "from-amber-500/20 to-amber-500/5",
                  iconBg: "bg-amber-500/10",
                  iconColor: "text-amber-400"
                },
                {
                  icon: <Github className="h-6 w-6" />,
                  title: "Open Source",
                  description: "Fully transparent code you can audit. No hidden trackers, no secret data collection. Trust, but verify.",
                  color: "from-violet-500/20 to-violet-500/5",
                  iconBg: "bg-violet-500/10",
                  iconColor: "text-violet-400"
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`bento-card p-8 bg-gradient-to-br ${item.color}`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="py-24 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative flex justify-center">
                  <div className="absolute -inset-10 bg-gradient-to-br from-[#e54b4b]/10 via-transparent to-transparent rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <div className="phone-mockup w-[280px]">
                      <div className="phone-screen">
                        <Image
                          src={homeScreenImage}
                          alt="Home Screen Overview"
                          width={280}
                          height={560}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="privacy-badge mb-6">Built Different</span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-6 mb-6">
                  Why another
                  <br />
                  expense tracker?
                </h2>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Most finance apps want your data. They sync to clouds, require accounts, 
                  and monetize your spending habits. We think that&apos;s backwards.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "No account required", desc: "Open the app and start tracking. That's it." },
                    { title: "Works offline", desc: "Full functionality without internet." },
                    { title: "No subscription", desc: "Free forever. Not freemium. Actually free." },
                    { title: "Open source", desc: "Every line of code is public and auditable." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-neutral-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 relative">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Questions?
              </h2>
              <p className="text-lg text-neutral-400">
                Everything you need to know about Stroberi
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bento-card overflow-hidden"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold pr-4 group-hover:text-[#e54b4b] transition-colors">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="relative rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e54b4b]/20 via-[#e54b4b]/5 to-transparent" />
              <div className="absolute inset-0 dot-pattern opacity-20" />
              
              <div className="relative glass-strong p-12 sm:p-16 lg:p-20 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Take control of your
                  <br />
                  <span className="gradient-brand">finances today</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                  Join thousands who track their spending privately. 
                  Download now and experience expense tracking the way it should be.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                  <a 
                    href="https://apps.apple.com/app/stroberi/id6740559308"
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image src={iosImage} alt="Download on App Store" width={180} className="h-14 w-auto" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.stroberi"
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image src={googleImage} alt="Get it on Google Play" width={180} className="h-14 w-auto" />
                  </a>
                </div>
                
                <a 
                  href="https://github.com/stroberi-app/stroberi"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>View source on GitHub</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative py-16 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="Stroberi" className="h-8 w-8 rounded-lg" />
                <span className="text-lg font-bold">Stroberi</span>
              </a>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                Privacy-first expense tracking. All your data stays on your device.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/stroberi-app/stroberi" 
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contact@stroberi.app" 
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="/tools" className="hover:text-white transition-colors">Tools</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Open Source</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="https://github.com/stroberi-app/stroberi" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://github.com/stroberi-app/stroberi/issues" className="hover:text-white transition-colors">Report Bug</a></li>
                <li><a href="https://github.com/stroberi-app/stroberi/pulls" className="hover:text-white transition-colors">Contribute</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600 text-sm">
              © 2024 Stroberi. Made with 🍓 for privacy.
            </p>
            <p className="text-neutral-600 text-sm">
              Designed in Belgrade • Open source worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
