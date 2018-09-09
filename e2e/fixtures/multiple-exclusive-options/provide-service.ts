import { provide } from '@app/lib/provide'

export function provideService ({ option }) {
  const useValue = {
    calculate: jest.fn((input) => `${input} ${option}`).mockName('calculate'),
    display: jest.fn().mockName('display')
  }
  provide('service', {
    provider: {
      useValue
    }
  })
  return useValue
}
