/* Instruments */
import { questionSlice } from "@/app/entities/question/questionSlice";
import {categorySlice} from "../../entities/category/categorySlice";
import { collectionSlice } from "@/app/entities/collection/collectionSlice";

export const reducer = {
  [categorySlice.name]: categorySlice.reducer,
  [collectionSlice.name]: collectionSlice.reducer,
  [questionSlice.name]: questionSlice.reducer
};


