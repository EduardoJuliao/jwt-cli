import { showCLIName } from './lib/display';
import configureHelper from './jwt-cli.args';
import { runEnvCheck } from './lib/environment.validator';
import {createToken } from './lib/token';

showCLIName();

var argv = configureHelper();

const pathToConfig = argv.pathToConfig as string;
const command = argv._[0];

if (!runEnvCheck()) process.exit();

// for now, only creates a valid token:
switch(command){
    case 'create-new':
        createToken(pathToConfig)
        break;
    default:
        console.log('invalid command.');
}
