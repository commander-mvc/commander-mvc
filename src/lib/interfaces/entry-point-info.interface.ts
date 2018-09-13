import { Constructor } from 'awilix'
import { Runnable } from './runnable.interface'

export interface EntryPointInfo extends MetaInfo {
  constructor: Constructor<Runnable>
}

export interface MetaInfo {
  name: string
  version: string
}
