import { which, echo } from "shelljs";
import { pathDependencies } from "../env.json";

export function runEnvCheck(): boolean {
  for (let i = 0; i < pathDependencies.length; i++) {
    var d = pathDependencies[i];
    if (!which(d)) {
      echo("couldn't find cli: " + d);
      return false;
    }
  }
  return true;
}