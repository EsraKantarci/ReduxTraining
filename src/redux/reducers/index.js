import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";


const rootReducer = combineReducers({
    changeCategoryReducer, //bu obje, js'de ikisi de aynıysa sadece changeCategoryReducer da yazabilirdik.
    categoryListReducer,
    productListReducer
})

export default rootReducer; //reducer döndürmem gerekiyor.