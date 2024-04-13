import { createReducer, on } from '@ngrx/store';
import * as LocationsActions from './location.actions';
import { LocationsState,Location } from '../../../core/interfaces/interfaces';

const initialState: LocationsState = {
  locations: [],
  error: null,
};

export const locationsReducer = createReducer(
  initialState,
  on(LocationsActions.addLocation, (state) => ({
    ...state,
    error: null,
  })),
  on(LocationsActions.addLocationSuccess, (state, { location }) => ({
    ...state,
    locations: [location, ...state.locations],
    error: null,
  })),
  on(LocationsActions.addLocationFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(LocationsActions.removeLocation, (state, { locationId }) => ({
    ...state,
    locations: state.locations.filter((location) => location.id !== locationId),
  })),
  on(LocationsActions.updateLocation, (state, { locationId, weather }) => {
    const updatedLocations = state.locations.map((location) =>
      location.id === locationId ? { ...location, ...weather } : location
    );
    return {
      ...state,
      locations: updatedLocations,
    };
  }),
  on(LocationsActions.clearLocations, (state) => ({
    ...state,
    locations: [],
  }))
);
