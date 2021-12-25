import { ADD_CASH, REMOVE_CASH } from './types';

const initialState = {
    cash: 0,
};

export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + 1,
            };
        case REMOVE_CASH:
            return {
                ...state,
                cash: state.cash - action.payload,
            };
        default:
            return state;
    }
};
