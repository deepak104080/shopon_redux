import { combineReducers } from "redux";

import { productsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { checkoutReducer } from './checkoutReducer';

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: checkoutReducer
})

export default reducers