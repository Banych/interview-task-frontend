import { ActionTree, ActionContext } from 'vuex'
import { BusStop, State } from './state'
import { MUTATIONS, Mutations } from './mutations'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';

export const ACTIONS = {
  LOAD_STOPS: 'LOAD_STOPS',
  SET_SELECTED_LINE: 'SET_SELECTED_LINE',
  SET_SELECTED_STOP: 'SET_SELECTED_STOP'
} as const;

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[ K ]>[ 1 ]
  ): ReturnType<Mutations[ K ]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ ACTIONS.LOAD_STOPS ](context: AugmentedActionContext): Promise<void>;
  [ ACTIONS.SET_SELECTED_LINE ](context: AugmentedActionContext, payload: number): void;
  [ ACTIONS.SET_SELECTED_STOP ](context: AugmentedActionContext, payload: string): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ ACTIONS.LOAD_STOPS ](context) {
    const response = await axios.get<BusStop[]>('/stops');
    if (response.data.length) {
      context.commit(MUTATIONS.SET_STOPS, response.data);
    }
  },
  [ ACTIONS.SET_SELECTED_LINE ](context, payload) {
    context.commit('SET_SELECTED_LINE', payload);
  },
  [ ACTIONS.SET_SELECTED_STOP ](context, payload) {
    context.commit('SET_SELECTED_STOP', payload);
  }
}
