import chalk from 'chalk'
import { table } from './filter-table'
import { container } from './container'
import { inspect } from 'util'

export async function wrapAsync (fn) {
  try {
    await fn()
  } catch (error) {
    let filtered = false
    for (let { Catches, Filter } of table) {
      if (error instanceof Catches) {
        const filter = new Filter(container.cradle)
        filter.catch(error)
      }
      filtered = true
    }
    if (!filtered) {
      console.log(chalk.bold.red(`Unfiltered error: ${inspect(error)}`))
    }
  }
}
