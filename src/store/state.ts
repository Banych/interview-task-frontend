import { BusStop } from "../types/BusStop";

export type State = {
  stops: BusStop[];
  selectedLine?: number;
  selectedStop?: string;
}

export const state: State = {
  stops: [],
}