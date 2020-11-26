import chalk from 'chalk';
import figlet from 'figlet';

export function showCLIName(): void {
   console.log(
      chalk.blue(
         figlet.textSync('# jwt-cli', { font: 'DOS Rebel' })
      ),
   );
}

export function showCommand(command: string): void {
   console.log(chalk.blueBright(command));
}