import { createSelector } from '@ngrx/store';
import { ReportsState } from '../states';
import { ratingGraphFilter, paceGraphFilter, majorGraphFilter } from 'src/app/filters/reports.filter'; 

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
    for (let option of state.batchFilterOptions.slice(2)) {
        if (state.batchFilter === option) {
            reportTitle = option;
        }
    }
    return reportTitle;
}
const _selectRatingGraphData = (state: ReportsState) => {
  return {
    data: ratingGraphFilter(state),
    labels: [ 'Satisfaction Rating', 'Materials Helpful', 'Well Organized', 
      'Questions Encouraged', 'Met Expectations','Topic Understanding', 
      'Project Clarity', 'Project Preparedness'] 
  };
}
const _selectPaceGraphData = (state: ReportsState) => {
  return {
    data: paceGraphFilter(state),
    labels: ['Too Slow', 'Good', 'Too Fast']
  };
}
const _selectMajorGraphData = (state: ReportsState) => {
  return {
    data: majorGraphFilter(state),
    labels: ['Computer Science Major', 'STEM major', 'Non-STEM major']
  };
}
export const selectBatchFilter = createSelector(selectReportsState, _selectBatchFilter);
export const selectWeekFilter = createSelector(selectReportsState, _selectWeekFilter);
export const selectTitle = createSelector(selectReportsState, _selectTitle);
export const selectRatingGraphData = createSelector(selectReportsState, _selectRatingGraphData);
export const selectPaceGraphData = createSelector(selectReportsState, _selectPaceGraphData);
export const selectMajorGraphData = createSelector(selectReportsState, _selectMajorGraphData);
