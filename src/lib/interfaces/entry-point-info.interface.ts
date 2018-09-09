import { Constructor } from 'awilix';

export interface EntryPointInfo {
  constructor: Constructor<any>
  name: string
  version: string
}