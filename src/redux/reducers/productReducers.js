import { ActionTypes } from "../constants/action-types";

const initialState = {
    listProducts: [],
}

export const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            //do something
            return {...state, listProducts: payload};
        default: 
            return state;
    }
}