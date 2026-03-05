export type SkuItem = {
  id: string
  name: string
  sku: string
  price: string
  note: string
}

export const skuItems: SkuItem[] = [
  {
    id: 'winter-special-annual',
    name: 'Winter Special Annual',
    sku: 'sku_winter_sale_yearly • Yearly Subscription',
    price: '$49.50',
    note: '50% Discount',
  },
  {
    id: 'premium-monthly',
    name: 'Premium Monthly',
    sku: 'sku_premium_monthly • Recurring Monthly',
    price: '$9.99',
    note: 'Standard Price',
  },
]

export const ruleTags = {
  regions: ['US', 'EU', 'CA', 'UK'],
  segments: ['New Users Only', 'Non-Subscribers'],
}
