import { combineReducers } from "redux";

import { productsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default reducers