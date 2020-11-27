import yargs = require("yargs");
import { Arguments, Argv } from "yargs";

export default function configureHelper(): {
  [key in keyof Arguments<{}>]: Arguments<{}>[key];
} {
  return (
    // .options('token',{})
    
    // .command('key', 'creates a new private key.')
    yargs.command("new", "creates a new token.", (yargs: Argv) => {
      return yargs
        .positional("token", {
          alias: "t",
          describe: "Informs the cli to create a new token.",
          requiresArg: false
        })
        .option("pathToConfig", {
          type: "string",
          description: "Full path to the json config file",
        })
        .positional("key", {
          alias: "k",
          describe: "Informs the cli to create a new key.",
          requiresArg: false, 
        });
    }).argv
  );
}
