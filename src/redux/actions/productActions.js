import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products
})

export const setSelectedProduct = (product) => ({
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: product
})