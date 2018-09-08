import { add, get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from './injectable'
import { last } from 'lodash'
import { wrapAsync } from '../wrap-async'
import { container } from '../container'

export function Controller (options) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, options)
    const entry = get(token)
    const { actionsForOptions, actionViews } = entry
    entry.registerCommand = (prefix, cliService, instance) => {
      const command = cliService
        .command(options.command)
      options.options.forEach(option => {
        command
          .option(...option)
      })
      command
        .action(async (...args) => {
          const cmd = last(args)
          for (const { forOptions, methodName } of actionsForOptions) {
            if (forOptions(cmd)) {
              await wrapAsync(async () => {
                const model = await instance[methodName](cmd)
                const View = actionViews[methodName]
                if (View) {
                  const view = new View(container.cradle)
                  view.print(model)
                }
              })
              break
            }
          }
        })
    }
    Injectable()(constructor)
  }
}
