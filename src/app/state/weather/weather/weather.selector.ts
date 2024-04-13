import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../../../core/interfaces/interfaces';
import { AppState } from '../../app.state';

export const selectWeatherState = createFeatureSelector<AppState, WeatherState>('weather');

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state.weatherData
);

export const selectWeatherError = createSelector(
  selectWeatherState,
  (state) => state.error
);

export const selectWeatherLoading = createSelector(
  selectWeatherState,
  (state) => state.loading
); 
