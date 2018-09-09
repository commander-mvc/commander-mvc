import { entryPointInfo } from '../entry-point-info'

export function EntryPoint ({ name, version }: { name: string, version: string }) {
  return () => {
    Object.assign(entryPointInfo, { name, version })
  }
}
