export interface CounterState {
    ids: number[];
    entities: { [id: number]: number };
    currentCount: number;
}
// Weather
export interface WeatherState {
    weatherData: any | null;
    error: any | null;
    loading: boolean;
  }
  

// Locations
export interface Location {
    id?: number;
    cityName?: string;
    lastTemperature?: number;
    weatherStatus?: string;
}

export interface LocationsState {
    locations: Location[];
    error?: any;
}
