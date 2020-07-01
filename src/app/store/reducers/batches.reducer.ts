import * as fromBatches from '../actions/batches.action';
import { Batch } from '../../models/batch.model';

/**
 * Defined a shape of state which reducer will managed inside state tree
 */
export interface BatchesState {
    data: Batch[];
    loaded: boolean;
    loading: boolean;
}
/**
 * The initial state for batches as a type of BatchesState, if there is no batch loaded used as default
 */
export const initialState: BatchesState = {
    data: [],
    loaded: false,
    loading: false,
};

/**
 * The reducer function which changes batch state
 * related to action type dispatched from a component
 * and returns a slice of a state conformed with BatchesState
 * @param state a slice of state which provided as default once a reducer is invoked
 * @param action set of action of particular type for reducer to process
 */
export function reducer(
    state = initialState,
    action: fromBatches.BatchesAction
): BatchesState {
    switch (action.type) {
        case fromBatches.LOAD_BATCHES: {
            return {
                ...state,
                loading: true
            };
        }
        case fromBatches.LOAD_BATCHES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case fromBatches.LOAD_BATCHES_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data,
            };
        }
    }
    return state;
}
// add docs
export const getBatchesLoading = (state: BatchesState) => state.loading;
export const getBatchesLoaded = (state: BatchesState) => state.loaded;
export const getBatches = (state: BatchesState) => state.data;
