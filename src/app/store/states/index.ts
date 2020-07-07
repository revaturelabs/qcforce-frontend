import { RouterReducerState } from '@ngrx/router-store';

import { ReportsState } from './reports.state';
import { BatchesState } from './batches.state';
import { SurveysState } from './surveys.state';
import { AssociatesState } from './associates.state';

export * from './reports.state';
export * from './batches.state';
export * from './surveys.state';
export * from './associates.state';


export interface AppState {
  router: RouterReducerState<any>;
  reports: ReportsState;
  batches: BatchesState;
  surveys: SurveysState;
  associates: AssociatesState;
}
