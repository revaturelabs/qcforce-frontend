import * as fromBatches from '../actions/batches.action';
import { BatchesState , initBatchesState } from '../states/batches.state'

/**
 * The reducer function which changes batch state
 * related to action type dispatched from a component
 * and returns a slice of a state conformed with BatchesState
 * @param state a slice of state which provided as default once a reducer is invoked
 * @param action set of action of particular type for reducer to process
 */
export function batchesReducer(
    state: BatchesState = initBatchesState,
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

