# Stroberi - Personal Expense Tracker

A privacy-first, open-source personal expense tracking app built with React Native (Expo). All data is stored locally on the device using WatermelonDB (SQLite) and never leaves the user's device.

## Quick Start

```bash
yarn install
yarn start
yarn ios      # Run on iOS
yarn android  # Run on Android
```

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React Native 0.76.3 + Expo 52 |
| Navigation | Expo Router 4.x (file-based routing) |
| Database | WatermelonDB 0.27.1 (SQLite adapter) |
| UI Framework | Tamagui 1.98+ |
| Charts | Victory Native 41.x + React Native Skia |
| List Rendering | @shopify/flash-list |
| Bottom Sheets | @gorhom/bottom-sheet 5.x |
| Animations | React Native Reanimated 3.16 |
| Date Handling | Day.js |
| CSV Parsing | PapaParse |
| Icons | @tamagui/lucide-icons |
| State | WatermelonDB observables (RxJS) |

---

## Architecture Overview

```
/app                    # Expo Router screens
  /(tabs)               # Tab-based navigation
    _layout.tsx         # Tab bar configuration
    index.tsx           # Home screen (overview + charts)
    transactions.tsx    # Transaction list + filters
    budgets.tsx         # Budgets management (optional feature)
    settings.tsx        # App settings
  create-transaction.tsx # Transaction form (create/edit)
  webview.tsx           # Legal pages (privacy, ToS)

/components             # Reusable UI components
  /button               # Button variants
  /carousel             # Swipeable carousel for charts
  /charts               # Victory Native chart wrappers
  /filtering            # Filter UI components
  /home                 # Home screen specific components
  /settings             # Settings UI components
  /sheet                # Bottom sheet components

/database               # WatermelonDB configuration
  index.ts              # Database instance
  schema.ts             # Table definitions (version 13)
  migrations.ts         # Schema migrations
  helpers.ts            # CRUD operations
  *-model.ts            # Model classes

/hooks                  # Custom React hooks
/lib                    # Utility functions
/data                   # Static data (currencies, categories)
```

---

## Database Schema (Version 13)

### Tables

#### `transactions`
The core table storing all financial transactions.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Auto-generated UUID |
| `merchant` | string | Payee/merchant name |
| `note` | string | Transaction notes |
| `amount` | number | Amount (negative = expense, positive = income) |
| `date` | number | Unix timestamp |
| `currencyCode` | string | Transaction currency (e.g., "USD") |
| `categoryId` | string? | FK to categories |
| `baseCurrencyCode` | string | User's default currency |
| `amountInBaseCurrency` | number | Converted amount for analytics |
| `exchangeRate` | number | Conversion rate used |
| `recurringTransactionId` | string? | FK to recurring_transactions |
| `created_at` | number | Creation timestamp |
| `updated_at` | number | Last update timestamp |

#### `categories`
User-defined spending categories with emoji icons.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Auto-generated UUID |
| `name` | string | Category name |
| `icon` | string | Emoji icon |
| `usageCount` | number | Times used (for smart suggestions) |
| `created_at` | number | Creation timestamp |
| `updated_at` | number | Last update timestamp |

#### `recurring_transactions`
Templates for automatically creating transactions on schedule.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Auto-generated UUID |
| `merchant` | string | Payee/merchant name |
| `amount` | number | Transaction amount |
| `currencyCode` | string | Currency code |
| `note` | string | Notes |
| `categoryId` | string? | FK to categories |
| `frequency` | string | "daily" \| "weekly" \| "monthly" \| "yearly" |
| `startDate` | number | When recurring starts |
| `endDate` | number? | Optional end date |
| `nextDueDate` | number | Next scheduled creation |
| `lastCreatedDate` | number? | Last time transaction was created |
| `isActive` | boolean | Whether recurring is active |
| `created_at` | number | Creation timestamp |
| `updated_at` | number | Last update timestamp |

#### `budgets`
Spending limits with customizable periods and alerts.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Auto-generated UUID |
| `name` | string | Budget name |
| `amount` | number | Budget limit |
| `period` | string | "weekly" \| "monthly" \| "yearly" |
| `startDate` | number | Budget period start |
| `rollover` | boolean | Carry unused budget to next period |
| `isActive` | boolean | Whether budget is active |
| `alertThreshold` | number | Percentage to trigger warning (e.g., 80) |
| `created_at` | number | Creation timestamp |
| `updated_at` | number | Last update timestamp |

#### `budget_categories`
Junction table linking budgets to specific categories.

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Auto-generated UUID |
| `budget_id` | string | FK to budgets |
| `category_id` | string | FK to categories |

