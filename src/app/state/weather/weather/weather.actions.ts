import { createAction, props } from '@ngrx/store';

export const getWeatherByCity = createAction(
  '[Weather] Get Weather By City',
  props<{ cityName: string }>()
);

export const getWeatherByCitySuccess = createAction(
  '[Weather] Get Weather By City Success',
  props<{ weatherData: any }>()
);

export const getWeatherByCityFailure = createAction(
  '[Weather] Get Weather By City Failure',
  props<{ error: any }>()
);