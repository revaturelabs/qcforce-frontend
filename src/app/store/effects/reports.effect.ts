import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

import * as ReportsActions from '../actions/reports.action';
import { ReportsService } from 'src/app/services/reports.service';

@Injectable()
export class ReportsEffects {

  constructor(
    private actions$: Actions,
    private reportsService: ReportsService
  ) {}

  // @Effect()
  // getAnswers$ = this.actions$.pipe(
  //   ofType(ReportsActions.GET_ANSWERS),
  //   switchMap(() => { return this.reportsService.getAnswers().pipe(
  //       map(answers => new ReportsActions.GetAnswersSuccess(answers)),
  //       catchError(error => of(new ReportsActions.GetAnswersFail(error)))
  //     );
  //   })
  // );

  @Effect()
  getQuestions$ = this.actions$.pipe(
    ofType(ReportsActions.GET_QUESTIONS),
    exhaustMap(() => {
      return this.reportsService.getAvgWeekBatch().pipe(
        map(({ data }) => new ReportsActions.GetQuestionsSuccess(data)),
        catchError(error => of(new ReportsActions.GetQuestionsFail(error)))
      );
    })
  );
  
  @Effect()
  getAvgWeekBatch$ = this.actions$.pipe(
    ofType(ReportsActions.GET_AVG_WEEK_BATCH),
    exhaustMap(({ payload: { graph } }) => {
      return this.reportsService.getAvgWeekBatch().pipe(
        map(data => new ReportsActions.GetAvgWeekBatchSuccess({ graph, data })),
        catchError(error => of(new ReportsActions.GetAvgWeekBatchFail(error)))
      );
    })
  );
  
  @Effect()
  getBatchAllWeeks$ = this.actions$.pipe(
    ofType(ReportsActions.GET_ALL_WEEKS_ONE_BATCH),
    exhaustMap(({ payload: {graph, batch} }) => {
      return this.reportsService.getBatchAllWeeks(batch).pipe(
        map(data => new ReportsActions.GetAllWeeksOneBatchSuccess({graph, data})),
        catchError(error => of(new ReportsActions.GetAllWeeksOneBatchFail(error)))
      );
    })
  );

  @Effect()
  getOneBatchOneWeek = this.actions$.pipe(
    ofType(ReportsActions.GET_ONE_WEEK_ONE_BATCH),
    exhaustMap(({ payload: { graph, batch, week} }) => {
      return this.reportsService.getOneBatchOneWeek(batch, week).pipe(
        map(data => new ReportsActions.GetOneWeekOneBatchSuccess({ graph, data })),
        catchError(error => of(new ReportsActions.GetOneWeekOneBatchFail(error)))
      );
    })
  );

  @Effect()
  getBatches$ = this.actions$.pipe(
    ofType(ReportsActions.GET_BATCHES),
    switchMap(() => { return this.reportsService.getBatches().pipe(
        map(batches => new ReportsActions.GetBatchesSuccess(batches)),
        catchError(error => of(new ReportsActions.GetBatchesFail(error)))
      );
    })
  );

  @Effect()
  getWeeks$ = this.actions$.pipe(
    ofType(ReportsActions.GET_WEEKS),
    switchMap(() => { return this.reportsService.getWeeks().pipe(
        map(weeks => new ReportsActions.GetWeeksSuccess(weeks)),
        catchError(error => of(new ReportsActions.GetWeeksFail(error)))
      );
    })
  );

}
