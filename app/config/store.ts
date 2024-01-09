import { configureStore } from "@reduxjs/toolkit";
import {categorySlice} from "../entities/category/categorySlice";


export const store = configureStore({
    reducer: {
        //@ts-ignore
        [categorySlice.name]: categorySlice.reducer,

    },
  }); 