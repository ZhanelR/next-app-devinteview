import { configureStore, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from '../collection/collection';



//  interface стора
interface ICategoryState {
    items: ICollection[]; 
}

const initialState: ICategoryState = {
  items:[],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories(state: ICategoryState, action: PayloadAction<ICollection[]>) {
      state.items = action.payload;
    },
  },
});

export const selectCategories = (state: ICategoryState) => state.items

// Экспорт экшенов и редюсеров
export const { fetchCategories } = categorySlice.actions;

