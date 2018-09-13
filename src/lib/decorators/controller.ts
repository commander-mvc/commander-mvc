import { HasArg } from '../interfaces/has-arg.interface'
import { add, get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from '../decorators/injectable'
import { first, last, each } from 'lodash'
import { wrapAsync } from '../wrap-async'
import { container } from '../container'
import { ControllerInfo } from '../interfaces/controller-table.interface'
import { Options } from '../interfaces/action-info.interface'

/**
 * Creates a decorator for specifying command and options.
 * @param controller controller information that specifies the command options.
 * @returns the decorator.
 */
export function Controller (controller: ControllerInfo) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, controller)
    const entry = get(token)
    const { actionsForOptions, actionViews } = entry
    entry.registerCommand = (cliService, instance: HasArg) => {
      const command = cliService
        .command(controller.command)
      each(controller.options, option => {
        (command as any)
          .option(...option)
      })
      command
        .action(async (...args) => {
          const options: Options = last(args)
          for (const { forOptions, methodName } of actionsForOptions) {
            if (forOptions(options)) {
              await wrapAsync(async () => {
                instance.arg = first(args)
                const model = await instance[methodName](options)
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
