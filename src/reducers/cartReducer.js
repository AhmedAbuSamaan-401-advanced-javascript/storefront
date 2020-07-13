const initialState = {
    totalCount: 0,
    contents: {}
};

const cartReducer = (cart = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let newContents = cart.contents
            if (!(action.payload in newContents)) {
                newContents[action.payload] = 1
            } else {
                newContents[action.payload] = newContents[action.payload] + 1
            }
            return {
                totalCount: cart.totalCount + 1,
                contents: newContents
            }
        case 'DECREMENT':
            let decContents = cart.contents
            return {
                totalCount: cart.totalCount - 1,
                contents: decContents
            }
        case 'RESET':
            return cart;
        default:
            return cart;
    }
}
export default cartReducer