import EditorModel from '../editor/model/Editor';
import { TraitManagerConfig } from './config/config';
import TraitView from './view/TraitView';

export interface TraitViewTypes {
  [id: string]: { new (o: any): TraitView };
}

export interface ITraitView {
  noLabel?: TraitView['noLabel'];
  eventCapture?: TraitView['eventCapture'];
  templateInput?: TraitView['templateInput'];
  onEvent?: TraitView['onEvent'];
  onUpdate?: TraitView['onUpdate'];
  createInput?: TraitView['createInput'];
  createLabel?: TraitView['createLabel'];
}

export type CustomTrait<T> = ITraitView & T & ThisType<T & TraitView>;

export interface TraitManagerConfigModule extends TraitManagerConfig {
  pStylePrefix?: string;
  em: EditorModel;
}

export type TraitsEvent = `${TraitsEvents}`;

/**{START_EVENTS}*/
export enum TraitsEvents {
  /**
   * @event `trait:custom`
   * @example
   * editor.on('trait:custom', () => { ... });
   */
  custom = 'trait:custom',

  /**
   * @event `trait` Catch-all event for all the events mentioned above. An object containing all the available data about the triggered event is passed as an argument to the callback.
   * @example
   * editor.on('trait', ({ event, model, ... }) => { ... });
   */
  all = 'trait',
}
/**{END_EVENTS}*/

// need this to avoid the TS documentation generator to break
export default TraitsEvents;
