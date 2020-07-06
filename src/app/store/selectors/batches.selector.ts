import { createSelector } from '@ngrx/store';
import { BatchesState } from '../states';


export const selectBatchesState = (state) => state.batches;

// add docs
const selectBatchesLoading = (state: BatchesState) => state.loading;
const selectBatchesLoaded = (state: BatchesState) => state.loaded;
const selectBatches = (state: BatchesState) => state.data;

export const selectAllBatches = createSelector(selectBatchesState, selectBatches);
export const selectAllBatchesLoading = createSelector(selectBatchesState, selectBatchesLoading);
export const selectAllBatchesLoaded = createSelector(selectBatchesState, selectBatchesLoaded);

