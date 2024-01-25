import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from '../collection/collection';
import { ICategory } from './category';



//  interface стора
interface ICategoryState {
    items: ICategory[]; 
}

const initialState: ICategoryState = {
  items:[],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories(state: ICategoryState, action: PayloadAction<ICategory[]>) {
      state.items = action.payload;
    },
  },
});

export const selectCategories = (state: ICategoryState) => {
  console.log(state)
  return state[categorySlice.name].items}

// Экспорт экшенов и редюсеров
export const { fetchCategories } = categorySlice.actions;

