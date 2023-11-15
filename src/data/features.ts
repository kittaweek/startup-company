import type { IFeature } from '@/interfaces/main'

const features: IFeature[] = [
  {
    type: 'features',
    sub_type: 'base',
    name: 'Landing page',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: [
      { role: 'Developer', name: 'UI Component', unit: 1 },
      { role: 'Developer', name: 'Backend Component', unit: 1 },
      { role: 'Designer', name: 'Blueprint Component', unit: 1 },
      { role: 'Designer', name: 'Graphics Component', unit: 1 }
    ]
  },
  {
    type: 'features',
    sub_type: 'base',
    name: 'Video functionality',
    is_social_media: false,
    is_shopping_platform: false,
    is_streaming_service: false,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: [
      { role: 'Lead Developer', name: 'Frontend Module', unit: 1 },
      { role: 'Lead Developer', name: 'Video Playback Module', unit: 1 }
    ]
  },
  {
    type: 'features',
    sub_type: 'base',
    name: 'Comment Functionality',
    is_social_media: true,
    is_shopping_platform: false,
    is_streaming_service: false,
    is_video_sharing_service: false,
    is_dating_platform: true,
    is_gaming_platform: false,
    resources: [
      { role: 'Lead Developer', name: 'Backend Module', unit: 3 },
      { role: 'Lead Developer', name: 'Input Module', unit: 3 }
    ]
  },
  {
    type: 'features',
    sub_type: 'base',
    name: 'Image Upload',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: false,
    is_video_sharing_service: false,
    is_dating_platform: true,
    is_gaming_platform: false,
    resources: [
      { role: 'Lead Developer', name: 'Input Module', unit: 1 },
      { role: 'Lead Developer', name: 'Storage Module', unit: 2 },
      { role: 'Lead Developer', name: 'Database Layer', unit: 2 },
      { role: 'Lead Developer', name: 'Frontend Module', unit: 1 },
      { role: 'Designer', name: 'UI Set', unit: 1 }
    ]
  },
  {
    type: 'features',
    sub_type: 'base',
    name: 'Chat System',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: false,
    resources: [
      { role: 'Lead Developer', name: 'Database Layer', unit: 1 },
      { role: 'Lead Developer', name: 'Input Module', unit: 1 },
      { role: 'Lead Developer', name: 'Notification Module', unit: 2 },
      { role: 'Developer', name: 'Network Component', unit: 3 },
      { role: 'Lead Developer', name: 'Api Client Module', unit: 2 },
      { role: 'Designer', name: 'Design Guidelines', unit: 1 }
    ]
  },
  {
    type: 'features',
    sub_type: 'revenue',
    name: 'Text Ads',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: []
  },
  {
    type: 'features',
    sub_type: 'revenue',
    name: 'Subscriptions',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: []
  },
  {
    type: 'features',
    sub_type: 'revenue',
    name: 'Banner Ads',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: []
  },
  {
    type: 'features',
    sub_type: 'revenue',
    name: 'Video Ads',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: []
  },
  {
    type: 'features',
    sub_type: 'enhancement',
    name: 'Ad Block Obfuscator',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: [
      { role: 'Lead Developer', name: 'Code Optimization Module', unit: 2 },
      { role: 'Designer', name: 'UI Set', unit: 4 },
      { role: 'Lead Developer', name: 'Api Client Module', unit: 2 },
      { role: 'Researcher', name: 'Research Point', unit: 200 }
    ]
  },
  {
    type: 'features',
    sub_type: 'enhancement',
    name: 'DDOS Protection',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: [
      { role: 'Lead Developer', name: 'Code Optimization Module', unit: 1 },
      { role: 'Lead Developer', name: 'Api Client Module', unit: 2 },
      { role: 'Researcher', name: 'Research Point', unit: 200 },
      { role: 'System Admin', name: 'Swarm Management', unit: 1 },
      { role: 'System Admin', name: 'Firewall', unit: 5 }
    ]
  },
  {
    type: 'features',
    sub_type: 'enhancement',
    name: 'Help system',
    is_social_media: true,
    is_shopping_platform: true,
    is_streaming_service: true,
    is_video_sharing_service: true,
    is_dating_platform: true,
    is_gaming_platform: true,
    resources: [
      { role: 'Lead Developer', name: 'Content Management Module', unit: 4 },
      { role: 'Lead Developer', name: 'Input Module', unit: 4 },
      { role: 'Lead Developer', name: 'Frontend Module', unit: 3 },
      { role: 'Lead Developer', name: 'Backend Module', unit: 3 },
      { role: 'Designer', name: 'UI Set', unit: 2 }
    ]
  }
]
export default features
