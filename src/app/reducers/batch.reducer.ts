import { Action, createReducer, on } from "@ngrx/store";
import { BatchState } from '../states/batch.state';
import { getBatchList, getBatchListSuccess, getBatchListError } from '../actions/batch.action';
import { cloneDeep } from 'lodash';
import { initBatchState } from '../consts/batch.const';
import { state } from '@angular/animations';


const _batchReducer = createReducer (
    initBatchState,
    on(getBatchList, (state) => {
        return state;
    }),
    on(getBatchListSuccess, (state, object) => {
        let newState = cloneDeep(state);
        newState.batchList = object.payload;
        return newState;
    }),
    on(getBatchListError, (state) => {
        return state;
    })
);

export function batchReducer(state: BatchState | undefined, action: Action) {
    return _batchReducer(state, action);
  }