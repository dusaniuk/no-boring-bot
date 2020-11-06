import { Container } from 'inversify';

import { ISceneFactory } from './bot/interfaces/scene-factory';
import { SceneFactory } from './bot/services/scene-factory';
import { TelegramScene } from './bot/interfaces/telegramScene';
import { ActivitiesScene } from './bot/scenes/activities.scene';
import { AnnounceScene } from './bot/scenes/announce.scene';
import { DeleteAnnounceScene } from './bot/scenes/deleteAnnounce.scene';
import { Database } from './interfaces/vendors';
import { createDbConnection } from './database/firestore.connection';
import { ActivitiesStore, MessageStore, UsersStore } from './interfaces/store';
import { ActivitiesFirestore } from './database/activities.firestore';
import { MessagingFirestore } from './database/messaging.firestore';
import { UsersFirestore } from './database/users.firestore';
import { Bot } from './interfaces/bot';
import { NbrBot } from './bot/nbr.bot';

import { TYPES } from './types';

const container = new Container();

container.bind<ISceneFactory>(TYPES.SCENE_FACTORY).to(SceneFactory);

container.bind<TelegramScene>(TYPES.ACTIVITIES_SCENE).to(ActivitiesScene);
container.bind<TelegramScene>(TYPES.ANNOUNCE_SCENE).to(AnnounceScene);
container.bind<TelegramScene>(TYPES.DELETE_ANNOUNCE_SCENE).to(DeleteAnnounceScene);

// DB interaction
container.bind<Database>(TYPES.DATABASE).toConstantValue(createDbConnection());
container.bind<ActivitiesStore>(TYPES.ACTIVITIES_STORE).to(ActivitiesFirestore);
container.bind<MessageStore>(TYPES.MESSAGE_STORE).to(MessagingFirestore);
container.bind<UsersStore>(TYPES.USERS_STORE).to(UsersFirestore);

container.bind<Bot>(TYPES.NBR_BOT).to(NbrBot);

export { container };
