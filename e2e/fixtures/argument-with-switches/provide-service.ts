import { provideServiceValue } from '@e2e/fixtures/common/provide-service-value'

export function provideService () {
  const useValue = {
    do: jest.fn().mockName('do')
  }
  provideServiceValue({ useValue })
  return useValue
}
