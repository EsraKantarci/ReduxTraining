import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      ); 
      //bu ürün daha evvel eklenmiş mi?
      //state dediğimiz cart, cartta bul
      //c -> carttaki her eleman için id'leri kontrol et, varsa true dönecek
      if (addedItem) {
        var newState = state.map((cartItem) => {
          //her bir cartItem için sepeti geziyorum
          if (cartItem.product.id === action.cartItem.product.id) {
            //denk gelen ürünü bulduğumda
            return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1}); //şu kısmını bir arttır, Object assign bu şekil çalışıyor
          }
          return cartItem
        });
      }

    //sepette eleman yoksa:
    else{
        return [...state, {...action.payload}] //state'in bir kopyasını al, action ile gelen payload'ı o array'e ekle. push pop yok reduxta.
    }

      return action.payload;
    default:
      return state;
  }
}
