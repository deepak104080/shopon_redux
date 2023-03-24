import { legacy_createStore as createStore } from "redux";

import reducers from './reducers/combinedReducer';

const store = createStore(reducers);

export default store;