import { registrationKeys } from '../registration-keys'
import { ActionInfo, DEFAULT_ACTION_INFO } from '../interfaces/action-info.interface'
import { Constructor } from 'awilix'

export function createActionRegistration ({ controller, methodName, actionInfo }: {
  controller: { constructor: Constructor<any> },
  methodName: string,
  actionInfo: ActionInfo
}) {
  if (!controller.constructor[registrationKeys.actions]) {
    controller.constructor[registrationKeys.actions] = []
  }
  let forOptions = actionInfo.forOptions || DEFAULT_ACTION_INFO.forOptions
  const actionTableEntry = {
    methodName,
    forOptions,
    view: actionInfo.view
  }
  controller.constructor[registrationKeys.actions].push(actionTableEntry)
}
