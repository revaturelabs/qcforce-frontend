import { ActionReducerMap } from '@ngrx/store';
import * as fromSurveys from './surveys.reducer';

export interface ReportState {
    surveys: fromSurveys.SurveyState;
}

export const reducers: ActionReducerMap<ReportState> = {
    surveys: fromSurveys.surveysReducer
};
