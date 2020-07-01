import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as surveysActions from '../actions/surveys.action';

@Injectable()
export class SurveysEffects {
    constructor(private actions$: Actions) {}
}
