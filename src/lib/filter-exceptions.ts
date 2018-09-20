import chalk from 'chalk'
import { table } from './tables/filter-table'
import { container } from './container'
import { inspect } from 'util'
import { printError } from './print-error'

export async function filterExceptions (fn) {
  try {
    await fn()
  } catch (error) {
    for (let { Catches, Filter } of table) {
      const filter = new Filter(container.cradle)
      if (!Catches || error instanceof Catches) {
        filter.catch(error)
        return
      }
    }
    printError(`Unfiltered error: ${inspect(error)}`)
  }
}
