import { Constructor } from 'awilix'
import { EntryPoint } from './entry-point.interface'

export interface EntryPointInfo {
  constructor: Constructor<EntryPoint>
  name: string
  version: string
}
