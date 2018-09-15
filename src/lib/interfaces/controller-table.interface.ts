import { CommanderStatic } from 'commander'
import { Constructor } from 'awilix'
import { ForOptions } from './action-info.interface'
import { View } from './view.interface'

export interface ControllerTable {
  [controllerName: string]: ControllerTableEntry
}

export interface ControllerTableEntry extends ControllerInfo {
  registerCommand: () => void
  actionsForOptions: ForOptionsMethodPair[]
  actionViews: ViewMap
}

/**
 * Meta information for a controller.
 */
export interface ControllerInfo {
  /**
   * A standard commander.js command that optionally specifies an argument.
   * An argument in ``<>`` braces indicates it is required, while ``[]``
   * indicates it is optional. Within in action, the argument is accessed
   * with ``this.arg``.
   *
   * Examples:
   *  - ``list <dir>``
   *  - ``list [dir]``
   *  - ``list``
   */
  command: string,

  /**
   * An array of option definitions. Each option definition is itself
   * an array that will be used as the arguments to create a commander.js
   * option.
   *
   * Example:
   *  ``[['-l, --list', 'list objects'], ['-s, --silent', 'be quiet']]``
   */
  options?: OptionDefinition[]
}

export type OptionDefinition =
  [string]
  | [string, string]
  | [string, string, OptionTransform | string]
  | [string, string, OptionTransform | string, string]

export type OptionTransform = (option: string) => any

export interface ForOptionsMethodPair {
  methodName: string
  forOptions: ForOptions
}

export interface ViewMap {
  [methodName: string]: Constructor<View>
}
