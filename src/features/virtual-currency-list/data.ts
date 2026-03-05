export type CurrencySummaryCard = {
  id: string
  name: string
  kind: string
  rateLabel: string
  circulation: string
  growth: string
  growthPositive?: boolean
  tone: 'gold' | 'emerald'
}

export type PackageRow = {
  id: string
  name: string
  sku: string
  contents: string[]
  price: string
}

export type LedgerRow = {
  id: string
  user: string
  note: string
  value: string
  status: string
}

export const currencySummaryCards: CurrencySummaryCard[] = [
  {
    id: 'gold',
    name: 'Gold Coins',
    kind: 'Hard Currency',
    rateLabel: '100 G = $1.00',
    circulation: '1,240,500',
    growth: '+12.4%',
    growthPositive: true,
    tone: 'gold',
  },
  {
    id: 'gems',
    name: 'Gems',
    kind: 'Soft Currency',
    rateLabel: '50 Gem = 100 G',
    circulation: '840,200',
    growth: '+8.2%',
    growthPositive: true,
    tone: 'emerald',
  },
]

export const packageRows: PackageRow[] = [
  {
    id: 'starter-sack',
    name: 'Starter Sack',
    sku: 'pkg_starter_coins',
    contents: ['500 Gold Coins'],
    price: '$4.99',
  },
  {
    id: 'vault-of-gems',
    name: 'Vault of Gems',
    sku: 'pkg_gem_vault',
    contents: ['2,500 Gems'],
    price: '$19.99',
  },
  {
    id: 'elite-bundle',
    name: 'Elite Bundle',
    sku: 'pkg_elite_bundle',
    contents: ['2,000 Gold', '500 Gems'],
    price: '$29.99',
  },
]

export const recentLedger: LedgerRow[] = [
  {
    id: 'sarah-chen',
    user: 'Sarah Chen',
    note: 'Bought 500 Gold Coins',
    value: '$4.99',
    status: 'Success',
  },
  {
    id: 'mike-k',
    user: 'Mike K.',
    note: 'Converted 100 Gold',
    value: '50 Gems',
    status: 'Conversion',
  },
  {
    id: 'alex-tan',
    user: 'Alex Tan',
    note: 'Elite Bundle Purchase',
    value: '$29.99',
    status: 'Success',
  },
]

export const liquidityMinted = [16, 24, 20, 35, 31, 48, 40, 58, 50]
export const liquidityBurned = [10, 14, 9, 17, 13, 22, 19, 25, 21]
