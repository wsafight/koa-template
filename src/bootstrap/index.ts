import 'reflect-metadata'
import {info} from "winston";
import setupServer from './setupServer'
import { CmdArgs } from "../type/CmdArgs";


export default function bootstrapApp(args: CmdArgs) {
  const config = {
    serverPort: '12345'
  }

  const app = setupServer(config, [])
  info(`app started at port ${config.serverPort}`)
  return app
}

