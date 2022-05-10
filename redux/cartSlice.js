import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products : [],
        quantity : 0,
        total : 0
    },
    reducers : {
        addProduct : (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.quantity * action.payload.price;
        },
        removeProduct : (state, action) =>{
            state.products.filter(state.products !== action.payload);
        },
        reset : (state)=>{
            state.products = [],
            state.quantity = 0,
            state.quantity = 0
        },
    },
});

export const { addProduct, reset , removeProduct } = cartSlice.actions;
export default cartSlice.reducer;