import { GetterTree } from "vuex";
import { BusStop, State } from "./state";

export type Getters = {
  getLines: (state: State) => number[];
  getStopsByLine: (state: State) => (line: BusStop[ 'line' ]) => BusStop[]
}

export const getters: GetterTree<State, State> & Getters = {
  getLines: ({ stops }) => ([
    ...new Set(stops.map(stop => stop.line)).values()
  ].sort()),
  getStopsByLine: (state) => (line) =>
    state.stops.filter(stop => stop.line === line),
};