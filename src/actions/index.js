export function fruits(name) {
  return {
    type: "FRUITS",
    payload: name
  };
}

export function vegetables(name) {
  return {
    type: "VEGETABLES",
    payload: name
  };
}

export function nuts(name) {
  return {
    type: "NUTS",
    payload: name
  };
}

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