import { ControllerInfo } from '../interfaces/controller-table.interface'
import { createControllerRegistration } from '@app/lib/factories/create-controller-registration'

/**
 * Creates a `Controller` decorator.
 * @param controllerInfo `Controller` information that specifies
 * the command and its options.
 *
 * @returns The decorator used to designate a class a controller.
 */
export function Controller (controllerInfo: ControllerInfo) {
  return (constructor) => {
    createControllerRegistration({ constructor, controllerInfo })
  }
}
