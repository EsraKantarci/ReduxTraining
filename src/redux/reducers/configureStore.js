import {createStore} from "redux"
import rootReducer from "./index"

export default function configureStore(){
    return createStore(rootReducer) //store'u oluşturacak fonksiyon root reducer. bu beni yoruyor.
}