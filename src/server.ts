import bootstrapApp from "./bootstrap/index";
import parseArgs from "minimist";
import { CmdArgs } from "./type/CmdArgs";

function parseCmdArgs(args: string[]): CmdArgs {
  const parsedArgs = parseArgs(args)
  return {}
}

const app = bootstrapApp(parseCmdArgs(process.argv.slice(2)))
