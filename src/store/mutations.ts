import { MutationTree } from 'vuex'
import { State } from './state'
import { BusStop } from "../types/BusStop";

export const MUTATIONS = {
  SET_STOPS: 'SET_STOPS',
  SET_SELECTED_LINE: 'SET_SELECTED_LINE',
  SET_SELECTED_STOP: 'SET_SELECTED_STOP',
  CLEAR_SELECTED_LINE: 'CLEAR_SELECTED_LINE',
  CLEAR_SELECTED_STOP: 'CLEAR_SELECTED_STOP',
} as const;

export type Mutations<S = State> = {
  [ MUTATIONS.SET_STOPS ](state: S, payload: BusStop[]): void;
  [ MUTATIONS.SET_SELECTED_LINE ](state: S, payload: number): void;
  [ MUTATIONS.SET_SELECTED_STOP ](state: S, payload: string): void;
  [ MUTATIONS.CLEAR_SELECTED_LINE ](state: S): void;
  [ MUTATIONS.CLEAR_SELECTED_STOP ](state: S): void;
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
  },
  [ MUTATIONS.CLEAR_SELECTED_LINE ](state) {
    state.selectedLine = undefined;
  },
  [ MUTATIONS.CLEAR_SELECTED_STOP ](state) {
    state.selectedStop = undefined;
  }
}
