import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as ReportsActions from '../actions/reports.action';
import { ReportsService } from 'src/app/services/reports.service';

@Injectable()
export class ReportsEffects {
 
  constructor(
    private actions$: Actions,
    private reportsService: ReportsService
  ) {}

  @Effect()
  getAnswers$ = this.actions$.pipe(
    ofType(ReportsActions.GET_ANSWERS),
    switchMap(() => { return this.reportsService.getAnswers().pipe(
        map(answers => new ReportsActions.GetAnswersSuccess(answers)),
        catchError(error => of(new ReportsActions.GetAnswersFail(error)))
      )
    })
  );

}
