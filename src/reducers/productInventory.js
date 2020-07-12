const productState = {
  products: [
    {
      category: "Fruits",
      name: "Bananas",
      description: "Fresh banana bunches",
      price: 5,
      inventory: 10
    },
    {
      category: "Fruits",
      name: "Mandarins",
      description: "Fresh Mandarin in a bag",
      price: 6,
      inventory: 10
    },
    {
      category: "Fruits",
      name: "Apples",
      description: "Fresh Apples",
      price: 1,
      inventory: 30
    },
    {
      category: "Vegetables",
      name: "Carrots",
      description: "Fresh Carrot in a bag",
      price: 4,
      inventory: 20
    },
    {
      category: "Vegetables",
      name: "Peas",
      description: "Frozen Peas in a bag",
      price: 3,
      inventory: 20
    },
    {
      category: "Vegetables",
      name: "Grean Beans",
      description: "Fresh Grean Beans in a bag",
      price: 5,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Peanuts",
      description: "Fresh Peanuts in a bag",
      price: 5,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Walnuts",
      description: "Fresh Walnuts in a bag",
      price: 7,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Hazelnuts",
      description: "Fresh Hazelnuts in a jar",
      price: 7,
      inventory: 10
    }
  ]
};

const inventoryCounter = (state = productState, action) => {
  let products;
  switch (action.type) {
    case "FRUITS":
      products = state.products.filter(
        product => product.category === "Fruits"
      );
      console.log("fruits", products);
      return { products };
    case "VEGETABLES":
      products = state.products.filter(
        product => product.category === "Vegetables"
      );
      console.log("veg", products);
      return { products };
    case "NUTS":
      products = state.products.filter(product => product.category === "Nuts");
      console.log("nuts", products);
      return { products };
    case "RESET":
      return productState;
    default:
      return state;
  }
};

export default inventoryCounter;

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