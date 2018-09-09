import { Constructor } from 'awilix'
import { Runnable } from './runnable.interface'

export interface EntryPointInfo {
  constructor: Constructor<Runnable>
  name: string
  version: string
}
