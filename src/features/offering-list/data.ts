export type OfferingKpi = {
  id: string
  label: string
  value: string
  tone: 'blue' | 'amber' | 'emerald'
}

export type LinkedSku = {
  id: string
  name: string
  sku: string
  price: string
  muted?: boolean
}

export type OfferingRow = {
  id: string
  title: string
  status: string
  subtitle: string
  chips: string[]
  tone: 'blue' | 'violet' | 'amber'
  skus: LinkedSku[]
  detailPath: string
}

export const offeringKpis: OfferingKpi[] = [
  { id: 'active', label: 'Current Active', value: '4 Offerings', tone: 'blue' },
  { id: 'experiments', label: 'Active Experiments', value: '2 Running', tone: 'amber' },
  { id: 'conversion', label: 'Avg. Conversion', value: '3.82%', tone: 'emerald' },
]

export const offerings: OfferingRow[] = [
  {
    id: 'default',
    title: 'Default Offering',
    status: 'Current Default',
    subtitle: 'The standard set of products shown to all general users.',
    chips: ['Default Logic', 'Updated 2 days ago'],
    tone: 'blue',
    detailPath: '/offerings/default',
    skus: [
      { id: 'premium-annual', name: 'Premium Annual', sku: 'sku_premium_yearly', price: '$99.00' },
      { id: 'premium-monthly', name: 'Premium Monthly', sku: 'sku_premium_monthly', price: '$9.99' },
      { id: 'add-sku', name: '+ Add SKU', sku: '', price: '', muted: true },
    ],
  },
  {
    id: 'winter-sale',
    title: 'Winter Sale 2024',
    status: 'Campaign Active',
    subtitle: 'Special seasonal discount targeting users in Northern Hemisphere regions.',
    chips: ['New Users Only', 'US, EU, CA', 'Ends in 14 Days'],
    tone: 'violet',
    detailPath: '/offerings/winter-sale-2024',
    skus: [
      {
        id: 'winter-special-annual',
        name: 'Winter Special Annual',
        sku: 'sku_winter_sale_yearly',
        price: '$49.50',
      },
      { id: 'premium-monthly', name: 'Premium Monthly', sku: 'sku_premium_monthly', price: '$9.99' },
      { id: 'add-sku', name: '+ Add SKU', sku: '', price: '', muted: true },
    ],
  },
  {
    id: 'retention',
    title: 'Retention Win-back',
    status: 'Operational',
    subtitle: 'Triggered automatically when a user visits the cancellation survey.',
    chips: ['Lapsed Users', '8.4% Win-back Rate'],
    tone: 'amber',
    detailPath: '/offerings/retention-win-back',
    skus: [
      { id: 'winback-3m', name: 'Winback 3-Month', sku: 'sku_retention_discount', price: '$14.99' },
      { id: 'add-sku', name: '+ Add SKU', sku: '', price: '', muted: true },
    ],
  },
]
