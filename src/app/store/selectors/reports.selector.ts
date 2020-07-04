import { createSelector } from '@ngrx/store';
import { ReportsState } from '../states';

export const selectReportsState = (state) => state.reports;
