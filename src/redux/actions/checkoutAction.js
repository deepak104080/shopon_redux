import { ActionTypes } from "../constants/action-types";

export const placeOrder = (orderObj) => ({
    type: ActionTypes.PLACE_ORDER,
    payload: orderObj
})