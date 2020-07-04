import * as fromReports from '../actions/reports.action';
import { ReportsState, initReportsState } from '../states';
import { cloneDeep } from 'lodash';
import { graphFilter } from 'src/app/filters/reports.filter';

export function reportsReducer(
  state: ReportsState = initReportsState,
  action: fromReports.ReportsAction
): ReportsState 
{
  switch (action.type) {
    case fromReports.FILTER_DISPLAYED_CHANGE: {
      const filterOptionDisplayed = action.payload;
      return { ...state, filterOptionDisplayed };
    }
    case fromReports.BATCH_FILTER_CHANGE: {
      const batchFilter = action.payload; 
      return { ...state, batchFilter };
    }
    case fromReports.WEEK_FILTER_CHANGE: {
      const weekFilter = action.payload;
      return { ...state, weekFilter };
    }
    case fromReports.GET_ANSWERS: {
        return { ...state };
    }
    case fromReports.GET_ANSWERS_SUCCESS: {
      let newState = cloneDeep(state);
      newState.responseData = action.payload;
      return graphFilter(newState);
    }
    case fromReports.GET_ANSWERS_FAIL: {
      return { ...state };
    }
    case fromReports.GET_BATCHES: {
      return { ...state };
    }
    case fromReports.GET_BATCHES_SUCCESS: {
      let newState = cloneDeep(state);
      for (let batch of action.payload) {
        newState.batchFilterOptions.push(batch.batchName);
      }
      return newState;
    }
    case fromReports.GET_BATCHES_FAIL: {
      return { ...state };
    }
    case fromReports.TRANSFORM_DATA: {
      let newState = cloneDeep(state);
      return graphFilter(newState);
    }
  }
  return state;
}
