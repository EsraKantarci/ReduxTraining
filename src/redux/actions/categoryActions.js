import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {
        type: actionTypes.CHANGE_CATEGORY, 
        payload: category //state'i payloaddaki değere set edeceğiz reduxla, payload yerince category:category de yapabilirsin, payload daha yeğ bence.
    }
}

export function getCategoriesSuccess(categories){
    return{
        //yukarıdaki yapının aynısını oluştur:

        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }

}

// //redux-thunk kullanacağız

export function getCategories(){
    return function(dispatch){
        let url= "http://localhost:3000/categories" //json server'ın yolu, kapalıysa json-server --watch db.json
        return fetch(url)//promise dönecek
        .then(response => response.json()) //json formatında geliyor, ama string algılanıyor responselar. json'a çevirmeyi unutma
        .then(result => dispatch(getCategoriesSuccess(result)))

    }
}