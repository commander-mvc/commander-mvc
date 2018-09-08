import { Lifetime } from '../'
import { constructorToToken } from '../constructor-to-token'
import { provide } from '../provide'

export function Injectable ({ lifetime, provider } = {}) {
  return constructor => {
    lifetime = lifetime || Lifetime.TRANSIENT
    const token = constructorToToken(constructor)
    provider = provider || { useConstructor: constructor }
    provide(token, {
      lifetime,
      provider
    })
  }
}
