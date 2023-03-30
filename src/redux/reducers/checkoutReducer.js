import { ActionTypes } from "../constants/action-types";

const initialData = {
    orderDetails: {}
}
export const checkoutReducer = (state = initialData, action) => {
    const {type, payload} = action;

    switch(type) {
        case ActionTypes.PLACE_ORDER:
            const temp = {
                ...payload,
                orderid: Math.random()*100000000,
            }
            return {...state, orderDetails: temp};
        default:
            return state;
    }
}