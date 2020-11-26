import yargs = require("yargs");
import { Arguments } from "yargs";

export default function configureHelper(): {
  [key in keyof Arguments<{}>]: Arguments<{}>[key];
} {
  return yargs
  .command('create-new', 'creates a new token.')
  .option("pathToConfig", {
    demandOption: true,
    type: "string",
    description: "Full path to the json config file",
  }).argv;
}
