import { configureStore } from "@reduxjs/toolkit";
import cartIntens from "./features/cartItensSlice";

export const store = configureStore({
    reducer : {
        cartIntens: cartIntens
    }
})