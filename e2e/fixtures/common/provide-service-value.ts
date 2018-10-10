import { SERVICE_TOKEN } from './service-token'
import { provide } from '@app/lib/provide'
import { setServiceProvider } from '@e2e/fixtures/common/service-token'

export function provideServiceValue ({ useValue }) {
  const serviceProvider = provide(SERVICE_TOKEN, {
    provider: { useValue }
  })
  setServiceProvider(serviceProvider)
}
