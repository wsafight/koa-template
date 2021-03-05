import { Context } from 'koa'
import { Ctx, JsonController, Get } from 'routing-controllers'
import { debug } from "winston";


@JsonController('/api/hello')
export class DemoController {
  @Get('/word')
  create(@Ctx() ctx: Context) {
    debug('cccc')
    return 'hello world'
  }
}
