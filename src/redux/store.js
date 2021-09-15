import { configureStore } from "@reduxjs/toolkit";
import shopSlice, { getTotal } from './shopSlice';

const store = configureStore({
    reducer: {
        shop: shopSlice
    }
})

store.dispatch(getTotal());

export default store;