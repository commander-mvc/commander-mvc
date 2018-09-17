import { InjectableTable, InjectableTableEntry } from './interfaces/injectable-table.interface'
const table: InjectableTable = {}

export function addInjectable (token: string, entry: InjectableTableEntry<any>) {
  table[token] = entry
}

export function getInjectable (token: string) {
  return table[token]
}
