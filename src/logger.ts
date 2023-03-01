import type { Context, Middleware } from './deps.deno.ts';
import { log } from './stylize.ts';

export const logger = <C extends Context>(): Middleware<C> => {
  return async (ctx, next) => {
    console.log(
      // TODO: add locale selection settings
      `${new Date().toLocaleTimeString()} ${log(' log ')} ${ctx.message?.text}`,
    );
    await next();
  };
};
