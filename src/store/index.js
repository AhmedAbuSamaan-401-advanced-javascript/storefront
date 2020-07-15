import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer";
import cartReducer from "../reducers/cartReducer"
import auth from '../reducers/auth'

const store = configureStore({
  reducer: { productReducer, categoryReducer, cartReducer, auth }
})

export default store