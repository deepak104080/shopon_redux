import { combineReducers } from "redux";

import { productsReducer } from "./productReducers";

const reducers = combineReducers({
    products: productsReducer
})

export default reducers