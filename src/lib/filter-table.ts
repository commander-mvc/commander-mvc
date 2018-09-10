import { FilterTableEntry } from './interfaces'

export const table: FilterTableEntry[] = []

export function add (token: string, entry: FilterTableEntry) {
  table.push(entry)
}
