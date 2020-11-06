import { Markup } from 'telegraf';
import { CallbackButton } from 'telegraf/typings/markup';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

import { Actions } from '../constants/enums';

import { AppContext } from '../../interfaces/index';

import { getTitleWithEmoji } from '../utils/title.utils';
import { getActivitiesKeys } from '../utils/activities.utils';
import { ActivitiesPreferences } from '../../interfaces/activities';

export const getActivitiesKeyboard = (ctx: AppContext, preferences: ActivitiesPreferences = {}): ExtraReplyMessage => {
  const buttons: CallbackButton[][] = [];

  const activitiesKeys = getActivitiesKeys();
  activitiesKeys.forEach((key: string) => {
    let title = getTitleWithEmoji(ctx, key);
    const isSelected = preferences[key];
    if (isSelected) {
      title = `✅ ${title}`;
    }

    buttons.push([Markup.callbackButton(title, key)]);
  });

  const next: Actions = Actions.Next;
  buttons.push([Markup.callbackButton(getTitleWithEmoji(ctx, next), next)]);

  return Markup.inlineKeyboard(buttons)
    .resize()
    .extra();
};
