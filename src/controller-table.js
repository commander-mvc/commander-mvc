import { includes } from 'lodash'

const table = {}

export function add (token, options = {}) {
  if (contains(token)) {
    Object.assign(table[token], options)
  } else {
    table[token] = newEntry(options)
  }
}

export function get (token) {
  if (!contains(token)) {
    table[token] = newEntry()
  }
  return table[token]
}

export function contains (token) {
  return includes(Object.keys(table), token)
}

function newEntry (extend) {
  return Object.assign({
    registerCommand: () => {},
    actionsForOptions: [],
    actionViews: {}
  }, extend)
}
