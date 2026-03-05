export const productCore = {
  name: 'VIP Pass (Monthly)',
  id: 'vip_pass_monthly',
  description:
    'Unlock premium features, remove ads, and get exclusive access to monthly content updates.',
}

export const storeIdentifiers = [
  {
    store: 'App Store',
    badge: 'bg-blue-500',
    value: 'com.ottclouds.reelseries.vip_pass_1_month',
  },
  {
    store: 'Play Store',
    badge: 'bg-emerald-500',
    value: 'premium_version:sub-1-month',
  },
  {
    store: 'Stripe',
    badge: 'bg-indigo-500',
    value: 'prod_TeigYP1Hd8UtS5',
  },
]

export const healthChecks = [
  {
    title: 'Apple ID Verified',
    detail: 'Metadata matches App Store Connect',
    healthy: true,
  },
  {
    title: 'Play Store ID Verified',
    detail: 'Synced 2 hours ago',
    healthy: true,
  },
  {
    title: 'Stripe SKU Linked',
    detail: 'Price ID confirmed',
    healthy: true,
  },
  {
    title: 'Web Billing Active',
    detail: 'Optional configuration',
    healthy: false,
  },
]

export const metadata = [
  { label: 'Created', value: 'Nov 11, 2025' },
  { label: 'Last Sync', value: 'Today, 10:42 AM' },
  { label: 'Entitlements', value: '1 linked' },
]
