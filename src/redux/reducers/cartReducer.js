import { ActionTypes } from "../constants/action-types";

const initialState = {
    cartList: []
}

export const cartReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case ActionTypes.SET_CART_DATA: 
            console.log('inside reducer', type, payload);
            const temp = [...state.cartList, payload]
            return {...state, cartList: temp};
        default:
            return state;
    }
}