import { bot } from './bot.ts';
import { Chats } from './deps.ts';

Deno.test('Logger testing', async (t) => {
  const chats = new Chats(bot);
  const user = chats.newUser({
    id: 123456789,
    first_name: 'Test',
    last_name: 'User',
  });

  await t.step('/start command', async () => {
    await user.command('start');
  });
});
