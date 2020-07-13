const initialState = {
    selectedCategory: '',
    categories: [
      { name: "Fruits", displayName: "Fruits", description: "Fruits" }, 
      { name: "Vegetables", displayName: "Vegetables", description: "Vegetables"  }, 
      { name: "Nuts", displayName: "Nuts", description: "Nuts"  }]
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return { ...state, selectedCategory: action.payload }
    case "RESET":
      return initialState;
    default:
      return state
  }
}
export default categoryReducer