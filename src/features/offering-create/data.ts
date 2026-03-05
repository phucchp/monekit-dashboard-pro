export type MetadataRow = {
  id: string
  key: string
  value: string
}

export type SelectedProduct = {
  id: string
  name: string
  sku: string
  platform: string
  price: string
  suffix: string
  tone: 'ios' | 'android' | 'stripe'
}

export type TargetRule = {
  id: string
  property: string
  condition: string
  value: string
}

export const metadataRows: MetadataRow[] = [
  { id: 'banner-color', key: 'banner_color', value: '#FF5733' },
  { id: 'discount-text', key: 'discount_text', value: '50% OFF TODAY ONLY' },
]

export const selectedProducts: SelectedProduct[] = [
  {
    id: 'premium-yearly-ios',
    name: 'Premium Yearly',
    sku: 'com.fitness.premium.yearly',
    platform: 'iOS',
    price: '$99.99',
    suffix: 'Auto-Renewable',
    tone: 'ios',
  },
  {
    id: 'premium-yearly-android',
    name: 'Premium Yearly',
    sku: 'sku_premium_yearly_google',
    platform: 'Android',
    price: '$99.99',
    suffix: 'Subscription',
    tone: 'android',
  },
  {
    id: 'yearly-pass-stripe',
    name: 'Yearly Pass',
    sku: 'prod_K1Yk3Lj4Lm5n6',
    platform: 'Web/Stripe',
    price: '$99.00',
    suffix: 'Plan',
    tone: 'stripe',
  },
]

export const targetingRules: TargetRule[] = [
  {
    id: 'country',
    property: 'Region / Country',
    condition: 'Is one of',
    value: 'US    UK    CA    Add country...',
  },
  {
    id: 'platform',
    property: 'OS Platform',
    condition: 'Is exactly',
    value: 'iOS',
  },
]
