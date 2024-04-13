import { createAction, props } from "@ngrx/store";

export const loadLocations = createAction('[Locations] Load Locations',props<{ cityName: string }>());

export const loadLocationsSuccess = createAction(
  '[Locations] Load Locations Success',
  props<{ locations: any[] }>()
);

export const loadLocationsFailure = createAction(
  '[Locations] Load Locations Failure',
  props<{ error: any }>() 
);