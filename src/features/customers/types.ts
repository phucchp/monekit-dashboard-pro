export type CustomerStatus = 'Active' | 'Trialing' | 'Canceled'

export type Customer = {
  initials: string
  avatarTone: string
  name: string
  email: string
  status: CustomerStatus
  plan: string
  spend: string
  platform: string
}

export type CustomerMetric = {
  label: string
  value: string
  hint?: string
}
