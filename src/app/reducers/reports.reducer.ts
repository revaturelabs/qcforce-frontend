import { Action, createReducer, on } from '@ngrx/store';
import { ReportsState } from '../store/states/reports.state';
import { initReportsState } from '../store/reducers/reports.state';
import * as ReportsActions from '../actions/reports.action'; 
import * as Filters from '../filters/reports.filter';
import { cloneDeep } from 'lodash';


// tslint:disable-next-line: variable-name
const _reportsReducer = createReducer(
  initReportsState,
  on(ReportsActions.filterDisplayedChange, (state, { payload }) => {
    const newState = {...state};
    newState.filterOptionDisplayed = payload;
    return newState;
  }),
  on(ReportsActions.batchFilterChange, (state, { payload }) => {
    const newState = {...state};
    newState.batchFilter = payload;
    return newState;
  }),
  on(ReportsActions.weekFilterChange, (state, { payload }) => {
    const newState = {...state};
    newState.weekFilter = payload;
    return newState;
  }),
  on(ReportsActions.getBatches, (state) => state),
  on(ReportsActions.getBatchesSuccess, (state, { payload }) => {
    const newState = {...state};
    const options = ['All', 'Average'];
    for (const singlebatch of payload) {
      options.push(singlebatch.batchName);
    }
    newState.batchFilterOptions = options;
    return newState;
  }),
  on(ReportsActions.getBatchesError, (state) => state),
  on(ReportsActions.getAnswers, (state) => state),
  on(ReportsActions.getAnswersSuccess, (state, { payload }) => {
    let newState = cloneDeep(state);
    newState.responseData = payload;
    newState = Filters.ratingGraphFilter(newState);
    newState = Filters.paceGraphFilter(newState);
    newState = Filters.majorGraphFilter(newState);
    return newState;
  }),
  on(ReportsActions.getAnswersError, (state) => state),
  on(ReportsActions.transformData, (state) => {
    let newState = cloneDeep(state);
    newState = Filters.ratingGraphFilter(newState);
    newState = Filters.paceGraphFilter(newState);
    newState = Filters.majorGraphFilter(newState);
    return newState;
  })
);

export function reportsReducer(state: ReportsState | undefined, action: Action) {
  return _reportsReducer(state, action);
}
