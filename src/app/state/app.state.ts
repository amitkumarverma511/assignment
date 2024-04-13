import { ActionReducerMap } from "@ngrx/store";
import { CounterState, LocationsState, WeatherState } from "../core/interfaces/interfaces";
import { counterReducer } from "./counter/counter.reducer";
import { locationsReducer } from "./weather/loaction/location.reducer";
import { weatherReducer } from "./weather/weather/weather.reducer";

export interface AppState {
    counter: CounterState;
    locations: LocationsState
    weather:WeatherState;
}

export const AppReducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    locations:locationsReducer,
    weather: weatherReducer,
  };