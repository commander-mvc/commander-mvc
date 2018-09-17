import { FilterTableEntry } from '../interfaces'

export const table: FilterTableEntry[] = []

export function addFilter (token: string, entry: FilterTableEntry) {
  table.push(entry)
}
