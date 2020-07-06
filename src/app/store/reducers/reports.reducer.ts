import * as fromReports from '../actions/reports.action';
import { ReportsState, initReportsState } from '../states';
import { cloneDeep } from 'lodash';

export function reportsReducer(
  state: ReportsState = initReportsState,
  action: fromReports.ReportsAction
): ReportsState
{
  switch (action.type) {
    case fromReports.BATCH_FILTER_CHANGE: {
      const batchFilter = action.payload;
      return { ...state, batchFilter };
    }
    case fromReports.WEEK_FILTER_CHANGE: {
      const weekFilter = action.payload;
      return { ...state, weekFilter };
    }
    // case fromReports.GET_ANSWERS: {
    //     return { ...state };
    // }
    // case fromReports.GET_ANSWERS_SUCCESS: {
    //   const responseData = action.payload;
    //   return { ...state, responseData };
    // }
    // case fromReports.GET_ANSWERS_FAIL: {
    //   return { ...state };
    // }
    case fromReports.GET_BATCHES: {
      return { ...state };
    }
    case fromReports.GET_BATCHES_SUCCESS: {
      const batchFilterOptions = ['Average'];
      for (const batch of action.payload) {
        batchFilterOptions.push(batch);
      }
      return {...state, batchFilterOptions};
    }
    case fromReports.GET_BATCHES_FAIL: {
      return { ...state };
    }

    case fromReports.GET_ALL_WEEKS_ONE_BATCH: {
      return { ...state };
    }
    case fromReports.GET_ALL_WEEKS_ONE_BATCH_SUCCESS: {
      const responseData = action.payload;
      return {...state, responseData};
    }
    case fromReports.GET_ALL_WEEKS_ONE_BATCH_FAIL: {
      return { ...state };
    }

    case fromReports.GET_WEEKS: {
      return { ...state };
    }
    case fromReports.GET_WEEKS_SUCCESS: {
      const weekFilterOptions = ['All', 'Average'];
      const weekList = action.payload.slice(9).concat(action.payload.slice(0, 9));
      for (const week of weekList) {
        weekFilterOptions.push(week);
      }
      return {...state, weekFilterOptions};
    }
    case fromReports.GET_WEEKS_FAIL: {
      return { ...state };
    }
  }
  return state;
}
