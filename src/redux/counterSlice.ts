import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IForm } from '../models/form.model';

const initialState: IForm[] = [];

const counterSlice = createSlice({
  name: 'forms',
  initialState,

  reducers: {
    addForm(state, action: PayloadAction<IForm>) {
      return [action.payload, ...state];
    },
  },
});

export const { addForm } = counterSlice.actions;
export default counterSlice.reducer;
