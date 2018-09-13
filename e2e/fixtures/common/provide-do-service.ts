import { provideServiceValue } from './provide-service-value'

export function provideDoService () {
  const useValue = {
    do: jest.fn().mockName('do')
  }
  provideServiceValue({ useValue })
  return useValue
}
