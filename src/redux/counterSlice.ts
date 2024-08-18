import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWriteForm } from '../models/form.model';

const initialState: { forms: IWriteForm[]; countries: string[] } = {
  forms: [],
  countries: [
    'Austria',
    'Canada',
    'Belgium',
    'Brazil',
    'Canada',
    'Chile',
    'Colombia',
    'Croatia',
    'Denmark',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Japan',
    'Mexico',
  ],
};

const counterSlice = createSlice({
  name: 'forms',
  initialState,

  reducers: {
    addForm(state, action: PayloadAction<IWriteForm>) {
      return { ...state, forms: [action.payload, ...state.forms] };
    },
  },
});

export const { addForm } = counterSlice.actions;
export default counterSlice.reducer;
