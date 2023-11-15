import type { IMarketing } from '@/interfaces/main'

const marketings: IMarketing[] = [
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'Email Campaigns',
    resources: []
  },
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'Text Ads',
    resources: [
      { role: 'Maketer', name: 'Copywriting', unit: 6 },
      { role: 'Maketer', name: 'Text Format', unit: 6 }
    ]
  },
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'Banner Ads',
    resources: [
      { role: 'Maketer', name: 'Copywriting', unit: 4 },
      { role: 'Maketer', name: 'Text Format', unit: 2 },
      { role: 'Maketer', name: 'Image Format', unit: 12 }
    ]
  },
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'Video Ads',
    resources: [
      { role: 'Maketer', name: 'Copywriting', unit: 4 },
      { role: 'Maketer', name: 'Video Format', unit: 20 },
      { role: 'Maketer', name: 'Image Format', unit: 2 }
    ]
  },
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'Radio/Podcast',
    resources: [
      { role: 'Maketer', name: 'Copywriting', unit: 20 },
      { role: 'Maketer', name: 'Audio format', unit: 20 }
    ]
  },
  {
    type: 'marketings',
    sub_type: 'campaign',
    name: 'TV Commercial',
    resources: [
      { role: 'Maketer', name: 'Copywriting', unit: 20 },
      { role: 'Maketer', name: 'Video Format', unit: 20 },
      { role: 'Maketer', name: 'Contract Agreement', unit: 20 }
    ]
  }
]
export default marketings
