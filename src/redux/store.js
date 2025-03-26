import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlices'
import productReducer from './slices/productSlices'

export const  store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})