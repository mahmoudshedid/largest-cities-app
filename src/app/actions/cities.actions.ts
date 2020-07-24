import { createAction, props } from '@ngrx/store';

export const loadCities = createAction(
  '[Cities] Load Cities'
);

export const loadCitiesSuccess = createAction(
  '[Cities] Load Cities Success',
  props<{ data: any }>()
);

export const loadCitiesFailure = createAction(
  '[Cities] Load Cities Failure',
  props<{ error: any }>()
);

export const incrementPopulation = createAction(
  '[Population] Increment',
  props<{ data: any }>()
);

export const decrementPopulation = createAction(
  '[Population] Decrement',
  props<{ data: any }>()
);
