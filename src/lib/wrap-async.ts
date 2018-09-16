import chalk from 'chalk'
import { table } from './filter-table'
import { container } from './container'
import { inspect } from 'util'

export async function wrapAsync (fn) {
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
    error(`Unfiltered error: ${inspect(error)}`)
  }
}

function error (message: string) {
  console.error(chalk.bold.red(message))
}
