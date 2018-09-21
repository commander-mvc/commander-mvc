import { each } from 'lodash'
import { newControllerEntry } from '../tables/controller-table'
import { constructorToToken } from '../constructor-to-token'
import { container } from '../container'
import { ControllerInfo, ControllerTableEntry } from '../interfaces/controller-table.interface'
import { CommanderStatic } from 'commander'
import { createActionHandler } from '../create-action-handler'
import { Constructor, asClass } from 'awilix'
import { registrationKeys } from '../registration-keys'

export function createControllerRegistration ({ constructor, controllerInfo }: {
  constructor: Constructor<any>,
  controllerInfo: ControllerInfo
}) {
  constructor[registrationKeys.injectable] = () => {
    const token = constructorToToken(constructor)
    const entry = newControllerEntry(controllerInfo)
    const actions = constructor[registrationKeys.actions]
    registerCommand({ entry, actions, token })
    container.register({
      [token]: asClass(constructor)
    })
  }
}

function registerCommand ({ entry, actions, token }: {
  entry: ControllerTableEntry,
  actions: any[],
  token: string
}) {
  const command: CommanderStatic = container.cradle.cliService
    .command(entry.command)
  registerCommandOptions({ entry, command })
  registerCommandAction({ command, actions, token })
}

function registerCommandOptions ({ entry, command }: {
  entry: ControllerTableEntry, command: any
}) {
  each(entry.options, option => {
    command
      .option(...option)
  })
}

function registerCommandAction ({ command, actions, token }: {
  command: any
  actions: any[],
  token: string
}) {
  command
    .action(createActionHandler({
      actions, token
    }))
}
