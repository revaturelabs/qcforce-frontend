import { Action } from '@ngrx/store';

export const FILTER_DISPLAYED_CHANGE = '[Reports] Filter Items Display Change';
export const BATCH_FILTER_CHANGE = '[Reports] Batch Filter Option Change';
export const WEEK_FILTER_CHANGE = '[Reports] Week Filter Option Change';

export const GET_BATCHES = '[Reports] Get Batches';
export const GET_BATCHES_SUCCESS = '[Reports] Get Batches Success';
export const GET_BATCHES_FAIL = '[Reports] Get Batches Fail';

export const GET_ANSWERS = '[Reports] Get Answers';
export const GET_ANSWERS_SUCCESS = '[Reports] Get Answers Success';
export const GET_ANSWERS_FAIL = '[Reports] Get Answers Fail';
export const TRANSFORM_DATA = '[Reports] Transform Data';

export class FilterDisplayedChange implements Action {
  readonly type = FILTER_DISPLAYED_CHANGE;
  constructor(public payload: string) {}
}

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

export class GetAnswers implements Action {
  readonly type = GET_ANSWERS;
}

export class GetAnswersSuccess implements Action {
  readonly type = GET_ANSWERS_SUCCESS;
  constructor(public payload: any[]) {}
}

export class GetAnswersFail implements Action {
  readonly type = GET_ANSWERS_FAIL;
  constructor(public payload: any) {}
}

export type ReportsAction = FilterDisplayedChange | BatchFilterChange | WeekFilterChange 
  | GetBatches | GetBatchesSuccess | GetBatchesFail
  | GetAnswers | GetAnswersSuccess | GetAnswersFail;
