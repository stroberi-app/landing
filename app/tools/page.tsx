'use client'

import { useState } from "react"
import { 
  TrendingUp, 
  PiggyBank, 
  Home, 
  Percent, 
  Calculator,
  Target,
  Wallet,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BarChart3,
  Banknote,
  Clock,
  Building2
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts"
import Link from "next/link"

type ToolType = 'budget' | 'rent-vs-buy' | 'compound' | 'loan' | 'savings' | 'net-worth'

const tools: { id: ToolType; name: string; description: string; icon: React.ReactNode; color: string; gradient: string }[] = [
  { 
    id: 'budget', 
    name: 'Budget Planner', 
    description: 'Plan and optimize your monthly spending',
    icon: <PiggyBank className="h-5 w-5" />,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600'
  },
  { 
    id: 'rent-vs-buy', 
    name: 'Rent vs Buy', 
    description: 'Should you rent or buy your next home?',
    icon: <Home className="h-5 w-5" />,
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600'
  },
  { 
    id: 'compound', 
    name: 'Investment Growth', 
    description: 'See your money grow with compound interest',
    icon: <TrendingUp className="h-5 w-5" />,
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600'
  },
  { 
    id: 'loan', 
    name: 'Loan Calculator', 
    description: 'Calculate your monthly loan payments',
    icon: <Banknote className="h-5 w-5" />,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600'
  },
  { 
    id: 'savings', 
    name: 'Savings Goal', 
    description: 'Plan how to reach your financial goals',
    icon: <Target className="h-5 w-5" />,
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600'
  },
  { 
    id: 'net-worth', 
    name: 'Net Worth', 
    description: 'Track your total financial health',
    icon: <Wallet className="h-5 w-5" />,
    color: 'cyan',
    gradient: 'from-cyan-500 to-sky-600'
  },
]

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<ToolType>('budget')
  
  const [budget, setBudget] = useState({
    income: '',
    housing: '',
    transportation: '',
    food: '',
    utilities: '',
    insurance: '',
    healthcare: '',
    entertainment: '',
    savings: '',
    debt: '',
    other: ''
  })

  const [rentVsBuy, setRentVsBuy] = useState({
    homePrice: '',
    downPayment: '20',
    interestRate: '6.5',
    loanTerm: '30',
    monthlyRent: '',
    propertyTax: '1.2',
    hoaFees: '0',
    homeInsurance: '800',
    maintenance: '1',
    appreciation: '3',
    rentIncrease: '2',
    timeHorizon: '7'
  })

  const [compound, setCompound] = useState({
    principal: '',
    monthlyContribution: '',
    annualRate: '7',
    years: '10',
    compoundingFrequency: '12'
  })

  const [loan, setLoan] = useState({
    amount: '',
    interestRate: '6',
    termYears: '5',
    extraPayment: '0'
  })

  const [savingsGoal, setSavingsGoal] = useState({
    targetAmount: '',
    currentSavings: '0',
    monthlyContribution: '',
    annualReturn: '5',
    deadline: '5'
  })

  const [netWorth, setNetWorth] = useState({
    cash: '',
    investments: '',
    retirement: '',
    realEstate: '',
    vehicles: '',
    otherAssets: '',
    mortgage: '',
    studentLoans: '',
    carLoans: '',
    creditCards: '',
    otherDebts: ''
  })

  const calculateBudget = () => {
    const income = parseFloat(budget.income) || 0
    const expenses = {
      housing: parseFloat(budget.housing) || 0,
      transportation: parseFloat(budget.transportation) || 0,
      food: parseFloat(budget.food) || 0,
      utilities: parseFloat(budget.utilities) || 0,
      insurance: parseFloat(budget.insurance) || 0,
      healthcare: parseFloat(budget.healthcare) || 0,
      entertainment: parseFloat(budget.entertainment) || 0,
      savings: parseFloat(budget.savings) || 0,
      debt: parseFloat(budget.debt) || 0,
      other: parseFloat(budget.other) || 0,
    }
    
    const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0)
    const remaining = income - totalExpenses
    
    const pieData = Object.entries(expenses)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        value,
        percentage: income > 0 ? ((value / income) * 100).toFixed(1) : '0'
      }))
    
    return { income, totalExpenses, remaining, pieData, percentUsed: income > 0 ? (totalExpenses / income) * 100 : 0 }
  }

  const calculateRentVsBuy = () => {
    const homePrice = parseFloat(rentVsBuy.homePrice) || 0
    const downPaymentPercent = parseFloat(rentVsBuy.downPayment) || 0
    const interestRate = parseFloat(rentVsBuy.interestRate) || 0
    const loanTermYears = parseFloat(rentVsBuy.loanTerm) || 0
    const monthlyRent = parseFloat(rentVsBuy.monthlyRent) || 0
    const propertyTaxRate = parseFloat(rentVsBuy.propertyTax) || 0
    const hoaFees = parseFloat(rentVsBuy.hoaFees) || 0
    const homeInsurance = parseFloat(rentVsBuy.homeInsurance) || 0
    const maintenanceRate = parseFloat(rentVsBuy.maintenance) || 0
    const appreciationRate = parseFloat(rentVsBuy.appreciation) || 0
    const rentIncreaseRate = parseFloat(rentVsBuy.rentIncrease) || 0
    const timeHorizonYears = parseFloat(rentVsBuy.timeHorizon) || 0

    if (homePrice === 0 || monthlyRent === 0 || timeHorizonYears === 0) {
      return {
        monthlyMortgage: 0,
        totalBuyingCost: 0,
        totalRentCost: 0,
        homeValue: 0,
        netWorthDifference: 0,
        recommendation: 'Enter values to see calculation',
        monthlyBuyingCost: 0,
        breakEvenYears: 0,
        chartData: []
      }
    }

    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const totalPayments = loanTermYears * 12

    const monthlyMortgage = monthlyRate > 0 
      ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : loanAmount / totalPayments

    const monthlyPropertyTax = homePrice * (propertyTaxRate / 100) / 12
    const monthlyInsurance = homeInsurance / 12
    const monthlyMaintenance = homePrice * (maintenanceRate / 100) / 12

    const monthlyBuyingCost = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + hoaFees + monthlyMaintenance

    const chartData = []
    let cumulativeRentCost = 0
    let cumulativeBuyingCost = downPayment
    let currentRent = monthlyRent
    let currentHomeValue = homePrice
    let mortgageBalance = loanAmount

    for (let year = 0; year <= timeHorizonYears; year++) {
      if (year > 0) {
        cumulativeRentCost += currentRent * 12
        cumulativeBuyingCost += monthlyBuyingCost * 12
        currentRent *= (1 + rentIncreaseRate / 100)
        currentHomeValue *= (1 + appreciationRate / 100)
        
        for (let month = 0; month < 12; month++) {
          if (mortgageBalance > 0) {
            const interestPayment = mortgageBalance * monthlyRate
            const principalPayment = monthlyMortgage - interestPayment
            mortgageBalance = Math.max(0, mortgageBalance - principalPayment)
          }
        }
      }

      const homeEquity = Math.max(0, currentHomeValue - mortgageBalance)

      chartData.push({
        year,
        rentCost: Math.round(cumulativeRentCost),
        buyingCost: Math.round(cumulativeBuyingCost),
        homeEquity: Math.round(homeEquity),
      })
    }

    let totalRentCost = 0
    let currentRentTotal = monthlyRent
    
    for (let year = 1; year <= timeHorizonYears; year++) {
      totalRentCost += currentRentTotal * 12
      currentRentTotal *= (1 + rentIncreaseRate / 100)
    }

    const totalBuyingCost = downPayment + (monthlyBuyingCost * timeHorizonYears * 12)
    const homeValue = homePrice * Math.pow(1 + appreciationRate / 100, timeHorizonYears)
    
    const paymentsInHorizon = Math.min(timeHorizonYears * 12, totalPayments)
    let finalMortgageBalance = loanAmount
    
    for (let i = 0; i < paymentsInHorizon; i++) {
      const interestPayment = finalMortgageBalance * monthlyRate
      const principalPayment = monthlyMortgage - interestPayment
      finalMortgageBalance = Math.max(0, finalMortgageBalance - principalPayment)
    }

    const netBuyingPosition = homeValue - finalMortgageBalance
    const netWorthDifference = netBuyingPosition - totalRentCost

    let breakEvenYears = 0
    for (let i = 1; i < chartData.length; i++) {
      const currentData = chartData[i]
      if (currentData.buyingCost <= currentData.rentCost) {
        breakEvenYears = currentData.year
        break
      }
    }

    const recommendation = netWorthDifference > 0 ? 'Buying is better' : 'Renting is better'

    return {
      monthlyMortgage,
      totalBuyingCost,
      totalRentCost,
      homeValue,
      netWorthDifference,
      recommendation,
      monthlyBuyingCost,
      breakEvenYears,
      chartData
    }
  }

  const calculateCompound = () => {
    const principal = parseFloat(compound.principal) || 0
    const monthlyContribution = parseFloat(compound.monthlyContribution) || 0
    const annualRate = parseFloat(compound.annualRate) / 100
    const years = parseFloat(compound.years) || 0
    const n = parseFloat(compound.compoundingFrequency) || 12

    if (principal === 0 && monthlyContribution === 0) {
      return { finalAmount: 0, totalContributions: 0, totalInterest: 0, chartData: [] }
    }

    const chartData = []
    let balance = principal
    let totalContributions = principal

    for (let year = 0; year <= years; year++) {
      if (year > 0) {
        for (let month = 0; month < 12; month++) {
          balance = balance * (1 + annualRate / n) + monthlyContribution
          totalContributions += monthlyContribution
        }
      }
      chartData.push({
        year,
        balance: Math.round(balance),
        contributions: Math.round(totalContributions),
        interest: Math.round(balance - totalContributions)
      })
    }

    const finalAmount = balance
    const totalInterest = finalAmount - totalContributions

    return { finalAmount, totalContributions, totalInterest, chartData }
  }

  const calculateLoan = () => {
    const amount = parseFloat(loan.amount) || 0
    const annualRate = parseFloat(loan.interestRate) / 100
    const termYears = parseFloat(loan.termYears) || 0
    const extraPayment = parseFloat(loan.extraPayment) || 0

    if (amount === 0 || termYears === 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, payoffMonths: 0, chartData: [], amortizationData: [] }
    }

    const monthlyRate = annualRate / 12
    const totalPayments = termYears * 12

    const monthlyPayment = monthlyRate > 0
      ? amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : amount / totalPayments

    const chartData = []
    const amortizationData = []
    let balance = amount
    let totalInterestPaid = 0
    let months = 0

    while (balance > 0 && months < totalPayments * 2) {
      const interestPayment = balance * monthlyRate
      const basePayment = Math.min(monthlyPayment + extraPayment, balance + interestPayment)
      const principalPayment = basePayment - interestPayment
      
      totalInterestPaid += interestPayment
      balance = Math.max(0, balance - principalPayment)
      months++

      if (months % 12 === 0 || balance === 0) {
        chartData.push({
          year: Math.ceil(months / 12),
          balance: Math.round(balance),
          interestPaid: Math.round(totalInterestPaid)
        })
      }

      if (months <= 12) {
        amortizationData.push({
          month: months,
          principal: Math.round(principalPayment),
          interest: Math.round(interestPayment),
          balance: Math.round(balance)
        })
      }
    }

    return {
      monthlyPayment,
      totalPayment: (monthlyPayment + extraPayment) * months,
      totalInterest: totalInterestPaid,
      payoffMonths: months,
      chartData,
      amortizationData
    }
  }

  const calculateSavingsGoal = () => {
    const targetAmount = parseFloat(savingsGoal.targetAmount) || 0
    const currentSavings = parseFloat(savingsGoal.currentSavings) || 0
    const monthlyContribution = parseFloat(savingsGoal.monthlyContribution) || 0
    const annualReturn = parseFloat(savingsGoal.annualReturn) / 100
    const deadlineYears = parseFloat(savingsGoal.deadline) || 0

    if (targetAmount === 0) {
      return { 
        willReachGoal: false, 
        projectedAmount: 0, 
        monthsToGoal: 0, 
        requiredMonthly: 0, 
        chartData: [],
        progressPercent: 0
      }
    }

    const monthlyRate = annualReturn / 12
    const chartData = []
    let balance = currentSavings
    let monthsToGoal = 0
    let goalReached = false

    for (let month = 0; month <= deadlineYears * 12; month++) {
      if (month > 0) {
        balance = balance * (1 + monthlyRate) + monthlyContribution
      }
      
      if (!goalReached && balance >= targetAmount) {
        monthsToGoal = month
        goalReached = true
      }

      if (month % 12 === 0) {
        chartData.push({
          year: month / 12,
          balance: Math.round(balance),
          target: targetAmount
        })
      }
    }

    const projectedAmount = balance
    const willReachGoal = projectedAmount >= targetAmount

    const requiredMonthly = monthlyRate > 0
      ? (targetAmount - currentSavings * Math.pow(1 + monthlyRate, deadlineYears * 12)) / 
        ((Math.pow(1 + monthlyRate, deadlineYears * 12) - 1) / monthlyRate)
      : (targetAmount - currentSavings) / (deadlineYears * 12)

    const progressPercent = targetAmount > 0 ? (currentSavings / targetAmount) * 100 : 0

    return { 
      willReachGoal, 
      projectedAmount, 
      monthsToGoal: goalReached ? monthsToGoal : 0, 
      requiredMonthly: Math.max(0, requiredMonthly),
      chartData,
      progressPercent
    }
  }

  const calculateNetWorth = () => {
    const assets = {
      cash: parseFloat(netWorth.cash) || 0,
      investments: parseFloat(netWorth.investments) || 0,
      retirement: parseFloat(netWorth.retirement) || 0,
      realEstate: parseFloat(netWorth.realEstate) || 0,
      vehicles: parseFloat(netWorth.vehicles) || 0,
      other: parseFloat(netWorth.otherAssets) || 0,
    }

    const liabilities = {
      mortgage: parseFloat(netWorth.mortgage) || 0,
      studentLoans: parseFloat(netWorth.studentLoans) || 0,
      carLoans: parseFloat(netWorth.carLoans) || 0,
      creditCards: parseFloat(netWorth.creditCards) || 0,
      other: parseFloat(netWorth.otherDebts) || 0,
    }

    const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0)
    const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0)
    const netWorthValue = totalAssets - totalLiabilities

    const assetData = Object.entries(assets)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => ({
        name: key === 'realEstate' ? 'Real Estate' : key === 'other' ? 'Other' : key.charAt(0).toUpperCase() + key.slice(1),
        value
      }))

    const liabilityData = Object.entries(liabilities)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => ({
        name: key === 'studentLoans' ? 'Student Loans' : key === 'carLoans' ? 'Car Loans' : key === 'creditCards' ? 'Credit Cards' : key === 'other' ? 'Other' : key.charAt(0).toUpperCase() + key.slice(1),
        value
      }))

    return { totalAssets, totalLiabilities, netWorth: netWorthValue, assetData, liabilityData }
  }

  const budgetResults = calculateBudget()
  const rentVsBuyResults = calculateRentVsBuy()
  const compoundResults = calculateCompound()
  const loanResults = calculateLoan()
  const savingsResults = calculateSavingsGoal()
  const netWorthResults = calculateNetWorth()

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899', '#14b8a6', '#6366f1']

  const currentTool = tools.find(t => t.id === activeTool)!

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <header className="relative pt-8 pb-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ChevronRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Stroberi</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Financial <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Tools</span>
            </h1>
          </div>
          <p className="text-white/50 text-lg max-w-2xl">
            Make smarter financial decisions with our suite of calculators and planners.
          </p>
        </div>
      </header>

      <div className="relative px-4 pb-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 pb-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`group relative px-5 py-3 rounded-2xl transition-all duration-300 ${
                  activeTool === tool.id 
                    ? `bg-gradient-to-r ${tool.gradient} shadow-lg shadow-${tool.color}-500/25` 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${activeTool === tool.id ? 'text-white' : 'text-white/60 group-hover:text-white'} transition-colors`}>
                    {tool.icon}
                  </div>
                  <div className="text-left">
                    <div className={`font-semibold text-sm ${activeTool === tool.id ? 'text-white' : 'text-white/80'}`}>
                      {tool.name}
                    </div>
                    <div className={`text-xs hidden sm:block ${activeTool === tool.id ? 'text-white/80' : 'text-white/40'}`}>
                      {tool.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="relative px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          {activeTool === 'budget' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Monthly Budget Planner"
                description="Track your income and expenses to see where your money goes"
                icon={<PiggyBank className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Monthly Income</h3>
                  </div>
                  <InputField
                    label="Total Monthly Income"
                    value={budget.income}
                    onChange={(v) => setBudget(prev => ({ ...prev, income: v }))}
                    placeholder="5000"
                    prefix="$"
                    color="emerald"
                  />
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-rose-500/20">
                      <BarChart3 className="h-5 w-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Monthly Expenses</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: 'housing', label: 'Housing' },
                      { key: 'transportation', label: 'Transport' },
                      { key: 'food', label: 'Food' },
                      { key: 'utilities', label: 'Utilities' },
                      { key: 'insurance', label: 'Insurance' },
                      { key: 'healthcare', label: 'Healthcare' },
                      { key: 'entertainment', label: 'Fun' },
                      { key: 'savings', label: 'Savings' },
                      { key: 'debt', label: 'Debt' },
                      { key: 'other', label: 'Other' }
                    ].map(({ key, label }) => (
                      <InputField
                        key={key}
                        label={label}
                        value={budget[key as keyof typeof budget]}
                        onChange={(v) => setBudget(prev => ({ ...prev, [key]: v }))}
                        placeholder="0"
                        prefix="$"
                        compact
                      />
                    ))}
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                    <Sparkles className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Budget Summary</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard 
                    label="Monthly Income" 
                    value={`$${budgetResults.income.toLocaleString()}`}
                    color="emerald"
                  />
                  <StatCard 
                    label="Total Expenses" 
                    value={`$${budgetResults.totalExpenses.toLocaleString()}`}
                    color="rose"
                  />
                  <StatCard 
                    label={budgetResults.remaining >= 0 ? 'Available to Save' : 'Over Budget'}
                    value={`$${Math.abs(budgetResults.remaining).toLocaleString()}`}
                    color={budgetResults.remaining >= 0 ? 'emerald' : 'rose'}
                    highlight
                  />
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white/60 text-sm">Budget Usage</span>
                    <span className="font-mono font-semibold">{budgetResults.percentUsed.toFixed(0)}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        budgetResults.percentUsed <= 80 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 
                        budgetResults.percentUsed <= 100 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
                        'bg-gradient-to-r from-rose-500 to-red-500'
                      }`}
                      style={{ width: `${Math.min(budgetResults.percentUsed, 100)}%` }}
                    />
                  </div>
                </div>

                {budgetResults.pieData.length > 0 && (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={budgetResults.pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {budgetResults.pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1a1a2e', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#fff'
                          }}
                          formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}

                <DownloadCTA color="emerald" />
              </GlassCard>
            </div>
          )}

          {activeTool === 'rent-vs-buy' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Rent vs Buy Calculator"
                description="Compare the long-term costs of renting versus buying a home"
                icon={<Home className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Building2 className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Home Purchase</h3>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Home Price"
                      value={rentVsBuy.homePrice}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, homePrice: v }))}
                      placeholder="500000"
                      prefix="$"
                      color="blue"
                    />
                    <InputField
                      label="Down Payment"
                      value={rentVsBuy.downPayment}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, downPayment: v }))}
                      placeholder="20"
                      suffix="%"
                      color="blue"
                    />
                    <InputField
                      label="Interest Rate"
                      value={rentVsBuy.interestRate}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, interestRate: v }))}
                      placeholder="6.5"
                      suffix="%"
                      color="blue"
                    />
                    <InputField
                      label="Loan Term (years)"
                      value={rentVsBuy.loanTerm}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, loanTerm: v }))}
                      placeholder="30"
                      color="blue"
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Percent className="h-5 w-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Costs & Rates</h3>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Monthly Rent"
                      value={rentVsBuy.monthlyRent}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, monthlyRent: v }))}
                      placeholder="2500"
                      prefix="$"
                      color="amber"
                    />
                    <InputField
                      label="Property Tax (%/year)"
                      value={rentVsBuy.propertyTax}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, propertyTax: v }))}
                      placeholder="1.2"
                      suffix="%"
                      color="amber"
                    />
                    <InputField
                      label="HOA Fees ($/month)"
                      value={rentVsBuy.hoaFees}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, hoaFees: v }))}
                      placeholder="0"
                      prefix="$"
                      color="amber"
                    />
                    <InputField
                      label="Home Insurance ($/year)"
                      value={rentVsBuy.homeInsurance}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, homeInsurance: v }))}
                      placeholder="800"
                      prefix="$"
                      color="amber"
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Market Trends</h3>
                  </div>
                  <div className="space-y-6">
                    <SliderField
                      label="Maintenance"
                      value={parseFloat(rentVsBuy.maintenance)}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, maintenance: v.toString() }))}
                      min={0.1}
                      max={5}
                      step={0.1}
                      suffix="%/year"
                    />
                    <SliderField
                      label="Home Appreciation"
                      value={parseFloat(rentVsBuy.appreciation)}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, appreciation: v.toString() }))}
                      min={0}
                      max={10}
                      step={0.1}
                      suffix="%/year"
                    />
                    <SliderField
                      label="Rent Increase"
                      value={parseFloat(rentVsBuy.rentIncrease)}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, rentIncrease: v.toString() }))}
                      min={0}
                      max={8}
                      step={0.1}
                      suffix="%/year"
                    />
                    <SliderField
                      label="Time Horizon"
                      value={parseFloat(rentVsBuy.timeHorizon)}
                      onChange={(v) => setRentVsBuy(prev => ({ ...prev, timeHorizon: v.toString() }))}
                      min={1}
                      max={30}
                      step={1}
                      suffix=" years"
                    />
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Analysis Results</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                    <div className="text-rose-400 text-sm font-medium mb-2">Monthly Rent</div>
                    <div className="text-3xl font-bold text-white">
                      ${parseFloat(rentVsBuy.monthlyRent || '0').toLocaleString()}
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-blue-400 text-sm font-medium mb-2">Monthly Ownership Cost</div>
                    <div className="text-3xl font-bold text-white">
                      ${Math.round(rentVsBuyResults.monthlyBuyingCost).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard 
                    label={`Total Rent (${rentVsBuy.timeHorizon} yrs)`}
                    value={`$${rentVsBuyResults.totalRentCost.toLocaleString()}`}
                    color="rose"
                  />
                  <StatCard 
                    label="Estimated Home Value"
                    value={`$${Math.round(rentVsBuyResults.homeValue).toLocaleString()}`}
                    color="blue"
                  />
                  <StatCard 
                    label="Net Worth Advantage"
                    value={`$${Math.abs(rentVsBuyResults.netWorthDifference).toLocaleString()}`}
                    color={rentVsBuyResults.netWorthDifference >= 0 ? 'emerald' : 'rose'}
                    subtitle={rentVsBuyResults.netWorthDifference >= 0 ? 'from buying' : 'from renting'}
                  />
                </div>

                <div className={`p-6 rounded-2xl mb-8 ${
                  rentVsBuyResults.recommendation === 'Buying is better' 
                    ? 'bg-emerald-500/10 border border-emerald-500/20' 
                    : 'bg-rose-500/10 border border-rose-500/20'
                }`}>
                  <div className={`text-2xl font-bold mb-2 ${
                    rentVsBuyResults.recommendation === 'Buying is better' ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {rentVsBuyResults.recommendation}
                  </div>
                  {rentVsBuyResults.breakEvenYears > 0 && (
                    <p className="text-white/60">
                      Break-even point: {rentVsBuyResults.breakEvenYears.toFixed(1)} years
                    </p>
                  )}
                </div>

                {rentVsBuyResults.chartData.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold mb-6 text-center">Cost & Equity Over Time</h4>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={rentVsBuyResults.chartData}>
                          <defs>
                            <linearGradient id="rentGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="buyGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="year" 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                          />
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a2e', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(label) => `Year ${label}`}
                          />
                          <Area type="monotone" dataKey="rentCost" stroke="#f43f5e" fill="url(#rentGrad)" name="Total Rent" />
                          <Area type="monotone" dataKey="buyingCost" stroke="#3b82f6" fill="url(#buyGrad)" name="Total Buying Cost" />
                          <Area type="monotone" dataKey="homeEquity" stroke="#10b981" fill="url(#equityGrad)" name="Home Equity" />
                          {rentVsBuyResults.breakEvenYears > 0 && (
                            <ReferenceLine x={rentVsBuyResults.breakEvenYears} stroke="#10b981" strokeDasharray="5 5" />
                          )}
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                <DownloadCTA color="blue" />
              </GlassCard>
            </div>
          )}

          {activeTool === 'compound' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Investment Growth Calculator"
                description="See how your investments grow with the power of compound interest"
                icon={<TrendingUp className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-violet-500/20">
                      <Wallet className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Investment Details</h3>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Initial Investment"
                      value={compound.principal}
                      onChange={(v) => setCompound(prev => ({ ...prev, principal: v }))}
                      placeholder="10000"
                      prefix="$"
                      color="violet"
                    />
                    <InputField
                      label="Monthly Contribution"
                      value={compound.monthlyContribution}
                      onChange={(v) => setCompound(prev => ({ ...prev, monthlyContribution: v }))}
                      placeholder="500"
                      prefix="$"
                      color="violet"
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Clock className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Growth Parameters</h3>
                  </div>
                  <div className="space-y-6">
                    <SliderField
                      label="Annual Return"
                      value={parseFloat(compound.annualRate)}
                      onChange={(v) => setCompound(prev => ({ ...prev, annualRate: v.toString() }))}
                      min={0}
                      max={15}
                      step={0.1}
                      suffix="%"
                    />
                    <SliderField
                      label="Investment Period"
                      value={parseFloat(compound.years)}
                      onChange={(v) => setCompound(prev => ({ ...prev, years: v.toString() }))}
                      min={1}
                      max={40}
                      step={1}
                      suffix=" years"
                    />
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                    <Sparkles className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Projected Growth</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard 
                    label="Final Balance" 
                    value={`$${Math.round(compoundResults.finalAmount).toLocaleString()}`}
                    color="violet"
                    highlight
                  />
                  <StatCard 
                    label="Total Contributions" 
                    value={`$${Math.round(compoundResults.totalContributions).toLocaleString()}`}
                    color="blue"
                  />
                  <StatCard 
                    label="Total Interest Earned" 
                    value={`$${Math.round(compoundResults.totalInterest).toLocaleString()}`}
                    color="emerald"
                  />
                </div>

                {compoundResults.chartData.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold mb-6 text-center">Investment Growth Over Time</h4>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={compoundResults.chartData}>
                          <defs>
                            <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="contribGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="year" 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                          />
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a2e', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(label) => `Year ${label}`}
                          />
                          <Area type="monotone" dataKey="balance" stroke="#8b5cf6" fill="url(#balanceGrad)" name="Total Balance" strokeWidth={2} />
                          <Area type="monotone" dataKey="contributions" stroke="#3b82f6" fill="url(#contribGrad)" name="Contributions" strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                <DownloadCTA color="violet" />
              </GlassCard>
            </div>
          )}

          {activeTool === 'loan' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Loan Calculator"
                description="Calculate your monthly payments and see your amortization schedule"
                icon={<Banknote className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Banknote className="h-5 w-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Loan Details</h3>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Loan Amount"
                      value={loan.amount}
                      onChange={(v) => setLoan(prev => ({ ...prev, amount: v }))}
                      placeholder="25000"
                      prefix="$"
                      color="amber"
                    />
                    <InputField
                      label="Extra Monthly Payment"
                      value={loan.extraPayment}
                      onChange={(v) => setLoan(prev => ({ ...prev, extraPayment: v }))}
                      placeholder="0"
                      prefix="$"
                      color="amber"
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <Percent className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Loan Terms</h3>
                  </div>
                  <div className="space-y-6">
                    <SliderField
                      label="Interest Rate"
                      value={parseFloat(loan.interestRate)}
                      onChange={(v) => setLoan(prev => ({ ...prev, interestRate: v.toString() }))}
                      min={0}
                      max={25}
                      step={0.1}
                      suffix="%"
                    />
                    <SliderField
                      label="Loan Term"
                      value={parseFloat(loan.termYears)}
                      onChange={(v) => setLoan(prev => ({ ...prev, termYears: v.toString() }))}
                      min={1}
                      max={30}
                      step={1}
                      suffix=" years"
                    />
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                    <Sparkles className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Payment Breakdown</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <StatCard 
                    label="Monthly Payment" 
                    value={`$${Math.round(loanResults.monthlyPayment).toLocaleString()}`}
                    color="amber"
                    highlight
                  />
                  <StatCard 
                    label="Total Payment" 
                    value={`$${Math.round(loanResults.totalPayment).toLocaleString()}`}
                    color="blue"
                  />
                  <StatCard 
                    label="Total Interest" 
                    value={`$${Math.round(loanResults.totalInterest).toLocaleString()}`}
                    color="rose"
                  />
                  <StatCard 
                    label="Payoff Time" 
                    value={`${Math.ceil(loanResults.payoffMonths / 12)} years`}
                    subtitle={`${loanResults.payoffMonths} months`}
                    color="emerald"
                  />
                </div>

                {loanResults.chartData.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
                    <h4 className="text-lg font-semibold mb-6 text-center">Loan Balance Over Time</h4>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={loanResults.chartData}>
                          <defs>
                            <linearGradient id="loanBalanceGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="year" 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                          />
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a2e', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(label) => `Year ${label}`}
                          />
                          <Area type="monotone" dataKey="balance" stroke="#f59e0b" fill="url(#loanBalanceGrad)" name="Remaining Balance" strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {loanResults.amortizationData.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold mb-6 text-center">First Year Amortization</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={loanResults.amortizationData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="month" 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                          />
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                            tickFormatter={(value) => `$${value}`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a2e', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(label) => `Month ${label}`}
                          />
                          <Bar dataKey="principal" stackId="a" fill="#10b981" name="Principal" />
                          <Bar dataKey="interest" stackId="a" fill="#f43f5e" name="Interest" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                <DownloadCTA color="amber" />
              </GlassCard>
            </div>
          )}

          {activeTool === 'savings' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Savings Goal Calculator"
                description="Plan how to reach your financial goals with smart saving strategies"
                icon={<Target className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-rose-500/20">
                      <Target className="h-5 w-5 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Your Goal</h3>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Target Amount"
                      value={savingsGoal.targetAmount}
                      onChange={(v) => setSavingsGoal(prev => ({ ...prev, targetAmount: v }))}
                      placeholder="50000"
                      prefix="$"
                      color="rose"
                    />
                    <InputField
                      label="Current Savings"
                      value={savingsGoal.currentSavings}
                      onChange={(v) => setSavingsGoal(prev => ({ ...prev, currentSavings: v }))}
                      placeholder="5000"
                      prefix="$"
                      color="rose"
                    />
                    <InputField
                      label="Monthly Contribution"
                      value={savingsGoal.monthlyContribution}
                      onChange={(v) => setSavingsGoal(prev => ({ ...prev, monthlyContribution: v }))}
                      placeholder="500"
                      prefix="$"
                      color="rose"
                    />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-pink-500/20">
                      <Clock className="h-5 w-5 text-pink-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Timeline</h3>
                  </div>
                  <div className="space-y-6">
                    <SliderField
                      label="Expected Return"
                      value={parseFloat(savingsGoal.annualReturn)}
                      onChange={(v) => setSavingsGoal(prev => ({ ...prev, annualReturn: v.toString() }))}
                      min={0}
                      max={12}
                      step={0.1}
                      suffix="%/year"
                    />
                    <SliderField
                      label="Goal Deadline"
                      value={parseFloat(savingsGoal.deadline)}
                      onChange={(v) => setSavingsGoal(prev => ({ ...prev, deadline: v.toString() }))}
                      min={1}
                      max={30}
                      step={1}
                      suffix=" years"
                    />
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20">
                    <Sparkles className="h-5 w-5 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Goal Analysis</h3>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white/60 text-sm">Progress to Goal</span>
                    <span className="font-mono font-semibold">{savingsResults.progressPercent.toFixed(1)}%</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-rose-500 to-pink-500"
                      style={{ width: `${Math.min(savingsResults.progressPercent, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard 
                    label="Projected Amount" 
                    value={`$${Math.round(savingsResults.projectedAmount).toLocaleString()}`}
                    color={savingsResults.willReachGoal ? 'emerald' : 'rose'}
                    highlight
                  />
                  <StatCard 
                    label="Required Monthly" 
                    value={`$${Math.round(savingsResults.requiredMonthly).toLocaleString()}`}
                    color="amber"
                    subtitle="to reach goal"
                  />
                  <StatCard 
                    label="Time to Goal" 
                    value={savingsResults.monthsToGoal > 0 ? `${Math.ceil(savingsResults.monthsToGoal / 12)} years` : 'N/A'}
                    subtitle={savingsResults.monthsToGoal > 0 ? `${savingsResults.monthsToGoal} months` : 'increase savings'}
                    color="blue"
                  />
                </div>

                <div className={`p-6 rounded-2xl mb-8 ${
                  savingsResults.willReachGoal 
                    ? 'bg-emerald-500/10 border border-emerald-500/20' 
                    : 'bg-amber-500/10 border border-amber-500/20'
                }`}>
                  <div className={`text-lg font-semibold mb-2 ${
                    savingsResults.willReachGoal ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {savingsResults.willReachGoal 
                      ? "🎉 You'll reach your goal!" 
                      : "⚠️ You won't reach your goal at this rate"
                    }
                  </div>
                  <p className="text-white/60">
                    {savingsResults.willReachGoal 
                      ? `At your current savings rate, you'll have $${Math.round(savingsResults.projectedAmount).toLocaleString()} in ${savingsGoal.deadline} years.`
                      : `Consider increasing your monthly contribution to $${Math.round(savingsResults.requiredMonthly).toLocaleString()} to reach your goal.`
                    }
                  </p>
                </div>

                {savingsResults.chartData.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold mb-6 text-center">Savings Projection</h4>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={savingsResults.chartData}>
                          <defs>
                            <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="year" 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                          />
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)"
                            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1a1a2e', 
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              color: '#fff'
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(label) => `Year ${label}`}
                          />
                          <ReferenceLine y={parseFloat(savingsGoal.targetAmount) || 0} stroke="#10b981" strokeDasharray="5 5" />
                          <Area type="monotone" dataKey="balance" stroke="#f43f5e" fill="url(#savingsGrad)" name="Projected Balance" strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                <DownloadCTA color="rose" />
              </GlassCard>
            </div>
          )}

          {activeTool === 'net-worth' && (
            <div className="space-y-8 fade-in-up">
              <ToolHeader 
                title="Net Worth Calculator"
                description="Get a complete picture of your financial health"
                icon={<Wallet className="h-6 w-6" />}
                gradient={currentTool.gradient}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Assets</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'cash', label: 'Cash & Savings' },
                      { key: 'investments', label: 'Investments' },
                      { key: 'retirement', label: 'Retirement Accounts' },
                      { key: 'realEstate', label: 'Real Estate' },
                      { key: 'vehicles', label: 'Vehicles' },
                      { key: 'otherAssets', label: 'Other Assets' }
                    ].map(({ key, label }) => (
                      <InputField
                        key={key}
                        label={label}
                        value={netWorth[key as keyof typeof netWorth]}
                        onChange={(v) => setNetWorth(prev => ({ ...prev, [key]: v }))}
                        placeholder="0"
                        prefix="$"
                        color="emerald"
                      />
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-rose-500/20">
                      <TrendingUp className="h-5 w-5 text-rose-400 rotate-180" />
                    </div>
                    <h3 className="text-lg font-semibold">Liabilities</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'mortgage', label: 'Mortgage' },
                      { key: 'studentLoans', label: 'Student Loans' },
                      { key: 'carLoans', label: 'Car Loans' },
                      { key: 'creditCards', label: 'Credit Cards' },
                      { key: 'otherDebts', label: 'Other Debts' }
                    ].map(({ key, label }) => (
                      <InputField
                        key={key}
                        label={label}
                        value={netWorth[key as keyof typeof netWorth]}
                        onChange={(v) => setNetWorth(prev => ({ ...prev, [key]: v }))}
                        placeholder="0"
                        prefix="$"
                        color="rose"
                      />
                    ))}
                  </div>
                </GlassCard>
              </div>

              <GlassCard highlight>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-sky-500/20">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Financial Summary</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard 
                    label="Total Assets" 
                    value={`$${netWorthResults.totalAssets.toLocaleString()}`}
                    color="emerald"
                  />
                  <StatCard 
                    label="Total Liabilities" 
                    value={`$${netWorthResults.totalLiabilities.toLocaleString()}`}
                    color="rose"
                  />
                  <StatCard 
                    label="Net Worth" 
                    value={`$${netWorthResults.netWorth.toLocaleString()}`}
                    color={netWorthResults.netWorth >= 0 ? 'cyan' : 'rose'}
                    highlight
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {netWorthResults.assetData.length > 0 && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-lg font-semibold mb-6 text-center text-emerald-400">Asset Breakdown</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={netWorthResults.assetData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {netWorthResults.assetData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1a1a2e', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: '#fff'
                              }}
                              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {netWorthResults.liabilityData.length > 0 && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-lg font-semibold mb-6 text-center text-rose-400">Liability Breakdown</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={netWorthResults.liabilityData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {netWorthResults.liabilityData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={['#f43f5e', '#f97316', '#eab308', '#a855f7', '#6366f1'][index % 5]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1a1a2e', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: '#fff'
                              }}
                              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>

                <DownloadCTA color="cyan" />
              </GlassCard>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function GlassCard({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`
      relative p-6 rounded-3xl backdrop-blur-xl transition-all duration-300
      ${highlight 
        ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl' 
        : 'bg-white/5 border border-white/10 hover:border-white/20'
      }
    `}>
      {children}
    </div>
  )
}

