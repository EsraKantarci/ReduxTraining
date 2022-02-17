import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer";


const rootReducer = combineReducers({
    changeCategoryReducer, //bu obje, js'de ikisi de aynıysa sadece changeCategoryReducer da yazabilirdik.
    categoryListReducer
})

export default rootReducer; //reducer döndürmem gerekiyor.