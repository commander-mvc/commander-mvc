import { add, get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from '../decorators/injectable'
import { last } from 'lodash'
import { wrapAsync } from '../wrap-async'
import { container } from '../container'
import { ControllerInfo } from '../interfaces/controller-table.interface'
import { Options } from '../interfaces/action-info.interface'

export function Controller (controller: ControllerInfo) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, controller)
    const entry = get(token)
    const { actionsForOptions, actionViews } = entry
    entry.registerCommand = (cliService, instance) => {
      const command = cliService
        .command(controller.command)
      controller.options.forEach(option => {
        (command as any)
          .option(...option)
      })
      command
        .action(async (...args) => {
          const options: Options = last(args)
          for (const { forOptions, methodName } of actionsForOptions) {
            if (forOptions(options)) {
              await wrapAsync(async () => {
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
