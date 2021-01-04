import { Action, createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/models/question.model';
import * as QuestionSubmitActions from '../actions/question-submit';
import { SubmissionState } from '../states';

export const initialState: Question = {
    id: 0,
    createdOn: new Date(Date.now()),
    type: '',
    version: 0,
    question: [],
    loading: false,
  };

  const reducer = createReducer(
    initialState,
    on(QuestionSubmitActions.questionUpdate, (state, { submission }) => ({
      id: submission.id,
      createdOn: submission.createdOn,
      type: submission.type,
      version: submission.version,
      question: submission.question
      loading: submission.loading
    })),
  
 
    on(QuestionSubmitActions.questionReset, (state) => ({
        id: 0,
        createdOn: new Date(Date.now()),
        type: '',
        version: 0,
        question: []
      })),
    
      on(QuestionSubmitActions.questionSubmit, (state, { submission }) => ({
        id: submission.id,
        createdOn: submission.createdOn,
        type: submission.type,
        version: submission.version,
        question: submission.question
        loading: submission.loading
      })),
    
      on(QuestionSubmitActions.submissionSuccess, (state) => ({
        id: state.id,
        createdOn: state.createdOn,
        type: state.type,
        version: state.version,
        question: state.question,
        loading: true
      })),
    );
    
    export function questionSubmissionReducer(state: SubmissionState | undefined, action: Action) {
      return reducer(state, action);
    }