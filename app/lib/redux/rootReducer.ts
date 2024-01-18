/* Instruments */
import {categorySlice} from "../../entities/category/categorySlice";

export const reducer = {
  [categorySlice.name]: categorySlice.reducer,
};


