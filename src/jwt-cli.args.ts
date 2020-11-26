import yargs = require("yargs");
import { Arguments } from "yargs";

export default function configureHelper(): {
  [key in keyof Arguments<{}>]: Arguments<{}>[key];
} {
  return yargs.options("pathToConfig", {
    demandOption: true,
    type: "string",
    description: "Full path to the json config file",
  })
  .command('create-new', 'creates a new token.')
  .argv;
}
