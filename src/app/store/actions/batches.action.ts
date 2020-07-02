import { Action } from '@ngrx/store';

import { Batch } from '../../models/batch.model';
/**
 * All action related to unique events that happen to batch model
 */

/**
 * Subset of actions related to loading of batch information
 * and specific name space where the action will dispatched;
 */

export const LOAD_BATCHES = '[Batches] Load Batches';
export const LOAD_BATCHES_FAIL = '[Batches] Load Batches Fail';
export const LOAD_BATCHES_SUCCESS = '[Batches] Load Batches Success';

/**
 * Define classes as action creators
 */
/**
 * The action of atempt to load all batches
 */
export class LoadBatches implements Action {
     readonly type = LOAD_BATCHES;
}
/**
 * The action of failed atempt to load information about batches
 * @param payload to be able to pass a message from a server if there is an error;
 */
export class LoadBatchesFail implements Action {
    readonly type = LOAD_BATCHES_FAIL;
    constructor(public payload: any) {}
}
/**
 * The action of successful loading information about batches
 * @param payload contains an array of type Batch
 */
export class LoadBatchesSuccess implements Action {
    readonly type = LOAD_BATCHES_SUCCESS;
    constructor(public payload: Batch[]) {}
}
/**
 * Export all action types related to batch model
 */
export type BatchesAction = LoadBatches | LoadBatchesFail | LoadBatchesSuccess;

// for fututre development: LOAD_BATCHES_BY_ID
