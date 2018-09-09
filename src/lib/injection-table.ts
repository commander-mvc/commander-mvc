import { InjectableTable, InjectableTableEntry } from './interfaces/injectable-table.interface'
const table: InjectableTable = {}

export function add (token: string, entry: InjectableTableEntry<any>) {
  table[token] = entry
}

export function get (token: string) {
  return table[token]
}
