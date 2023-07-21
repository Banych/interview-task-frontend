import { GetterTree } from "vuex";

import { State } from "./state";
import { BusStop } from "../types/BusStop";

type StopsWithOrder = Omit<BusStop, 'time' | 'line'>;

export type Getters = {
  getLines: (state: State) => number[];
  getStopsByLine: (state: State) => (line: BusStop[ 'line' ]) => StopsWithOrder[];
  getScheduleForStop: (state: State) => (stop: BusStop[ 'stop' ], line: BusStop[ 'line' ]) => string[];
  getFilteredBusStopNames: (state: State) => (filter: string) => StopsWithOrder[];
}

export const getters: GetterTree<State, State> & Getters = {
  getLines: ({ stops }) => ([
    ...new Set(stops.map(stop => stop.line))
  ].sort()),
  getStopsByLine: (state) => (line) =>
    [
      ...new Map(state.stops
        .filter(stop => stop.line === line)
        .map(({ order, stop }) => [ stop, { order, stop } ])
      )
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
    [
      ...new Map(
        state.stops
          .filter(({ stop }) => stop.includes(filter))
          .map(({ order, stop }) => [ stop, { order, stop } ])
      ).values()
    ]
};