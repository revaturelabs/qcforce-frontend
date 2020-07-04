/**
 * Write initial state
 * and reducer for question actions
 */

import * as fromQuestions from '../actions/questions.action';
import { Question } from '../../models/question.model';

export interface QuestionState {
     data: Question[];
}

export const initialState: QuestionState = {
     data: [],
};

export function questionsReducer(
    state = initialState,
    action: fromQuestions.QuestionsAction,
): QuestionState {
    return state;
}
