import { TakeArg, HasArg, View } from './interfaces'
import { container } from './container'
import { Options, ForOptions } from './interfaces/action-info.interface'
import { filterExceptions } from './filter-exceptions'
import { last, first } from 'lodash'
import { Constructor } from 'awilix'

export function createActionHandler ({ token, actions }: {
  token: string,
  actions: { methodName: string, forOptions: ForOptions, view: Constructor<View> }[]
}) {
  return async (...args: any[]) => {
    const options: Options = last(args)
    const controller = container.resolve<HasArg & TakeArg>(token)
    const arg = first(args)
    if (controller.takeArg) {
      controller.takeArg(arg)
    }
    controller.arg = arg
    for (const { forOptions, methodName, view } of actions) {
      if (forOptions(options)) {
        await filterExceptions(async () => {
          const model = await controller[methodName](options)
          if (view) {
            new view(container.cradle).print(model)
          }
        })
        break
      }
    }
  }
}
