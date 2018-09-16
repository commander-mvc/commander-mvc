@Injectable({
  lifetime: Lifetime.SINGLETON
}) 
export class MyService {
  constructor ({ apiUrl }) {
    this.apiUrl = apiUrl
  }
}

provide('apiUrl', {
  useValue: 'api.site.com/v1/'
})
