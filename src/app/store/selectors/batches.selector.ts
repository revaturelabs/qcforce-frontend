import { createSelector } from '@ngrx/store';
import { BatchesState } from '../states';


export const selectBatchesState = (state) => state.batches;

// add docs
const _selectBatchesLoading = (state: BatchesState) => state.loading;
const _selectBatchesLoaded = (state: BatchesState) => state.loaded;
const _selectBatches = (state: BatchesState) => state.data;

export const selectAllBatches = createSelector(selectBatchesState, _selectBatches);
export const selectAllBatchesLoading = createSelector(selectBatchesState, _selectBatchesLoading);
export const selectAllBatchesLoaded = createSelector(selectBatchesState, _selectBatchesLoaded);

