import { provide } from '@app/lib/provide'

export function provideService () {
  const useValue = {
    do: jest.fn().mockName('do')
  }
  provide('service', {
    provider: {
      useValue
    }
  })
  return useValue
}
