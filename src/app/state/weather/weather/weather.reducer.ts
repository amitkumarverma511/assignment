import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { WeatherState } from '../../../core/interfaces/interfaces';


const initialState: WeatherState = {
  weatherData: null,
  error: null,
  loading: false,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.getWeatherByCity, (state) => ({
    ...state,
    loading: true,
  })),
  on(WeatherActions.getWeatherByCitySuccess, (state, { weatherData }) => ({
    ...state,
    weatherData,
    loading: false,
    error: null,
  })),
  on(WeatherActions.getWeatherByCityFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);