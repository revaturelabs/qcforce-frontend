import { Associate } from '../../models/associate.model';

/**
 * Defined a shape of state which reducer will managed inside state tree
 */
export interface AssociatesState {
    data: Associate[];
    loaded: boolean;
    loading: boolean;
    batchName: string | null;
}
/**
 * The initial state for associates as a type of AssociatesState, if there is no batch loaded used as default
 */
export const initAssociatesState: AssociatesState = {
    data: [],
    loaded: false,
    loading: false,
    batchName: null,
};
