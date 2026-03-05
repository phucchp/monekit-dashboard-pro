export type Tier = {
  id: string
  title: string
  subtitle: string
}

export const topUpTiers: Tier[] = [
  { id: 'small-bag', title: 'Small Bag', subtitle: '100 Gems for $0.99' },
  { id: 'handful', title: 'Handful of Gems', subtitle: '550 Gems for $4.99' },
  { id: 'vault', title: 'Treasure Vault', subtitle: '1200 Gems for $9.99' },
]
