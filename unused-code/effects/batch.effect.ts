import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { getBatchList, getBatchListSuccess, getBatchListError } from '../actions/batch.action';
import { BatchListService } from '../services/batch-list.service';


@Injectable()
export class BatchEffect {


  getList = createEffect(() => {
    return this.actions.pipe(
      ofType(getBatchList),
      exhaustMap(() => {
       return this.listService.getBatchList().pipe(
          map((batchList) => getBatchListSuccess({payload: batchList})),
          catchError((error) => of(getBatchListError()))
        );
      })
    );
  }) 

  

  constructor(private actions: Actions, private listService: BatchListService) { }
}
