import { ActionReducerMap } from "@ngrx/store";
import { CounterState, WeatherState } from "../core/interfaces/interfaces";
import { counterReducer } from "./counter/counter.reducer";
import { weatherReducer } from "./weather/weather.reducer";

export interface AppState {
    counter: CounterState;
    weather:WeatherState;
}

export const AppReducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    weather: weatherReducer,
  };