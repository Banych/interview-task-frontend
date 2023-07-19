import { ActionTree, ActionContext } from 'vuex'
import { BusStop, State } from './state'
import { MUTATIONS, Mutations } from './mutations'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';

export const ACTIONS = {
  LOAD_STOPS: 'LOAD_STOPS'
} as const;

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[ K ]>[ 1 ]
  ): ReturnType<Mutations[ K ]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ ACTIONS.LOAD_STOPS ](context: AugmentedActionContext): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ ACTIONS.LOAD_STOPS ](context) {
    const response = await axios.get<BusStop[]>('/stops');
    if (response.data.length) {
      context.commit(MUTATIONS.SET_STOPS, response.data);
    }
  }
}
