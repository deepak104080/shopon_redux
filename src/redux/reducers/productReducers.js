import { ActionTypes } from "../constants/action-types";

const initialState = {
    listProducts: [],
    selectedProduct: {
        category: '',
        title: '',
        price: '',
        id: '',
        image: '',
        rating: {}
    }
}

export const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            //do something
            return {...state, listProducts: payload};
        case ActionTypes.SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: payload};
        default: 
            return state;
    }
}