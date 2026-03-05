import type { Customer, CustomerMetric, CustomerStatus } from './types'

export const customers: Customer[] = [
  {
    initials: 'JS',
    avatarTone: 'bg-indigo-100 text-indigo-600',
    name: 'Jordan Smith',
    email: 'jordan.smith@example.com',
    status: 'Active',
    plan: 'Premium Annual',
    spend: '$297.00',
    platform: 'iOS • Web',
  },
  {
    initials: 'SC',
    avatarTone: 'bg-amber-100 text-amber-700',
    name: 'Sarah Chen',
    email: 's.chen@techcorp.io',
    status: 'Trialing',
    plan: 'Pro Monthly',
    spend: '$0.00',
    platform: 'iOS',
  },
  {
    initials: 'MA',
    avatarTone: 'bg-slate-200 text-slate-600',
    name: 'Marcus Aurelius',
    email: 'm.aurelius@stoic.com',
    status: 'Canceled',
    plan: 'None',
    spend: '$45.90',
    platform: 'Web',
  },
  {
    initials: 'DM',
    avatarTone: 'bg-orange-100 text-orange-700',
    name: 'David Miller',
    email: 'd.miller@gmail.com',
    status: 'Active',
    plan: 'Premium Monthly',
    spend: '$119.88',
    platform: 'iOS • Android',
  },
]

export const customerMetrics: CustomerMetric[] = [
  { label: 'Growth Rate', value: '+8.4%', hint: 'mo/mo' },
  { label: 'Avg LTV', value: '$842.00' },
  { label: 'Churned Users', value: '124', hint: 'last 30d' },
]

export const statusStyles: Record<CustomerStatus, string> = {
  Active: 'bg-emerald-100 text-emerald-700',
  Trialing: 'bg-blue-100 text-blue-600',
  Canceled: 'bg-slate-200 text-slate-600',
}
