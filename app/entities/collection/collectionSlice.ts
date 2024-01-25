import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from './collection';



//  interface стора
interface ICollectionState {
    items: ICollection[]; 
}

const initialState: ICollectionState = {
  items:[],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchCollections(state: ICollectionState, action: PayloadAction<ICollection[]>) {
      state.items = action.payload;
    },
  },
});

export const selectCollections = (state: ICollectionState) => state.items

// Экспорт экшенов и редюсеров
export const { fetchCollections } = collectionSlice.actions;

