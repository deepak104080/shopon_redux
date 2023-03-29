import { ActionTypes } from "../constants/action-types";

export const setCartData = (product) => {
    console.log('inside action object', product)
    return {
    type: ActionTypes.SET_CART_DATA,
    payload: product
}
}