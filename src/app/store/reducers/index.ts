import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSurveys from './surveys.reducer';

export interface ReportState {
    surveys: fromSurveys.SurveyState;
}

export const reducers: ActionReducerMap<ReportState> = {
    surveys: fromSurveys.surveysReducer
};

export const getReportState = createFeatureSelector<ReportState>('reports');

// surveys state
export const getSurveyState = createSelector(getReportState, (state: ReportState) => state.surveys);

export const getAllSurveys = createSelector(getSurveyState, fromSurveys.getSurveys);
export const getSurveysLoading = createSelector(getSurveyState, fromSurveys.getSurveysLoading);
export const getSurveysLoaded = createSelector(getSurveyState, fromSurveys.getSurveysLoaded);

