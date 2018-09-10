import { CommanderStatic } from 'commander'
import { Constructor } from 'awilix'
import { ForOptions } from './action-info.interface'
import { View } from './view.interface'

export interface ControllerTable {
  [controllerName: string]: ControllerTableEntry
}

export interface ControllerTableEntry extends ControllerInfo {
  registerCommand: (cliService: CommanderStatic, instance: any) => void
  actionsForOptions: ForOptionsMethodPair[]
  actionViews: ViewMap
}

export interface ControllerInfo {
  command: string,
  options: OptionDefinition[]
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
