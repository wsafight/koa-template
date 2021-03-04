import 'reflect-metadata'
import bodyParser from 'koa-bodyparser'
import { useKoaServer } from 'routing-controllers'
import Koa from 'koa'

interface AppConfig {
  serverPort: string
}

export default function setupServer(config: AppConfig, controllers: Function[]) {
  const koa = new Koa()

  // 处理 post 对象
  koa.use(bodyParser())

  const app = useKoaServer(koa, {
    validation: false,
    defaultErrorHandler: false,
    controllers
  })

  app.listen(config.serverPort)

  return app
}

