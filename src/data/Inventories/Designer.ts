import type { IInventory } from '@/interfaces/main'

const invertories_designer: IInventory[] = [
  {
    level: 'Beginner',
    name: 'Blueprint Component',
    time: 2,
    resources: []
  },
  {
    level: 'Beginner',
    name: 'Wireframe Component',
    time: 3,
    resources: []
  },
  {
    level: 'Beginner',
    name: 'Graphics Component',
    time: 4,
    resources: []
  },
  {
    level: 'Beginner',
    name: 'UI Element',
    time: 6,
    resources: [
      { role: 'Designer', name: 'Blueprint Component', unit: 1 },
      { role: 'Designer', name: 'Graphics Component', unit: 1 }
    ]
  },
  {
    level: 'Intermediate',
    name: 'UI Set',
    time: 18,
    resources: [
      { role: 'Designer', name: 'Wireframe Component', unit: 2 },
      { role: 'Designer', name: 'UI Element', unit: 2 }
    ]
  },
  {
    level: 'Intermediate',
    name: 'Responsive UI',
    time: 18,
    resources: [
      { role: 'Designer', name: 'Wireframe Component', unit: 2 },
      { role: 'Designer', name: 'UI Element', unit: 2 }
    ]
  },
  {
    level: 'Expert',
    name: 'Documentation Component',
    time: 12,
    resources: []
  },
  {
    level: 'Expert',
    name: 'Design Guidelines',
    time: 90,
    resources: [
      { role: 'Designer', name: 'Documentation Component', unit: 3 },
      { role: 'Designer', name: 'Responsive UI', unit: 3 }
    ]
  }
]
export default invertories_designer
