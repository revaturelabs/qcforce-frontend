import { Action } from '@ngrx/store';

import { Survey } from '../../models/survey.model';

/**
 * Actions related to survey state
 */

export const LOAD_SURVEYS = '[Reports] Load Surveys';
export const LOAD_SURVEYS_FAIL = '[Reports] Load Surveys Fail';
export const LOAD_SURVEYS_SUCCESS = '[Reports] Load Surveys Success';

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


/**
 * Export action types
 */
export type SurveysAction = LoadSurveys | LoadSurveysFail | LoadSurveysSuccess;
