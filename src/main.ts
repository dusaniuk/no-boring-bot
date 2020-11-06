import 'reflect-metadata';

import { CONFIG } from './config';
import { Server } from './services/server';
import { Bot } from './interfaces/bot';

import { container } from './inversify.config';

import { TYPES as NBR_TYPES } from './types';

if (CONFIG.environment !== 'test') {
  const bot: Bot = container.get<Bot>(NBR_TYPES.NBR_BOT)

  bot.start();

  const server: Server = new Server();
  server.run();
}
