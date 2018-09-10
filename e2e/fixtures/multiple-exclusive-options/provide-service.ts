import { provide } from '@app/lib/provide'
import { provideServiceValue } from '@e2e/fixtures/common/provide-service-value'

export function provideService ({ option }) {
  const useValue = {
    calculate: jest.fn((input) => `${input} ${option}`).mockName('calculate'),
    display: jest.fn().mockName('display')
  }
  provideServiceValue({ useValue })
  return useValue
}
