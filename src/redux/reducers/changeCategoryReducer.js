import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCategoryReducer(state = initialState.currentCategory, action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload //payload'da category tuttuk, onu döndürecek. yoksa initial state current category.
        default:
            break;
    }
}