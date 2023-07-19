import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  getLines: (state: State) => number[];
}

export const getters: GetterTree<State, State> & Getters = {
  getLines: ({ stops }) => ([
    ...new Set(stops.map(stop => stop.line)).values()
  ]),
};