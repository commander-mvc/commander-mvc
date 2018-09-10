import { SERVICE_TOKEN } from './service-token'
import { provide } from '@app/lib/provide'

export function provideServiceValue ({ useValue }) {
  provide(SERVICE_TOKEN, {
    provider: { useValue }
  })
}
