
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//changcategoryreducer ile aynı mantık ama ayrı işlemler.
//initial state içine çoklu array koymayı unutma, burası liste dönecek

//index.js'ye yeni reducer'ını eklemeyi unutma


export default function changeCategoryReducer(state = null, action){  //bootcampte burası initialState.categories ama initialize sıkıntısı oldu, 
    // initial'de categories [] olmasına rağmen görmüyor burası.
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload //payload'da category tuttuk, onu döndürecek. yoksa initial state current category.
        default:
            return state; //bunu yazmazsan initialization error geliyor, bilinen bir redux problemi.
    }
}

