import { entryPointInfo } from '../entry-point-info'

export function EntryPoint ({ name, version }: { name: string, version: string }) {
  return () => {
    console.log('set name and version')
    Object.assign(entryPointInfo, { name, version })
  }
}
