import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer } from '../answer/answer';
import { IQuestion } from './question';
/* import { ICollection } from '../collection/collection';
 */


//  interface стора
interface IQuestionState {
    items: IQuestion[]; 
}

const initialState: IQuestionState = {
  items:[],
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    fetchQuestions(state: IQuestionState, action: PayloadAction<IQuestion[]>) {
      state.items = action.payload;
    },
  },
});

export const selectQuestions = (state: IQuestionState) => state.items

// Экспорт экшенов и редюсеров
export const { fetchQuestions } = questionSlice.actions;