---

## Core Features

### 1. Transaction Management

**Create/Update Transaction** (`/app/create-transaction.tsx`)
- Amount input with currency selector
- Date and time pickers
- Merchant/payee name
- Category selection (with emoji icons)
- Notes field
- Support for both income (+) and expense (-)

**Transaction List** (`/components/TransactionsList.tsx`)
- Grouped by date (Today, Yesterday, MMM DD)
- Swipe actions: Edit (gray) / Delete (red)
- Flash list for performance
- Observable pattern for real-time updates

**Filtering** (`/app/(tabs)/transactions.tsx`)
- Date filters: This Year, This Month, Custom Range
- Category filters: Multi-select
- Combined filter count indicator

### 2. Multi-Currency Support

**Currency Conversion** (`/hooks/useCurrencyApi.ts`)
- 36 supported currencies (see `/data/currencies.ts`)
- Real-time conversion from external API
- 24-hour caching via WatermelonDB localStorage
- Automatic fallback to secondary API
- All amounts stored in both original and base currency

**Supported Currencies:**
USD, EUR, GBP, JPY, CNY, RUB, INR, BRL, MXN, AUD, CAD, CHF, ZAR, SEK, NOK, KRW, TRY, NZD, SGD, HKD, PLN, DKK, HUF, CZK, ILS, CLP, PHP, AED, COP, SAR, MYR, RON, IDR, THB, RSD, BAM

### 3. Analytics & Visualizations

**Home Screen Carousel** (`/app/(tabs)/index.tsx`)

Five swipeable chart views:

1. **Spend Overview** (`/components/home/SpendOverview.tsx`)
   - Period income, expense, balance
   - Transaction count
   - Top spending category
   - Custom date range picker

2. **Spend by Type - Expense** (`/components/charts/SpendByTypeChart.tsx`)
   - Monthly expense breakdown
   - Bar chart visualization

3. **Spend by Type - Income** (`/components/charts/SpendByTypeChart.tsx`)
   - Monthly income breakdown
   - Bar chart visualization

4. **Spend by Category** (`/components/charts/SpendByCategoryChart.tsx`)
   - Top N categories (responsive to screen width)
   - Filters: This month, Last month, This year
   - Bar chart with category labels

5. **Spending Trends** (`/components/charts/SpendingTrendsChart.tsx`)
   - Line chart showing spending over time
   - Filters: Daily (this month), Last 30 days, Weekly

**Analytics Engine** (`/lib/transactionAnalytics.ts`)
- `calculateTransactionAnalytics()` - Full metrics in single pass
- `calculateCategorySpending()` - Category breakdown for charts
- `calculateSpendingByType()` - Income/expense by month
- `filterTransactionsByDateRange()` - Date range filtering
- `getTopSpendingCategories()` - Top N categories

### 4. Category Management

**Default Categories** (`/data/defaultCategories.ts`)
- Food 🍔, Transport 🚗, Entertainment 🎮, Health 🏥
- Education 🎓, Utilities 💡, Shopping 🛍️, Travel ✈️
- Other 📦, Employment 💰, Gifts 🎁, Rent 🏠
- Personal Care 🧼, Groceries 🍎

**Category Sheet** (`/components/sheet/ManageCategoriesSheet.tsx`)
- Create custom categories
- Edit name and emoji icon
- Delete categories
- Search functionality
- Usage count tracking for smart suggestions

### 5. Recurring Transactions

**Management** (`/components/sheet/RecurringTransactionFormSheet.tsx`)
- Define template: merchant, amount, category, currency, note
- Set frequency: daily, weekly, monthly, yearly
- Start date and optional end date
- Active/inactive toggle

**Auto-Creation** (`/hooks/useRecurringTransactions.ts`)
- Checks on app launch and foreground
- Creates transactions when `nextDueDate` is due
- Updates `nextDueDate` and `lastCreatedDate`
- Respects `endDate` if set
- Created transactions linked via `recurringTransactionId`

### 6. Budgets (Optional Feature)

**Enable/Disable** in Settings → Features → Enable Budgeting

**Budget Creation** (`/components/sheet/BudgetFormSheet.tsx`)
- Name, amount, period (weekly/monthly/yearly)
- Start date
- Alert threshold (percentage)
- Rollover option
- Link to specific categories (optional)

**Budget Tracking** (`/hooks/useBudgetStatus.ts`)
- Real-time spent calculation
- Status: ok, warning (at threshold), exceeded (100%+)
- Progress bar with color indicators
- Period-aware calculations

