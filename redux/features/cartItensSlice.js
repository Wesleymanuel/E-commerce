import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export const cartSlice = createSlice({
    name : 'cartIntens',
    initialState : {
        initialValue : []
    },
    reducers: {

        addItenOnCart : (state, action) => {
            const item = state.initialValue.find(
            item => item.id === action.payload.id
            );

            if (!item) {
            state.initialValue.push(action.payload);
            }
        },

        removeItenOnCart : (state, action) => {
        state.initialValue = state.initialValue.filter(
        item => item.id !== action.payload
    );
},

    }
})

export const { addItenOnCart, removeItenOnCart } = cartSlice.actions
export default cartSlice.reducer 