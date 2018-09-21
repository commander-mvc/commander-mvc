import { ActionInfo, DEFAULT_ACTION_INFO } from '../interfaces/action-info.interface'
import { createActionRegistration } from '@app/lib/factories/create-action-registration'

/**
 * Creates an `Action` decorator.
 * @param action `Action` information that specifies the view and which
 * options this `Action` will handle.
 * @returns The decorator used to designate a method an action.
 */
export function Action (actionInfo: ActionInfo = DEFAULT_ACTION_INFO) {
  return (controller, methodName: string) => {
    createActionRegistration({ controller, methodName, actionInfo })
  }
}
