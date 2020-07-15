const initialState = {
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

const productReducer = (state = initialState.products, action) => {
    let products;
    switch (action.type) {
        case 'SELECT_CATEGORY':
            if (!action.payload) return initialState;
            products = initialState.products.filter(product => product.category === action.payload)
            return products
        case "RESET":
            return initialState.products;
        default:
            return state;
    }
};
export default productReducer;