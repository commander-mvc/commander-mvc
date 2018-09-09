import { LifetimeType } from 'awilix/lib/lifetime'
import { Constructor, FunctionReturning } from 'awilix'

export interface InjectableTable {
  [token: string]: InjectableTableEntry<any>
}

export interface InjectableTableEntry<T> {
  lifetime?: LifetimeType
  provider: Provider<T>
}

export interface Provider<T> {
  useValue?: any
  useConstructor?: Constructor<T>
  useFactory?: FunctionReturning<T> | ((...args: any[]) => any)
}
