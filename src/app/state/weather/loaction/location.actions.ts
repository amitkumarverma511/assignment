import { createAction, props } from '@ngrx/store';
import { Location, WeatherState } from '../../../core/interfaces/interfaces';

export const addLocation = createAction(
  '[Locations] Add Location',
  props<{ cityName: string }>()
);

export const addLocationSuccess = createAction(
  '[Locations] Add Location Success',
  props<{ location: Location }>()
);

export const addLocationFailure = createAction(
  '[Locations] Add Location Failure',
  props<{ error: any }>()
);

export const removeLocation = createAction(
  '[Locations] Remove Location',
  props<{ locationId: number }>()
);

export const updateLocation = createAction(
  '[Locations] Update Location',
  props<{ locationId: number, weather: WeatherState }>()
);

export const clearLocations = createAction('[Locations] Clear Locations');