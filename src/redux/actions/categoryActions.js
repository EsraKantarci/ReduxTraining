import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {
        type: actionTypes.changeCategory, 
        payload: category //state'i payloaddaki değere set edeceğiz reduxla, payload yerince category:category de yapabilirsin, payload daha yeğ bence.
    }
}