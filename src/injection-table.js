const table = {}

export function add (token, options) {
  table[token] = options
}

export function get (token) {
  return table[token]
}
