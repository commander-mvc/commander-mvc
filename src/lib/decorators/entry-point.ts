import { MetaInfo } from '../interfaces/entry-point-info.interface'
import { entryPointInfo } from '../entry-point-info'

/**
 * Creates an `EntryPoint` decorator.
 * @param metaInfo Meta info about the program. Includes the program
 * name and version.
 * @returns The decorator used to designate the class as a
 * custom entrypoint.
 */
export function EntryPoint (metaInfo: MetaInfo) {
  const { name, version } = metaInfo
  return (target) => {
    Object.assign(entryPointInfo, { name, version })
  }
}
