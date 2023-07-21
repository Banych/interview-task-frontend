import { GetterTree } from "vuex";
import { State } from "./state";
import { BusStop } from "../types/BusStop";

export type GetStopsByLine = Omit<BusStop, 'time'> & {
  schedule?: string[];
};

type LineStops = Omit<BusStop, 'time' | 'line'>;

export type Getters = {
  getLines: (state: State) => number[];
  getStopsByLine: (state: State) => (line: BusStop[ 'line' ]) => LineStops[];
  getScheduleForStop: (state: State) => (stop: BusStop[ 'stop' ], line: BusStop[ 'line' ]) => string[];
  getFilteredBusStopNames: (state: State) => (filter: string) => GetStopsByLine[];
}

export const getters: GetterTree<State, State> & Getters = {
  getLines: ({ stops }) => ([
    ...new Set(stops.map(stop => stop.line)).values()
  ].sort()),
  getStopsByLine: (state) => (line) =>
    [
      ...state.stops
        .filter(stop => stop.line === line)
        .map<LineStops>(stop => ({ stop: stop.stop, order: stop.order }))
        .reduce((accumulate: Map<string, LineStops>, next) => {
          if (!accumulate.has(next.stop)) {
            accumulate.set(next.stop, next)
          }
          return accumulate;
        }, new Map<string, LineStops>())
        .values()
    ],
  getScheduleForStop: (state) => (value, line) =>
    [
      ...new Set(
        state.stops
          .filter(stop => stop.stop === value && stop.line === line)
          .map(stop => stop.time)
          .sort((a, b) =>
            new Date(`1970/01/01 ${a}`).getTime() - new Date(`1970/01/01 ${b}`).getTime()
          )
      )
    ],
  getFilteredBusStopNames: (state) => (filter) =>
    state.stops
      .filter(stop => stop.stop.includes(filter)),
};