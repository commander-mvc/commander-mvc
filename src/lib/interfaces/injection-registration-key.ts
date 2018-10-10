import { Constructor } from 'awilix'
import { InjectableTableEntry } from './injectable-table.interface'
import { registrationKeys } from '../registration-keys'

export type InjectionRegistrationKey = { [key: string]: () => void }
