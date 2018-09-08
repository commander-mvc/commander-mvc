import { entryPointInfo } from '../entry-point-info'

export function EntryPoint ({ name, version }) {
  return () => {
    Object.assign(entryPointInfo, { name, version })
  }
}
