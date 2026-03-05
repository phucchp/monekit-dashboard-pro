export type ProjectRow = {
  name: string
  id: string
  createdAt: string
  activeUsers: string
  revenue24h: string
  environment: 'Production' | 'Beta' | 'Staging'
  iconTone: 'indigo' | 'purple' | 'emerald' | 'orange' | 'pink' | 'sky'
  iconKind: 'fitness' | 'education' | 'wallet' | 'game' | 'music' | 'health'
  platforms: Array<'web' | 'ios' | 'android'>
}

export const projectRows: ProjectRow[] = [
  {
    name: 'Fitness Tracker iOS',
    id: 'ft-ios-prod-8821',
    createdAt: 'Oct 12, 2023',
    activeUsers: '12.4k',
    revenue24h: '$2,480',
    environment: 'Production',
    iconTone: 'indigo',
    iconKind: 'fitness',
    platforms: ['ios', 'android'],
  },
  {
    name: 'EduLearn Web',
    id: 'edulearn-web-prod-1940',
    createdAt: 'Nov 05, 2023',
    activeUsers: '45.2k',
    revenue24h: '$8,120',
    environment: 'Production',
    iconTone: 'purple',
    iconKind: 'education',
    platforms: ['web', 'ios'],
  },
  {
    name: 'Finance Wallet',
    id: 'finance-wallet-beta-5530',
    createdAt: 'Dec 01, 2023',
    activeUsers: '2.8k',
    revenue24h: '$590',
    environment: 'Beta',
    iconTone: 'emerald',
    iconKind: 'wallet',
    platforms: ['android'],
  },
  {
    name: 'Neo RPG Game',
    id: 'neo-rpg-prod-9981',
    createdAt: 'Jan 14, 2024',
    activeUsers: '89.4k',
    revenue24h: '$15,240',
    environment: 'Production',
    iconTone: 'orange',
    iconKind: 'game',
    platforms: ['web', 'ios', 'android'],
  },
  {
    name: 'Aura Music',
    id: 'aura-music-staging-4730',
    createdAt: 'Feb 02, 2024',
    activeUsers: '15.1k',
    revenue24h: '$3,150',
    environment: 'Staging',
    iconTone: 'pink',
    iconKind: 'music',
    platforms: ['ios'],
  },
  {
    name: 'Vital Pulse',
    id: 'vital-pulse-prod-3002',
    createdAt: 'Mar 10, 2024',
    activeUsers: '5.4k',
    revenue24h: '$1,100',
    environment: 'Production',
    iconTone: 'sky',
    iconKind: 'health',
    platforms: ['web', 'android'],
  },
]
