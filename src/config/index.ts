import { config } from 'dotenv';

import { AppConfig } from './interfaces';

config();

export const CONFIG: AppConfig = {
  environment: process.env.ENVIRONMENT,
  isDevMode: process.env.ENVIRONMENT === 'dev',
  port: +(process.env.PORT ?? 8080),
  feedSchedule: {
    pattern: process.env.FEED_PATTERN,
    targetChat: +process.env.FEED_TARGET,
  },

  bot: {
    token: process.env.NBR_BOT_TOKEN,
    whitelistedChats: process.env.NBR_WHITELISTED_CHATS?.split(' ').map((id: string) => +id),
    database: {
      clientEmail: process.env.NBR_DB_CLIENT_EMAIL,
      privateKey: process.env.NBR_DB_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      databaseURL: process.env.NDB_DB_DATABASE_URL,
      projectId: process.env.NBR_DB_PROJECT_ID,
    },
  },
};
