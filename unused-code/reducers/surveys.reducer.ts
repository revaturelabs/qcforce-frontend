import { Action, createReducer, on } from "@ngrx/store";
import { SurveysState } from '../states/surveys.state';
import { initSurveysState } from '../consts/surveys.const';
import * as SurveysActions from '../actions/surveys.action';
import { cloneDeep } from 'lodash';

const _surveysReducer = createReducer(
  initSurveysState,
  on(SurveysActions.subnavOptionClick, (state, { payload }) => {
    let newState = {...state};
    newState.subnavSelected = payload;
    return newState;
  })
);

export function surveysReducer(state : SurveysState | undefined, action: Action) {
  return _surveysReducer(state, action);
}
