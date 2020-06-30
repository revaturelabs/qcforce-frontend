import * as fromSurveys from '../actions/surveys.action';
import { Survey } from '../../models/survey.model';
/**
 * 
 */
export interface SurveyState {
    data: Survey[];
    loaded: boolean;
    loading: boolean;
}
export const initialState: SurveyState = {
    data: [],
    loaded: false,
    loading: false,
};

export function surveysReducer(
    state = initialState,
    action: fromSurveys.SurveysAction,
): SurveyState {

    switch(action.type) {
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
