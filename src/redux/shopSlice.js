import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("shop/fetchProduct", async() => {
    const getData = await axios.get('https://fakestoreapi.com/products?limit=5')
    return await getData.data;
})

const initialState = {
    products: [],
    currentShopItems: [],
    cartTotalQty: '',
    cartTotalPrice: '',
}


const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers: {
        addShopItem(state,action) {
            const exist = state.currentShopItems.findIndex(produc => produc.id === action.payload.id);
            if (exist >=0 ) {
                state.currentShopItems[exist].qty += 1
            } else {
                state.currentShopItems.push({...action.payload, qty: 1});
            }
        },
        removeShopItem(state,action) {
            const exist = state.currentShopItems.findIndex(prod => prod.id === action.payload.id);
            if (state.currentShopItems[exist].qty === 1) {
                state.currentShopItems = state.currentShopItems.filter(x => x.id !== action.payload.id)
            } else {
                state.currentShopItems[exist].qty -= 1
            }
        },
        getTotal(state,action) {
            let {total,quantity} = state.currentShopItems.reduce((acc,current) => {
                    const itemsTotalPrice = current.price * current.qty;

                    acc.total += itemsTotalPrice;
                    acc.quantity += current.qty;

                    return acc;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            state.cartTotalQty = quantity;
            state.cartTotalPrice = total;
        }
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state,action) => {
            state.products = action.payload;
        }
    }
})

export const {
    addShopItem,
    removeShopItem,
    getTotal,
} = shopSlice.actions;

export default shopSlice.reducer;

