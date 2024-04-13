export interface CounterState {
    ids: number[];
    entities: { [id: number]: number };
    currentCount: number;
}

export interface LocationState {
    locations: any[] | null;
  }