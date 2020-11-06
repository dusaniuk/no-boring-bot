interface BotConfig {
  token: string;
}

interface FeedSchedulerConfig {
  pattern: string;
  targetChat: number;
}

interface NbrBotConfig extends BotConfig {
  whitelistedChats: number[];
  database: DatabaseConfig;
}

interface DatabaseConfig {
  clientEmail: string;
  privateKey: string;
  databaseURL: string;
  projectId: string;
}

export interface AppConfig {
  environment: string;
  isDevMode: boolean;
  port: number;
  feedSchedule: FeedSchedulerConfig;
  bot: NbrBotConfig;
}
