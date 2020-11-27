#!/usr/bin/env node
import { showCLIName } from './lib/display';
import configureHelper from './jwt-cli.args';
import { runEnvCheck } from './lib/environment.validator';
import {createToken } from './lib/token';
import { createKey } from './lib/key';

showCLIName();

var argv = configureHelper();

const pathToConfig = argv.pathToConfig as string;
const command = argv._.length === 0 ? '' : argv._[0];
const create = argv._.length === 0 ? '' : argv._[1];

if (!runEnvCheck()) process.exit();

// for now, only creates a valid token:
switch(command){
    case 'new':
        if(create === 't' || create === 'token')
        {
            const token = createToken(pathToConfig);
            console.log('\n');
            console.log('************Token************');
            console.log('\n');
            console.log(token);
            console.log('\n');
            console.log('************Token************');
            console.log('\n');
            break;
        } else if(create === 'k' || create === 'key')
        {
            const token = createKey();
            console.log('\n');
            console.log('************Key************');
            console.log('\n');
            console.log(token);
            console.log('\n');
            console.log('************Key************');
            console.log('\n');
            break;
        }
        
    default:
        console.log('invalid command.');
}
