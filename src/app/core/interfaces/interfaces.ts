export interface CounterState {
    ids: number[];
    entities: { [id: number]: number };
    currentCount: number;
}

export interface WeatherState {
    ids: number[];
    entities: { [id: number]: number };
    currentCount: number;
}
