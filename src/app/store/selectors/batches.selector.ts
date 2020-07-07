import { createSelector } from '@ngrx/store';
import { BatchesState } from '../states';


export const selectBatchesState = (state) => state.batches;

const selectBatchesLoading = (state: BatchesState) => state.loading;
const selectBatchesLoaded = (state: BatchesState) => state.loaded;
const selectBatches = (state: BatchesState) => state.data;
/**
 * Selectors are used for obtaining slices of store state related to batch state.
 */
export const selectAllBatches = createSelector(selectBatchesState, selectBatches);
export const selectAllBatchesLoading = createSelector(selectBatchesState, selectBatchesLoading);
export const selectAllBatchesLoaded = createSelector(selectBatchesState, selectBatchesLoaded);

