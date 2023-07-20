import { BusStop } from "../types/BusStop";
import { GetStopsByLine } from "./getters";

export type State = {
  stops: BusStop[];
  selectedLine?: number;
  selectedStop?: GetStopsByLine;
}

export const state: State = {
  stops: [],
}