**Budget Alerts** (`/components/home/BudgetAlertCard.tsx`)
- Shows on home screen when budgets approach/exceed limits
- Dismissable per-budget
- Shows exceeded and warning counts

### 7. Data Import/Export

**CSV Export** (`/hooks/useTransactionExport.ts`)
- Date range selection
- Column customization
- Preview count before export
- Export to CSV or JSON
- Native share dialog

**CSV Import** (`/components/sheet/ImportCSVSheet.tsx`)
- Download template with example data
- Batch processing (10 transactions at a time)
- Validates: required columns, amount format, date format, currency codes
- Auto-creates new categories from import
- Progress indicator with phases: parsing → validating → importing → complete
- Comprehensive error handling with retry

**CSV Format:**
```csv
merchant,amount,date,note,currencyCode,category,categoryIcon
Starbucks,-4.50,2024-01-15,Morning coffee,USD,Food & Drink,☕
Amazon,-29.99,2024-01-14,Book purchase,USD,Shopping,📦
Salary,3000.00,2024-01-01,Monthly salary,USD,Income,💰
```

---

## State Management Pattern

The app uses WatermelonDB's reactive pattern with RxJS observables:

```typescript
// Pattern: withObservables HOC
const EnhancedComponent = withObservables<
  InputProps,
  { data: Observable<DataType> }
>(['dependency'], ({ database }) => ({
  data: database
    .get<ModelType>('tableName')
    .query(Q.where('field', value))
    .observe(),
}))(BaseComponent);
```

**Key Patterns:**
1. Database queries return observables that auto-update UI
2. `observeWithColumns()` for specific column changes
3. RxJS `pipe()` with `map()` for data transformation
4. `switchMap()` for dependent queries

**Local Storage:**
- Currency conversion cache
- Default currency preference
- Budgeting enabled flag
- Dismissed budget alerts

---

## Design System

