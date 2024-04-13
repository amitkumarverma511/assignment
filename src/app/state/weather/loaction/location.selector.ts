import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Location, LocationsState } from '../../../core/interfaces/interfaces';

export const selectLocationsState = createFeatureSelector<AppState, LocationsState>('locations');

export const selectAllLocations = createSelector(
  selectLocationsState,
  (state) => state.locations
);

export const selectLocationById = createSelector(
  selectAllLocations,
  (locations:Location[], props: { locationId: number }) =>
    locations.find((location:Location) => location.id === props.locationId)
);

export const selectLocationsError = createSelector(
  selectLocationsState,
  (state) => state.error
);
