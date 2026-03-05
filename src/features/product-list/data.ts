export type ProductRow = {
  name: string
  id: string
  status?: 'Published' | 'Missing Metadata'
  entitlement: string
  created: string
}

export type StoreSection = {
  key: string
  title: string
  actionLabel: string
  secondaryActionLabel?: string
  rows: ProductRow[]
}

export const storeSections: StoreSection[] = [
  {
    key: 'web',
    title: 'Web Billing',
    actionLabel: 'New',
    secondaryActionLabel: 'Subscription Changes',
    rows: [
      {
        name: 'VIP Pass (Monthly)',
        id: 'web_vippass_monthly',
        entitlement: '1 Entitlement',
        created: 'Nov 11, 2025',
      },
      {
        name: 'VIP Pass (Yearly)',
        id: 'web_vippass_yearly',
        entitlement: '1 Entitlement',
        created: 'Nov 11, 2025',
      },
      {
        name: '50 Coins',
        id: 'com.ottclouds.reelseries.iap.coin.50',
        entitlement: 'Attach',
        created: 'Jan 13, 2026',
      },
    ],
  },
  {
    key: 'appstore',
    title: 'App Store',
    actionLabel: 'New',
    rows: [
      {
        name: 'Goi 1 thang',
        id: 'com.ottclouds.reelseries.vip_pass_1_month',
        status: 'Missing Metadata',
        entitlement: '1 Entitlement',
        created: 'Dec 03, 2025',
      },
      {
        name: '100 Coins',
        id: 'com.ottclouds.reelseries.iap.coin.100',
        status: 'Missing Metadata',
        entitlement: 'Attach',
        created: 'Jan 09, 2026',
      },
    ],
  },
  {
    key: 'playstore',
    title: 'Play Store',
    actionLabel: 'New',
    secondaryActionLabel: 'Import',
    rows: [
      {
        name: 'VIP Pass (Monthly)',
        id: 'premium_version:sub-1-month',
        status: 'Published',
        entitlement: '1 Entitlement',
        created: 'Dec 04, 2025',
      },
      {
        name: 'VIP Pass (Quarterly)',
        id: 'premium_version:sub-3-month',
        status: 'Published',
        entitlement: '1 Entitlement',
        created: 'Dec 04, 2025',
      },
      {
        name: 'com.ottclouds.reelseries.iap.coin.120',
        id: 'com.ottclouds.reelseries.iap.coin.120',
        status: 'Published',
        entitlement: 'Attach',
        created: 'Jan 13, 2026',
      },
    ],
  },
  {
    key: 'stripe',
    title: 'Stripe',
    actionLabel: 'New',
    rows: [
      {
        name: 'VIP Pass',
        id: 'prod_TeigYP1Hd8UtS5',
        status: 'Published',
        entitlement: '1 Entitlement',
        created: 'Dec 23, 2025',
      },
    ],
  },
]
