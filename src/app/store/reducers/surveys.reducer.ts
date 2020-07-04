import * as fromSurveys from '../actions/surveys.action';
import { SurveysState, initSurveysState } from '../states/surveys.state';
import { Survey } from '../../models/survey.model';

export function surveysReducer(
    state: SurveysState = initSurveysState,
    action: fromSurveys.SurveysAction,
): SurveysState {

    switch (action.type) {
        case fromSurveys.SUBNAV_OPTION_CLICK: {
          const subnavSelected = action.payload;
          return { ...state, subnavSelected };
        }
        case fromSurveys.LOAD_SURVEYS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromSurveys.LOAD_SURVEYS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }
        case fromSurveys.LOAD_SURVEYS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}
