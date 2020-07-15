import verifyToken from "../lib/verifyToken";

export function reset() {
  return {
    type: "RESET"
  };
}

export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function addToCart(name) {
  return {
    type: 'ADD_TO_CART',
    payload: name
  };
}

export function selectCategory(name) {
  return {
    type: 'SELECT_CATEGORY',
    payload: name
  }
}

export function fetchAllProducts() {
  return async dispatch => {
    const raw = await fetch('http://localhost:3000/products');
    const data = await raw.json();
    return dispatch(fetchAllProductsAction(data));
  };
}

function fetchAllProductsAction(data) {
  return {
    type: 'FETCH_ALL_PRODUCTS',
    payload: {
      inventory: data,
      list: data
    }
  };
}

export function userLogOut () {
  return {
    type: 'USER_LOG_OUT'
  }
}

export function userLogIn(username, password) {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
    const response = await raw.json()
    const user = verifyToken(response.token)
    console.log('response token',response.token)

    dispatch(userLogInAction(user, response.token))
  }
}

export function jwtLogin(token) {
  return async (dispatch) => {
    const user = verifyToken(token)
    if (user) dispatch(userLogInAction(user, token))
  }
}

function userLogInAction (user, token) {
  return {
    type: 'USER_LOG_IN',
    user,
    token,
  }
}