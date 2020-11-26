#!/usr/bin/env node
import { showCLIName } from './lib/display';
import configureHelper from './jwt-cli.args';
import { runEnvCheck } from './lib/environment.validator';
import {createToken } from './lib/token';

showCLIName();

var argv = configureHelper();

const pathToConfig = argv.pathToConfig as string;
const command = argv._.length === 0 ? '' : argv._[0];

if (!runEnvCheck()) process.exit();

// for now, only creates a valid token:
switch(command){
    case 'create-new':
        const token = createToken(pathToConfig);
        console.log('\n');
        console.log('************Token************');
        console.log('\n');
        console.log(token);
        console.log('\n');
        console.log('************Token************');
        console.log('\n');
        break;
    default:
        console.log('invalid command.');
}
