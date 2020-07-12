import { createStore, combineReducers } from "redux";
import productInventory from "../reducers/productInventory";
import categoryList from "../reducers/categoryList";
import cartCount from "../reducers/cartCounter"

const rootReducer = combineReducers({ 
  productInventory, 
  cartCount, 
  categoryList 
});

const store = () => {
  return createStore(rootReducer);
};


export default store();