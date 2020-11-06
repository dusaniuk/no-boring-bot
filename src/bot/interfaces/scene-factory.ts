import { BaseScene } from 'telegraf';
import { AppContext } from '../../interfaces/index';

export interface ISceneFactory {
  createScene(sceneId): BaseScene<AppContext>;
}
