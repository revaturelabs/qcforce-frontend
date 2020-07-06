/**
 * index.ts contains information about all reducer functions for this module
 */
// import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
export * from './reports.reducer';
export * from './batches.reducer';
export * from './surveys.reducer';

/*
import * as fromSurveys from './surveys.reducer';
import * as fromBatches from './batches.reducer';



export interface AppState {
    surveys: fromSurveys.SurveyState;
    batches: fromBatches.BatchesState;
}

/**
 * The reducers function collects and maps information
 * about actions to corresponding reducers inside <ReportState>
 *
export const reducers: ActionReducerMap<AppState> = {
    surveys: fromSurveys.surveysReducer,
    batches: fromBatches.reducer
};


export const getReportState = createFeatureSelector<AppState>('information');

// surveys state
export const getSurveyState = createSelector(getReportState, (state: AppState) => state.surveys);

export const getAllSurveys = createSelector(getSurveyState, fromSurveys.getSurveys);
export const getSurveysLoading = createSelector(getSurveyState, fromSurveys.getSurveysLoading);
export const getSurveysLoaded = createSelector(getSurveyState, fromSurveys.getSurveysLoaded);

// batches state
export const getBatchesState = createSelector(getReportState, (state: AppState) => state.batches);

export const getAllBatches = createSelector(getBatchesState, fromBatches.getBatches);
export const getBatchesLoading = createSelector(getBatchesState, fromBatches.getBatchesLoading);
export const getBatchesLoaded = createSelector(getBatchesState, fromBatches.getBatchesLoaded);
*/
