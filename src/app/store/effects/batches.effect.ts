import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as BatchesActions from '../actions/batches.action';
import { BatchRequestService } from '../../services/batch-request.service';

@Injectable()
export class BatchesEffects {
    constructor(
        private actions$: Actions,
        private batchRequest: BatchRequestService
        ) {}

    @Effect()
    loadBatches$ = this.actions$.pipe(
        ofType(BatchesActions.LOAD_BATCHES),
        switchMap(() => { return this.batchRequest.getBatches().pipe(
            map(batches => new BatchesActions.LoadBatchesSuccess(batches)),
            catchError(error => of(new BatchesActions.LoadBatchesFail(error)))
        );
    }));
}
