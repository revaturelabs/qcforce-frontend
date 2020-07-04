import { Action } from '@ngrx/store';

import { Survey } from '../../models/survey.model';

/**
 * Actions related to survey state
 */

export const LOAD_SURVEYS = '[Surveys] Load Surveys';
export const LOAD_SURVEYS_FAIL = '[Surveys] Load Surveys Fail';
export const LOAD_SURVEYS_SUCCESS = '[Surveys] Load Surveys Success';
export const SUBNAV_OPTION_CLICK = '[Surveys] Subnav Option Click';

/**
 * Create a class for each action
 */
export class LoadSurveys implements Action {
    readonly type = LOAD_SURVEYS;
}

export class LoadSurveysFail implements Action {
    readonly type = LOAD_SURVEYS_FAIL;
    constructor(public payload: any) {}
}

export class LoadSurveysSuccess implements Action {
    readonly type = LOAD_SURVEYS_SUCCESS;
    constructor(public payload: Survey[]) {}
}

export class SubnavOptionClick implements Action {
  readonly type = SUBNAV_OPTION_CLICK;
  constructor(public payload: string) {}
}


/**
 * Export action types
 */
export type SurveysAction = LoadSurveys | LoadSurveysFail | LoadSurveysSuccess | SubnavOptionClick;
