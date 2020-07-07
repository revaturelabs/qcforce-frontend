import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as AssociateActions from '../actions/associates.action';
import { BatchesService } from '../../services/batches.service';
/**
 * Effects associated with associates actions
 */
@Injectable()
export class AssociatesEffects {

    constructor(
        private actions$: Actions,
        private batchesService: BatchesService
        ) {}
/**
 * Side effect of Loading Associates by Batch Name
 * if success => invokes LoadLoadAssociatesSuccess
 * if failure => invokes LoadAssociatesFail
 */
    @Effect()
    loadAssociates$ = this.actions$.pipe(
        ofType<AssociateActions.LoadAssociates>(AssociateActions.LOAD_ASSOCIATES_BY_BATCH_NAME),
        switchMap(action => { return this.batchesService.getAssociateByBatchName(action.payload).pipe(
            map(data => new AssociateActions.LoadAssociatesSuccess(data)),
            catchError(error => of(new AssociateActions.LoadAssociatesFail(error)))
        );
    }));
}
