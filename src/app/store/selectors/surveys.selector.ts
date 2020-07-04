import { createSelector } from '@ngrx/store';
import { SurveysState } from '../states';


export const selectSurveyState = (state) => state.surveys;

const _selectSubnavSelected = (state : SurveysState) => state.subnavSelected;

export const selectSubnavSelected = createSelector(selectSurveyState, _selectSubnavSelected);

/*
export const selectSurveysLoading = (state: SurveysState) => state.loading;
export const selectSurveysLoaded = (state: SurveysState) => state.loaded;
export const selectSurveys = (state: SurveysState) => state.data;

export const selectAllSurveys = createSelector(selectSurveyState, selectSurveys);
export const selectAllSurveysLoading = createSelector(selectSurveyState, selectSurveysLoading);
export const selectAllSurveysLoaded = createSelector(selectSurveyState, selectSurveysLoaded);
*/
