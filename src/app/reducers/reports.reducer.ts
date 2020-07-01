import { Action, createReducer, on } from "@ngrx/store";
import { ReportsState } from '../states/reports.state';
import { initReportsState } from '../consts/reports.const';
import * as ReportsActions from '../actions/reports.action'; 


const _reportsReducer = createReducer(
  initReportsState,
  on(ReportsActions.filterDisplayedChange, (state, { payload }) => {
    let newState = {...state};
    newState.filterOptionDisplayed = payload;
    return newState;
  }),
  on(ReportsActions.batchFilterChange, (state, { payload }) => {
    let newState = {...state};
    newState.batchFilter = payload;
    return newState;
  }),
  on(ReportsActions.weekFilterChange, (state, { payload }) => {
    let newState = {...state};
    newState.weekFilter = payload;
    return newState;
  }),
  on(ReportsActions.getBatches, (state) => state),
  on(ReportsActions.getBatchesSuccess, (state, { payload }) => {
    let newState = {...state};
    let options = ['All', 'Average'];
    for (let singlebatch of payload) {
      options.push(singlebatch.batchName);
    }
    newState.batchFilterOptions = options;
    return newState;
  }),
  on(ReportsActions.getBatchesError, (state) => state),
  on(ReportsActions.getAnswers, (state) => state),
  on(ReportsActions.getAnswersSuccess, (state, { payload }) => {
    let newState = {...state};
    newState.responseData = payload;
    return newState
  }),
  on(ReportsActions.getAnswersError, (state) => state)
);

export function reportsReducer(state : ReportsState | undefined, action: Action) {
  return _reportsReducer(state, action);
}
