import { createSelector } from '@ngrx/store';
import { BatchesState } from '../states';


export const selectBatchesState = (state) => state.batches;

// add docs
export const selectBatchesLoading = (state: BatchesState) => state.loading;
export const selectBatchesLoaded = (state: BatchesState) => state.loaded;
export const selectBatches = (state: BatchesState) => state.data;

export const selectAllBatches = createSelector(selectBatchesState, selectBatches);
export const selectAllBatchesLoading = createSelector(selectBatchesState, selectBatchesLoading);
export const selectAllBatchesLoaded = createSelector(selectBatchesState, selectBatchesLoaded);

