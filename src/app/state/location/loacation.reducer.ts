import { createReducer, on } from '@ngrx/store';
import * as locationActions from './location.actions';
import { LocationState } from '../../core/interfaces/interfaces';

export const initialState: LocationState = {
  locations: null,
};

export const locationReducer = createReducer(
    initialState,
    on(locationActions.loadLocations, (state) => ({
      ...state,
    })),
    on(locationActions.loadLocationsSuccess, (state, { locations }) => ({
      ...state,
      locations,
    })),
    on(locationActions.loadLocationsFailure, (state, { error }) => ({
      ...state,
    }))
  );
