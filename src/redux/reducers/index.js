import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"


const rootReducer = combineReducers({
    changeCategoryReducer: changeCategoryReducer //bu obje, js'de ikisi de aynıysa sadece changeCategoryReducer da yazabilirdik.
})