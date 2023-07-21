import { InjectionKey } from "vue";
import { createStore, useStore as useBaseStore, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import { State, state } from "./state";
import { Getters, getters } from "./getters";
import { Mutations, mutations } from "./mutations";
import { Actions, actions } from "./actions";

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export type Store<S> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, p extends Parameters<Mutations[ K ]>[ 1 ]>(
    key: K,
    payload: p,
    options?: CommitOptions
  ): ReturnType<Mutations[ K ]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[ K ]>[ 1 ],
    options?: DispatchOptions
  ): ReturnType<Actions[ K ]>
} & {
  getters: {
    [ K in keyof Getters ]: ReturnType<Getters[ K ]>;
  }
}

export const useStore = (): Store<State> => useBaseStore(key);
