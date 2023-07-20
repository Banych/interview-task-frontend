import { MutationTree } from 'vuex'
import { BusStop, State } from './state'

export const MUTATIONS = {
  SET_STOPS: 'SET_STOPS',
  SET_SELECTED_LINE: 'SET_SELECTED_LINE',
  SET_SELECTED_STOP: 'SET_SELECTED_STOP'
} as const;

export type Mutations<S = State> = {
  [ MUTATIONS.SET_STOPS ](state: S, payload: BusStop[]): void;
  [ MUTATIONS.SET_SELECTED_LINE ](state: S, payload: number): void;
  [ MUTATIONS.SET_SELECTED_STOP ](state: S, payload: string): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [ MUTATIONS.SET_STOPS ](state, payload) {
    state.stops = payload;
  },
  [ MUTATIONS.SET_SELECTED_LINE ](state, payload) {
    state.selectedLine = payload;
  },
  [ MUTATIONS.SET_SELECTED_STOP ](state, payload) {
    state.selectedStop = payload;
  }
}
