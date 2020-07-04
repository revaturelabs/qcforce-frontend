import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as BatchesActions from '../actions/batches.action';
import { BatchesService } from '../../services/batches.service';

@Injectable()
export class BatchesEffects {
    constructor(
        private actions$: Actions,
        private batchesService: BatchesService
        ) {}

    @Effect()
    loadBatches$ = this.actions$.pipe(
        ofType(BatchesActions.LOAD_BATCHES),
        switchMap(() => { return this.batchesService.getBatches().pipe(
            map(batches => new BatchesActions.LoadBatchesSuccess(batches)),
            catchError(error => of(new BatchesActions.LoadBatchesFail(error)))
        );
    }));
}
