export type BusStop = {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type State = {
  stops: BusStop[];
  selectedLine?: number;
  selectedStop?: string;
}

export const state: State = {
  stops: [],
}