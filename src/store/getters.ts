import { GetterTree } from "vuex";
import { State } from "./state";
import { BusStop } from "../types/BusStop";
import { SortType } from "../types/SortType";

export type GetStopsByLine = Omit<BusStop, 'time'> & {
  schedule: string[];
};

export type Getters = {
  getLines: (state: State) => number[];
  getStopsByLine: (state: State) => (line: BusStop[ 'line' ]) => GetStopsByLine[];
}

export const getters: GetterTree<State, State> & Getters = {
  getLines: ({ stops }) => ([
    ...new Set(stops.map(stop => stop.line)).values()
  ].sort()),
  getStopsByLine: (state) => (line) =>
    [ ...state.stops
      .filter(stop => stop.line === line)
      .reduce((accum: Map<string, GetStopsByLine>, next) => {
        const current = accum.get(next.stop);
        if (accum.has(next.stop) && current) {
          accum.set(
            next.stop,
            {
              stop: next.stop,
              line: next.line,
              order: next.order,
              schedule: [ ...current.schedule, next.time ].sort()
            });
        } else {
          accum.set(next.stop, {
            stop: next.stop,
            line: next.line,
            order: next.order,
            schedule: [ next.time ]
          })
        }
        return accum;
      }, new Map<string, GetStopsByLine>()).values() ],
};