function ToolHeader({ title, description, icon, gradient }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
      <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
        {icon}
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-white/50">{description}</p>
      </div>
    </div>
  )
}

function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  prefix, 
  suffix,
  color = 'white',
  compact = false
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  color?: string;
  compact?: boolean;
}) {
  const colorClasses: Record<string, string> = {
    emerald: 'focus:border-emerald-500/50 focus:ring-emerald-500/20',
    blue: 'focus:border-blue-500/50 focus:ring-blue-500/20',
    violet: 'focus:border-violet-500/50 focus:ring-violet-500/20',
    amber: 'focus:border-amber-500/50 focus:ring-amber-500/20',
    rose: 'focus:border-rose-500/50 focus:ring-rose-500/20',
    cyan: 'focus:border-cyan-500/50 focus:ring-cyan-500/20',
    white: 'focus:border-white/30 focus:ring-white/10',
  }

  return (
    <div>
      <label className={`block text-white/50 mb-1.5 ${compact ? 'text-xs' : 'text-sm'}`}>{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">{prefix}</span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full bg-white/5 border border-white/10 rounded-xl 
            text-white placeholder-white/20 transition-all duration-200
            focus:outline-none focus:ring-2 ${colorClasses[color]}
            ${compact ? 'py-2 text-sm' : 'py-3'}
            ${prefix ? 'pl-8 pr-4' : 'px-4'}
            ${suffix ? 'pr-12' : ''}
          `}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">{suffix}</span>
        )}
      </div>
    </div>
  )
}

function SliderField({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step,
  suffix = ''
}: { 
  label: string; 
  value: number; 
  onChange: (value: number) => void; 
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-white/50 text-sm">{label}</label>
        <span className="font-mono text-sm font-semibold text-white">
          {value}{suffix}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  )
}

function StatCard({ 
  label, 
  value, 
  color,
  subtitle,
  highlight = false
}: { 
  label: string; 
  value: string; 
  color: string;
  subtitle?: string;
  highlight?: boolean;
}) {
  const colorClasses: Record<string, string> = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    violet: 'text-violet-400',
    amber: 'text-amber-400',
    rose: 'text-rose-400',
    cyan: 'text-cyan-400',
  }

  return (
    <div className={`
      p-5 rounded-2xl text-center transition-all
      ${highlight 
        ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
        : 'bg-white/5 border border-white/10'
      }
    `}>
      <div className={`text-2xl md:text-3xl font-bold mb-1 ${colorClasses[color]}`}>
        {value}
      </div>
      <div className="text-white/50 text-sm">{label}</div>
      {subtitle && <div className="text-white/30 text-xs mt-1">{subtitle}</div>}
    </div>
  )
}

function DownloadCTA({ color }: { color: string }) {
  const gradientClasses: Record<string, string> = {
    emerald: 'from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500',
    blue: 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500',
    violet: 'from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500',
    amber: 'from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500',
    rose: 'from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500',
    cyan: 'from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500',
  }

  return (
    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-lg mb-1">Track your finances automatically</h4>
          <p className="text-white/50 text-sm">Download Stroberi to log expenses and stay on top of your budget.</p>
        </div>
        <div className="flex gap-3">
          <a 
            href="https://apps.apple.com/app/stroberi/id6740559308"
            className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${gradientClasses[color]} text-white font-medium text-sm transition-all flex items-center gap-2`}
          >
            iOS
            <ArrowRight className="h-4 w-4" />
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.stroberi"
            className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${gradientClasses[color]} text-white font-medium text-sm transition-all flex items-center gap-2`}
          >
            Android
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
