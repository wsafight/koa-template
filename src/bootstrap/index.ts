import 'reflect-metadata'
import { info } from "winston";
import setupServer from './setupServer'
import { CmdArgs } from "../type/CmdArgs";
import { DemoController } from '../api/demo'


export default function bootstrapApp(args: CmdArgs) {
  const config = {
    serverPort: '4000'
  }

  const app = setupServer(config, [DemoController])
  info(`app started at port ${config.serverPort}`)
  return app
}

