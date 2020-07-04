import { createAction, props } from '@ngrx/store';

export const subnavOptionClick = createAction('[Surveys] Subnav Option Click', props<{ payload: string }>())
