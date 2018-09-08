import { resolve } from './resolve'

export function resolveAll (providerTokens) {
  return providerTokens.map(token => resolve(token))
}
