import type { IInventory } from '@/interfaces/main'

const inventories_system_admin: IInventory[] = [
  {
    level: 'Beginner',
    name: 'Virtual Hardware',
    time: 4,
    resources: []
  },
  {
    level: 'Beginner',
    name: 'Operating System',
    time: 4,
    resources: []
  },
  {
    level: 'Beginner',
    name: 'Firewall',
    time: 4,
    resources: []
  },
  {
    level: 'Intermediate',
    name: 'Process Management',
    time: 6,
    resources: []
  },
  {
    level: 'Intermediate',
    name: 'Continuous Integration',
    time: 8,
    resources: []
  },
  {
    level: 'Intermediate',
    name: 'Cron Job',
    time: 3,
    resources: []
  },
  {
    level: 'Expert',
    name: 'Virtual container',
    time: 25,
    resources: [
      { role: 'System Admin', name: 'Virtual Hardware', unit: 1 },
      { role: 'System Admin', name: 'Operating System', unit: 1 },
      { role: 'System Admin', name: 'Process Management', unit: 1 },
      { role: 'System Admin', name: 'Continuous Integration', unit: 1 },
      { role: 'System Admin', name: 'Cron Job', unit: 1 }
    ]
  },
  {
    level: 'Expert',
    name: 'Cluster',
    time: 115,
    resources: [
      { role: 'System Admin', name: 'Virtual container', unit: 3 },
      { role: 'System Admin', name: 'Firewall', unit: 10 }
    ]
  },
  {
    level: 'Expert',
    name: 'Swarm Management',
    time: 140,
    resources: [
      { role: 'System Admin', name: 'Cluster', unit: 1 },
      { role: 'System Admin', name: 'Virtual container', unit: 1 }
    ]
  }
]
export default inventories_system_admin
