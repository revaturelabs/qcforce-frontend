import { createAction, props } from '@ngrx/store';

export const getBatchList = createAction('[Batch] Get Batch List');

export const getBatchListSuccess = createAction('[Batch] Get Batch List Success', props<{payload: object[]}>());

export const getBatchListError = createAction('[Batch] Get Batch List Error');

