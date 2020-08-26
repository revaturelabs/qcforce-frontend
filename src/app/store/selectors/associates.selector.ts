import { createSelector } from '@ngrx/store';
import { AssociatesState } from '../states';


export const selectAssociatesState = (state) => state.associates;

const selectAssociatesLoading = (state: AssociatesState) => state.loading;
const selectAssociatesLoaded = (state: AssociatesState) => state.loaded;
const selectAssociates = (state: AssociatesState) => state.data;

export const selectAllAssociates = createSelector(selectAssociatesState, selectAssociates);
export const selectAllAssociatesLoading = createSelector(selectAssociatesState, selectAssociatesLoading);
export const selectAllAssociatesLoaded = createSelector(selectAssociatesState, selectAssociatesLoaded);
