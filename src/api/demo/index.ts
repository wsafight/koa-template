import { Context } from 'koa'
import { Ctx, JsonController, Get, Param } from 'routing-controllers'
import { debug } from "winston";
import {memoizee} from 'memoizee-proxy'

const fibonacci = (n: number): number => {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
};

const memoizedFibonacci = memoizee(fibonacci);

@JsonController('/api/hello')
export class DemoController {
  @Get('/word')
  create(@Ctx() ctx: Context) {
    debug('cccc')
    return 'hello world'
  }

  @Get('/fib/:id')
  fib(@Ctx() ctx: Context, @Param('id') id: number) {
    return memoizedFibonacci(id)
  }
}
