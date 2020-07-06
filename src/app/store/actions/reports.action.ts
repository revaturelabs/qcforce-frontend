import { Action } from '@ngrx/store';

export const BATCH_FILTER_CHANGE = '[Reports] Batch Filter Option Change';
export const WEEK_FILTER_CHANGE = '[Reports] Week Filter Option Change';

export const GET_BATCHES = '[Reports] Get Batches'; // one of any batch [ {}, {}, {}]
export const GET_BATCHES_SUCCESS = '[Reports] Get Batches Success';
export const GET_BATCHES_FAIL = '[Reports] Get Batches Fail';

export const GET_WEEKS = '[Reports] Get Weeks'; // one of any week [ {}, {}, {}] .../week/name/{}
export const GET_WEEKS_SUCCESS = '[Reports] Get Weeks Success';
export const GET_WEEKS_FAIL = '[Reports] Get Weeks Fail';

export const GET_ALL_WEEKS_ONE_BATCH = '[Reports] Get All Weeks for a Batch';
export const GET_ALL_WEEKS_ONE_BATCH_SUCCESS = '[Reports] Get All Weeks for a Batch Success!';
export const GET_ALL_WEEKS_ONE_BATCH_FAIL = '[Reports] Get All Weeks for a Batch FAILED';



export class BatchFilterChange implements Action {
  readonly type = BATCH_FILTER_CHANGE;
  constructor(public payload: string) {}
}

export class WeekFilterChange implements Action {
  readonly type = WEEK_FILTER_CHANGE;
  constructor(public payload: string) {}
}

export class GetBatches implements Action {
  readonly type = GET_BATCHES;
}

export class GetBatchesSuccess implements Action {
  readonly type = GET_BATCHES_SUCCESS;
  constructor(public payload: any[]) {}
}

export class GetBatchesFail implements Action {
  readonly type = GET_BATCHES_FAIL;
  constructor(public payload: any) {}
}

export class GetWeeks implements Action {
  readonly type = GET_WEEKS;
}

export class GetWeeksSuccess implements Action {
  readonly type = GET_WEEKS_SUCCESS;
  constructor(public payload: any[]) {}
}

export class GetWeeksFail implements Action {
  readonly type = GET_WEEKS_FAIL;
  constructor(public payload: any) {}
}

export class GetAllWeeksOneBatch implements Action {
  readonly type = GET_ALL_WEEKS_ONE_BATCH;
}

export class GetAllWeeksOneBatchSuccess implements Action {
  readonly type = GET_ALL_WEEKS_ONE_BATCH_SUCCESS;
  constructor(public payload: any[]) {}
}

export class GetAllWeeksOneBatchFail implements Action {
  readonly type = GET_ALL_WEEKS_ONE_BATCH_FAIL;
  constructor(public payload: any) {}
}

export type ReportsAction = BatchFilterChange | WeekFilterChange
  | GetBatches | GetBatchesSuccess | GetBatchesFail
  | GetAllWeeksOneBatch | GetAllWeeksOneBatchSuccess | GetAllWeeksOneBatchFail
  | GetWeeks | GetWeeksSuccess | GetWeeksFail;
