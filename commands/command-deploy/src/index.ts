import { JovoCliPlugin, PluginCommand, PluginType } from '@jovotech/cli-core';
import { Deploy } from './commands/deploy';
import { DeployCode } from './commands/deploy.code';
import { DeployPlatform } from './commands/deploy.platform';

export * from './commands/deploy';
export * from './commands/deploy.code';
export * from './commands/deploy.platform';

export class DeployCommand extends JovoCliPlugin {
  id = 'deploy';
  type: PluginType = 'command';

  getCommands(): typeof PluginCommand[] {
    return [Deploy, DeployCode, DeployPlatform];
  }
}

export default DeployCommand;
