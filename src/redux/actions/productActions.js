import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function createProductsSuccess(products) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function updateProductsSuccess(products) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}

export function saveProductApi(product) {
  //eğer id gönderilmediyse, eklemedir
  //id geldiyse güncellemedir. böylece tek fonksiyonla hem update hem create olacak

  //şu adrese post yap, id'si varsa onu koy, yoksa hiçbir şey koyma
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST", //product id varsa PUT, yoksa post
    headers: { "content-type": "application/json" }, //bu default zaten, ama apiden apiye değişir
    body: JSON.stringify(product),
  })
    .then(handleResponse) //yukarıdan gelen sonuç buraya yollanıyor, yani response yukarısı
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    //action'ı devreye sokar, akabinde direkt fetchi çağırmak yerine api'yi çağıracağım
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductsSuccess(savedProduct))
          : dispatch(createProductsSuccess(savedProduct)); //id varsa updatele, yoksa ekle.
      })
      .catch((error) => {
        throw error; //hata gelirse dümdüz error döndür
      });
  };
}

//async olacak
export async function handleResponse(response) {
  if (response.ok) {
    return response.json;
  }
  const error = await response.text(); //handleResponse bir hata ise catch çalışmıyor, bunun sayesinde catch çalışıyor
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata meydana geldi");
  throw error;
}
