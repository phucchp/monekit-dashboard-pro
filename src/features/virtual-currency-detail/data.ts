export type PackageRow = {
  id: string
  sku: string
  name: string
  amount: string
  price: string
  status: 'Active' | 'Draft'
}

export type WebhookEvent = {
  id: string
  name: string
  code: string
  time: string
  tone: 'success' | 'warning'
}

export const packageRows: PackageRow[] = [
  {
    id: 'gem-001',
    sku: 'GEM_001',
    name: 'Handful of Gems',
    amount: '100',
    price: '$0.99',
    status: 'Active',
  },
  {
    id: 'gem-002',
    sku: 'GEM_002',
    name: 'Pouch of Gems',
    amount: '550\n+ bonus 50',
    price: '$4.99',
    status: 'Active',
  },
  {
    id: 'gem-003',
    sku: 'GEM_003',
    name: 'Treasure Vault',
    amount: '1200\n+ bonus 200',
    price: '$9.99',
    status: 'Draft',
  },
]

export const webhookEvents: WebhookEvent[] = [
  {
    id: 'evt-1',
    name: 'balance.updated',
    code: 'ID: evt_1Mk9...2xL',
    time: '10:42 AM',
    tone: 'success',
  },
  {
    id: 'evt-2',
    name: 'package.created',
    code: 'ID: evt_1Mk8...9aB',
    time: '09:15 AM',
    tone: 'success',
  },
  {
    id: 'evt-3',
    name: 'sync.failed',
    code: 'ID: evt_1Mk7...3zP',
    time: 'Yesterday, 11:30 PM',
    tone: 'warning',
  },
  {
    id: 'evt-4',
    name: 'balance.updated',
    code: 'ID: evt_1Mk6...5yQ',
    time: 'Yesterday, 08:00 PM',
    tone: 'success',
  },
]