**Tamagui Theme** (`/tamagui.config.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `$stroberi` | #E54B4B | Brand primary, expenses |
| `$brandPrimary` | #E54B4B | Accent color |
| `$brandSecondary` | #FFA987 | Secondary accent |
| `$bgPrimary` | black | Background |
| `$seashell` | #F7EBE8 | Inactive text |
| `$green` | hsl(151, 50%, 53.2%) | Income, success |
| `$greenLight` | hsl(151, 50%, 70.2%) | Light green variant |
| `$stroberiLight` | rgb(215, 99, 80) | Light red variant |

**Typography:**
- Font: Inter-Medium
- Font sizes: `$1` through `$8`

**UI Components:**
- Bottom sheets via `@gorhom/bottom-sheet`
- Blur tab bar via `expo-blur`
- Native context menus via `zeego`
- Swipeable list items via `react-native-gesture-handler`

---

## Key Hooks

| Hook | Purpose |
|------|---------|
| `useDefaultCurrency()` | Get/set user's default currency |
| `useBudgetingEnabled()` | Check if budgets feature is enabled |
| `useBudgetStatus()` | Calculate budget spent/remaining/percentage |
| `useRecurringTransactions()` | Auto-create due recurring transactions |
| `useTransactionExport()` | Export transactions to CSV/JSON |
| `useCurrencyApi()` | Currency conversion with caching |
| `useToast()` | Show toast notifications via Burnt |
| `useSeedCategories()` | Initialize default categories on first launch |

---

## Database Helpers (`/database/helpers.ts`)

### Transactions
- `createTransaction(payload)` - Create with currency conversion
- `updateTransaction(payload)` - Update with category usage tracking
- `deleteTransaction(id)` - Soft delete with category decrement

### Categories
- `createCategory({ name, icon })` - Create custom category
- `updateCategory({ id, name, icon })` - Update category

### Recurring Transactions
- `createRecurringTransaction(payload)` - Create recurring template
- `updateRecurringTransaction(payload)` - Update template
- `deleteRecurringTransaction(id)` - Delete template
- `toggleRecurringTransaction(id)` - Toggle active state
- `checkAndCreateDueTransactions(baseCurrency)` - Process all due recurring

### Budgets
- `createBudget(payload)` - Create with category links
- `updateBudget(payload)` - Update and sync category links
- `deleteBudget(id)` - Delete with category links
- `toggleBudget(id)` - Toggle active state
- `getBudgetStatus(id, periodStart, periodEnd)` - Calculate status
- `getAllActiveBudgets()` - Get active budgets

---

## File Structure Reference

```
stroberi/
├── app/
│   ├── _layout.tsx              # Root layout with providers
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tab bar config
│   │   ├── index.tsx            # Home screen
│   │   ├── transactions.tsx     # Transactions list
│   │   ├── budgets.tsx          # Budgets screen
│   │   └── settings.tsx         # Settings screen
│   ├── create-transaction.tsx   # Transaction form
│   └── webview.tsx              # Legal pages
├── components/
│   ├── button/
│   │   ├── Button.tsx
│   │   └── LinkButton.tsx
│   ├── carousel/
│   │   ├── Carousel.tsx
│   │   ├── CarouselItemWrapper.tsx
│   │   └── CarouselItem*.tsx
│   ├── charts/
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   ├── SpendBarChart.tsx
│   │   ├── SpendLineChart.tsx
│   │   ├── SpendByCategoryChart.tsx
│   │   ├── SpendByTypeChart.tsx
│   │   └── SpendingTrendsChart.tsx
│   ├── filtering/
│   │   ├── BottomSheetDynamicSize.tsx
│   │   ├── CategoryFilterSection.tsx
│   │   ├── DateFilterSection.tsx
│   │   └── FilterOptions.tsx
│   ├── home/
│   │   ├── BudgetAlertCard.tsx
│   │   ├── HomeTransactionsSection.tsx
│   │   └── SpendOverview.tsx
│   ├── sheet/
│   │   ├── BudgetFormSheet.tsx
│   │   ├── ExportDataSheet.tsx
│   │   ├── ImportCSVSheet.tsx
│   │   ├── ManageCategoriesSheet.tsx
│   │   ├── ManageCategoryItemSheet.tsx
│   │   ├── ManageRecurringTransactionsSheet.tsx
│   │   ├── RecurringTransactionFormSheet.tsx
│   │   ├── TransactionPreviewSheet.tsx
│   │   └── ErrorSheet.tsx
│   ├── TransactionItem.tsx
│   ├── TransactionsList.tsx
│   ├── BudgetItem.tsx
│   ├── BudgetsList.tsx
│   ├── CurrencyInput.tsx
│   ├── CurrencySelect.tsx
│   ├── DatePicker.tsx
│   └── ...
├── database/
│   ├── index.ts                 # Database instance
│   ├── schema.ts                # Schema definition
│   ├── migrations.ts            # Migration history
│   ├── helpers.ts               # CRUD operations
│   ├── transaction-model.ts
│   ├── category-model.ts
│   ├── recurring-transaction-model.ts
│   ├── budget-model.ts
│   └── budget-category-model.ts
├── hooks/
│   ├── useBudgetingEnabled.ts
│   ├── useBudgetStatus.ts
│   ├── useCurrencyApi.ts
│   ├── useDefaultCurrency.ts
│   ├── useRecurringTransactions.ts
│   ├── useSeedCategories.tsx
│   ├── useToast.ts
│   └── useTransactionExport.ts
├── lib/
│   ├── budgetUtils.ts
│   ├── chartUtils.ts
│   ├── date.ts
│   ├── format.ts
│   ├── storageKeys.ts
│   └── transactionAnalytics.ts
├── data/
│   ├── currencies.ts            # 36 supported currencies
│   ├── defaultCategories.ts     # 14 default categories
│   └── emojis.ts                # Emoji picker data
├── tamagui.config.ts            # Theme configuration
├── package.json
└── tsconfig.json
```

---

## Development Guidelines

### Code Style
- No comments in code
- Use Biome for linting and formatting
- TypeScript strict mode
- Prefer derived state over useEffect
- Use WatermelonDB observables for reactive data

### Commands
```bash
yarn lint        # Lint with Biome
yarn format      # Format with Biome
yarn check       # Check and fix
yarn check:types # TypeScript type checking
```

### Adding New Features

1. **New Database Table:**
   - Add to `/database/schema.ts`
   - Bump schema version
   - Create model in `/database/*-model.ts`
   - Add helpers in `/database/helpers.ts`
   - Add migration in `/database/migrations.ts`

2. **New Screen:**
   - Add file in `/app/` directory
   - Expo Router handles routing automatically

3. **New Component:**
   - Add to `/components/`
   - Use Tamagui primitives (View, Text, etc.)
   - Follow existing patterns for bottom sheets

---

## Known Considerations

1. **Offline-First:** All data stored locally, no sync
2. **Single Currency Display:** Analytics shown in base currency
3. **Budget Categories:** Can be linked to specific categories or track all
4. **Recurring:** Checked on app launch and foreground only
5. **Exchange Rates:** Cached 24h, may be stale for volatile currencies

