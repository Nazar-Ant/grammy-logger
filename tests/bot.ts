import { Bot } from './deps.ts';
import { logger } from '../src/mod.ts';

export const bot = new Bot('SOME_TOKEN');

bot.use(logger());

bot.command('start', async (ctx) => {
  await ctx.reply('Welcome!');
});
