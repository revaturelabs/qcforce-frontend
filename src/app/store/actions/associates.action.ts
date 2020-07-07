import { Action } from '@ngrx/store';
import { Associate } from '../../models/associate.model';
/**
 * All action related to unique events that happen to associate model
 */

/**
 * Subset of actions related to loading of associate information
 * and specific name space where the action will dispatched;
 */
export const LOAD_ASSOCIATES_BY_BATCH_NAME = '[Associates] Load Associates By Batch Name';
export const LOAD_ASSOCIATES_BY_BATCH_NAME_FAIL = '[Associates] Load Associates By Batch Name Fail';
export const LOAD_ASSOCIATES_BY_BATCH_NAME_SUCCESS = '[Associates] Load Associates By Batch Name Success';
/**
 * Define classes as action creators
 */
/**
 * The action of atempt to load all associates
 */
export class LoadAssociates implements Action {
    readonly type = LOAD_ASSOCIATES_BY_BATCH_NAME;
    constructor(public payload: string) {}
}
/**
 * The action of failed atempt to load information about associates
 * @param payload to be able to pass a message from a server if there is an error;
 */
export class LoadAssociatesFail implements Action {
   readonly type = LOAD_ASSOCIATES_BY_BATCH_NAME_FAIL;
   constructor(public payload: any) {}
}
/**
 * The action of successful loading information about associates
 * @param payload contains an array of type Associate
 */
export class LoadAssociatesSuccess implements Action {
   readonly type = LOAD_ASSOCIATES_BY_BATCH_NAME_SUCCESS;
   constructor(public payload: Associate[]) {}
}
/**
 * Export all action types related to associate model
 */
export type AssociatesAction = LoadAssociates | LoadAssociatesFail | LoadAssociatesSuccess;
