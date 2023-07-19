export type BusStop = {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type State = {
  stops: BusStop[];
}

export const state: State = {
  stops: [],
}