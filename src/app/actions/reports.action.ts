import { createAction, props } from '@ngrx/store';

export const filterDisplayedChange = createAction('[Reports] Filter Items Display Change', props<{ payload: string }>());
export const batchFilterChange = createAction('[Reports] Batch Filter Option Change', props<{ payload: string }>());
export const weekFilterChange = createAction('[Reports] Week Filter Option Change', props<{ payload: string }>());

export const getBatches = createAction('[Reports] Get Batches');
export const getBatchesSuccess = createAction('[Reports] Get Batches Success', props<{ payload: any[] }>());
export const getBatchesError = createAction('[Reports] Get Batches Error');
