import { Action, createReducer, on } from "@ngrx/store";
import { ReportsState } from '../states/reports.state';
import { initReportsState } from '../consts/reports.const';
import { filterDisplayedChange, batchFilterChange, weekFilterChange } from '../actions/reports.action'; 


const _reportsReducer = createReducer(
  initReportsState,
  on(filterDisplayedChange, (state, { payload }) => {
    let newState = {...state};
    newState.filterOptionDisplayed = payload;
    return newState;
  }),
  on(batchFilterChange, (state, { payload }) => {
    let newState = {...state};
    newState.batchFilterOption = payload;
    return newState;
  }),
  on(weekFilterChange, (state, { payload }) => {
    let newState = {...state};
    newState.weekFilterOption = payload;
    return newState;
  })
);

export function reportsReducer(state : ReportsState | undefined, action: Action) {
  return _reportsReducer(state, action);
}
