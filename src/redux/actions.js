import { ADD_CASH } from "./types";

export const addCash = () => {
    return {
        type: ADD_CASH,
    };
}

export const removeCash = (cash) => {
    return {
        type: ADD_CASH,
        payload: cash,
    };
}