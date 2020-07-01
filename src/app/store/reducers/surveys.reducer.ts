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
    data: [
        {
            id: 1,
            name: '2005 NY',
            questions: [
                {
                    name: 'avgSatisfaction',
                    value: 4.2
                },
                {
                    name: 'avgUnderstanding',
                    value: 3.8
                },
            ]
        }
    ],
    loaded: false,
    loading: false,
};

export function surveysReducer(
    state = initialState,
    action: fromSurveys.SurveysAction,
): SurveyState {

    switch (action.type) {
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

export const getSurveysLoading = (state: SurveyState) => state.loading;
export const getSurveysLoaded = (state: SurveyState) => state.loaded;
export const getSurveys = (state: SurveyState) => state.data;

