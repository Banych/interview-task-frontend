import { MutationTree } from 'vuex'
import { BusStop, State } from './state'

export const MUTATIONS = {
  SET_STOPS: 'SET_STOPS',

} as const;

export type Mutations<S = State> = {
  [ MUTATIONS.SET_STOPS ](state: S, payload: BusStop[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [ MUTATIONS.SET_STOPS ](state, payload: BusStop[]) {
    state.stops = payload;
  }
}
