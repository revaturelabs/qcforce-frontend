/**
 * Action related to question
 */
import { Action } from '@ngrx/store';

import { Question } from '../../models/question.model';

export const LOAD_QUESTIONS = '[Reports] Load Questions';

export class LoadQuestions implements Action {
    readonly type = LOAD_QUESTIONS;
}

/**
 * Export action types
 */
export type QuestionsAction = LoadQuestions;
