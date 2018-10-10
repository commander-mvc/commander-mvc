import { ControllerTable, ControllerTableEntry, ControllerInfo } from '../interfaces/controller-table.interface'
import { includes } from 'lodash'

const table: ControllerTable = {} as ControllerTable

export function addController (
  token: string,
  entry: ControllerTableEntry | ControllerInfo = {} as ControllerTableEntry
) {
  if (controllerExists(token)) {
    Object.assign(table[token], entry)
  } else {
    table[token] = newControllerEntry(entry)
  }
  return table[token]
}

export function getController (token: string) {
  if (!controllerExists(token)) {
    table[token] = newControllerEntry()
  }
  return table[token]
}

export function controllerExists (token: string) {
  return includes(Object.keys(table), token)
}

export function newControllerEntry (
  extend: ControllerTableEntry | ControllerInfo = {} as ControllerTableEntry
): ControllerTableEntry {
  return Object.assign({
    command: '',
    optionDefinitions: [],
    registerCommand: () => { return },
    actionsForOptions: [],
    actionViews: {}
  }, extend)
}
