import { type } from 'os'

export type TRole =
  | 'Designer'
  | 'Developer'
  | 'Lead Developer'
  | 'System Admin'
  | 'Maketer'
  | 'Researcher'
  | 'All'
export type TLevel = 'Beginner' | 'Intermediate' | 'Expert' | 'All'
export interface IRole {
  name: TRole
}
export interface ILevel {
  name: TLevel
}

export interface IResource {
  role: TRole
  name: string
  unit: number
}
export interface IResourceCal extends IResource {
  featureUnit: number
}
export type TType = 'hostings' | 'features' | 'marketings'
export interface IType {
  name: TType
}
export type TFeatureType = 'base' | 'revenue' | 'enhancement'
export type THostingType = 'building' | 'cloud'
export type TMarketingType = 'campaign'
export interface IProduct {
  type: TType
  sub_type: TFeatureType | THostingType | TMarketingType
  name: string
  resources: IResource[]
}
export interface IFeature extends IProduct {
  is_social_media: boolean
  is_shopping_platform: boolean
  is_streaming_service: boolean
  is_video_sharing_service: boolean
  is_dating_platform: boolean
  is_gaming_platform: boolean
}
export interface IHosting extends IProduct {
  power: number
}
export interface IMarketing extends IProduct {}

export interface IInventory {
  level: TLevel
  name: string
  time: number
  resources?: IResource[]
}
export interface IFeatureForm {
  type: string
  sub_type: string
  name: string
  selected: boolean
  unit: number
  resources: IResource[]
}
export interface IHostingForm extends IFeatureForm {
  power: number
}

export interface IMarketingForm extends IFeatureForm {}

export interface IInventoriesDetail {
  role: TRole
  level: TLevel
  name: string
  time: number
  unit: number
}
export type TShowForm = 'is_features' | 'is_hostings' | 'is_marketings'
export interface IShowForm {
  is_features: boolean
  is_hostings: boolean
  is_marketings: boolean
}
