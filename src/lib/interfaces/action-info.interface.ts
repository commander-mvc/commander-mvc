import { View } from './view.interface'
import { Constructor } from 'awilix'

export interface ActionInfo {
  view?: Constructor<View>
  forOptions: ForOptions
}

export const DEFAULT_ACTION_INFO = { forOptions: () => true }

export type Option = string | boolean | Array<string>

export interface Options {
  [key: string]: Option
}

export type ForOptions = (options: Options) => boolean
