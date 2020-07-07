import { createSelector } from '@ngrx/store';
import { ReportsState } from '../states';
import * as Filters from '../../filters/reports.filter';

export const selectReportsState = (state) => state.reports;
const _selectBatchFilter = (state: ReportsState) => state.batchFilter;
const _selectWeekFilter = (state: ReportsState) => state.weekFilter;
const _selectTitle = (state: ReportsState) => {
    let reportTitle = '';
    if (state.batchFilter === 'All'){
      reportTitle = 'All Batches';
    } else if (state.batchFilter === 'Average') {
      reportTitle = 'Average Across Batches';
    }
    // tslint:disable-next-line: prefer-const
    for (let option of state.batchFilterOptions.slice(2)) {
        if (state.batchFilter === option) {
            reportTitle = option;
        }
    }
    return reportTitle;
};
// tslint:disable-next-line: variable-name
const _selectWeeklyGraphData = (state: ReportsState) => {
  return {
    data: Filters.weekGraphData(state),
    labels: state.weekFilterOptions.slice(2)
  };
}
const _selectRatingGraphData = (state: ReportsState) => {
  console.log(state);
  return {
    data: Filters.ratingGraphData(state),
    labels: state.ratingGraphQuestions
  };
}

export const selectBatchFilter = createSelector(selectReportsState, _selectBatchFilter);
export const selectWeekFilter = createSelector(selectReportsState, _selectWeekFilter);
export const selectTitle = createSelector(selectReportsState, _selectTitle);
export const selectWeeklyGraphData = createSelector(selectReportsState, _selectWeeklyGraphData);
export const selectRatingGraphData = createSelector(selectReportsState, _selectRatingGraphData);
