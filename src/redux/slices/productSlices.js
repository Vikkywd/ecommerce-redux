import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchProduct = createAsyncThunk('product/fetchProducts', async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items:[],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProduct.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            state.items = action.payload
        })
        .addCase(fetchProduct.rejected, (state,action)=>{
            state.action  = 'failed'
            state.error = action.error.message
        })

    }
})

export default productSlice.reducer