import * as fromAssociates from '../actions/associates.action';
import { AssociatesState , initAssociatesState } from '../states/associates.state';

/**
 * The reducer function which changes associate state
 * related to action type dispatched from a component
 * and returns a slice of a state conformed with AssociatesState
 * @param state a slice of state which provided as default once a reducer is invoked
 * @param action set of action of particular type for reducer to process
 * @returns a state object related to dispathced action type
 */
export function associatesReducer(
    state: AssociatesState = initAssociatesState,
    action: fromAssociates.AssociatesAction
): AssociatesState {
    switch (action.type) {
        case fromAssociates.LOAD_ASSOCIATES_BY_BATCH_NAME: {
            return {
                ...state,
                loading: true,
                batchName: action.payload
            };
        }
        case fromAssociates.LOAD_ASSOCIATES_BY_BATCH_NAME_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case fromAssociates.LOAD_ASSOCIATES_BY_BATCH_NAME_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data,
            };
        }
        default:
            return state;
    }
}
