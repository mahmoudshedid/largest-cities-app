import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CitiesService } from '../services/cities.service';
import * as CitiesActions from '../actions/cities.actions';

@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private citiesService: CitiesService) { }

  @Effect()
  loadCities = this.actions.pipe(
    // To do
  );
}
