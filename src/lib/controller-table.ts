import { ControllerTable, ControllerTableEntry, ControllerInfo } from './interfaces/controller-table.interface'
import { includes } from 'lodash'
import { ActionInfo } from './interfaces/action-info.interface'

const table: ControllerTable = {} as ControllerTable

export function add (
  token: string,
  entry: ControllerTableEntry | ControllerInfo = {} as ControllerTableEntry
) {
  if (contains(token)) {
    Object.assign(table[token], entry)
  } else {
    table[token] = newEntry(entry)
  }
}

export function get (token: string) {
  if (!contains(token)) {
    table[token] = newEntry()
  }
  return table[token]
}

export function contains (token: string) {
  return includes(Object.keys(table), token)
}

function newEntry (
  extend: ControllerTableEntry | ControllerInfo = {} as ControllerTableEntry
): ControllerTableEntry {
  return Object.assign({
    command: '',
    optionDefinitions: [],
    registerCommand: null,
    actionsForOptions: [],
    actionViews: {}
  }, extend)
}
