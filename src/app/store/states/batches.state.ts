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
export const initBatchesState: BatchesState = {
    data: [],
    loaded: false,
    loading: false,
};
