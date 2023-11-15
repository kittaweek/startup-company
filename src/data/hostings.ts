import type { IHosting } from '@/interfaces/main'

const hostings: IHosting[] = [
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Small Web Server',
    power: 2.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 2 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 2 },
      { role: 'System Admin', name: 'Operating System', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Small Cache Server',
    power: 2.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 2 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 2 },
      { role: 'System Admin', name: 'Operating System', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Small Database Server',
    power: 2.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 2 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 2 },
      { role: 'System Admin', name: 'Operating System', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '2U Web Server',
    power: 4.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 4 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 4 },
      { role: 'System Admin', name: 'Operating System', unit: 4 },
      { role: 'System Admin', name: 'Process Management', unit: 2 },
      { role: 'System Admin', name: 'Cron Job', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '2U Cache Server',
    power: 4.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 4 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 4 },
      { role: 'System Admin', name: 'Operating System', unit: 4 },
      { role: 'System Admin', name: 'Process Management', unit: 2 },
      { role: 'System Admin', name: 'Cron Job', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '2U Database Server',
    power: 4.5,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 4 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 4 },
      { role: 'System Admin', name: 'Operating System', unit: 4 },
      { role: 'System Admin', name: 'Process Management', unit: 2 },
      { role: 'System Admin', name: 'Cron Job', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '4U(Blade) Web Server',
    power: 8,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 15 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 15 },
      { role: 'System Admin', name: 'Operating System', unit: 15 },
      { role: 'System Admin', name: 'Process Management', unit: 4 },
      { role: 'System Admin', name: 'Cron Job', unit: 4 },
      { role: 'System Admin', name: 'Continuous Integration', unit: 4 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '4U(Blade) Cache Server',
    power: 8,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 15 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 15 },
      { role: 'System Admin', name: 'Operating System', unit: 15 },
      { role: 'System Admin', name: 'Process Management', unit: 4 },
      { role: 'System Admin', name: 'Cron Job', unit: 4 },
      { role: 'System Admin', name: 'Continuous Integration', unit: 4 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: '4U(Blade) Database Server',
    power: 8,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 15 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 15 },
      { role: 'System Admin', name: 'Operating System', unit: 15 },
      { role: 'System Admin', name: 'Process Management', unit: 4 },
      { role: 'System Admin', name: 'Cron Job', unit: 4 },
      { role: 'System Admin', name: 'Continuous Integration', unit: 4 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Web XServer',
    power: 14,
    resources: [
      { role: 'System Admin', name: 'Virtual container', unit: 8 },
      { role: 'System Admin', name: 'Cluster', unit: 5 },
      { role: 'System Admin', name: 'Swarm Management', unit: 5 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Cache XServer',
    power: 14,
    resources: [
      { role: 'System Admin', name: 'Virtual container', unit: 8 },
      { role: 'System Admin', name: 'Cluster', unit: 5 },
      { role: 'System Admin', name: 'Swarm Management', unit: 5 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'building',
    name: 'Database XServer',
    power: 14,
    resources: [
      { role: 'System Admin', name: 'Virtual container', unit: 8 },
      { role: 'System Admin', name: 'Cluster', unit: 5 },
      { role: 'System Admin', name: 'Swarm Management', unit: 5 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'cloud',
    name: 'Fastclouds Mini',
    power: 0,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 2 },
      { role: 'System Admin', name: 'Operating System', unit: 2 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 2 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'cloud',
    name: 'Fastclouds Pro',
    power: 0,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 8 },
      { role: 'Developer', name: 'Network Component', unit: 8 },
      { role: 'System Admin', name: 'Operating System', unit: 8 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 8 }
    ]
  },
  {
    type: 'hostings',
    sub_type: 'cloud',
    name: 'Fastclouds Ultra',
    power: 0,
    resources: [
      { role: 'System Admin', name: 'Firewall', unit: 20 },
      { role: 'Developer', name: 'Network Component', unit: 30 },
      { role: 'System Admin', name: 'Operating System', unit: 30 },
      { role: 'System Admin', name: 'Virtual Hardware', unit: 30 }
    ]
  }
]
export default hostings
