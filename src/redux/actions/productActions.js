import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products
})