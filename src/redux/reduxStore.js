import { createActions, createReducer } from 'reduxsauce';
export const { Types, Creators } = createActions({
    addRun: ['runs']
});
const initialState = {
    run: 0
}
const addRun = (state = initialState, action) => {
    return {
        ...state,
        run: state.run + +action.runs
    }
}
export default createReducer(initialState, {
    [Types.ADD_RUN]: addRun
});

