import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActiveFormPage, Page } from '../models/redux.model';

const initialState: IActiveFormPage = {
  firstPage: false,
  secondPage: false,
};

const activePageSlice = createSlice({
  name: 'activeFormPage',
  initialState,

  reducers: {
    active(state, action: PayloadAction<number>) {
      return action.payload === Page.first
        ? {
            ...state,
            firstPage: true,
          }
        : {
            ...state,
            secondPage: true,
          };
    },

    inActive() {
      return initialState;
    },
  },
});

export const { active, inActive } = activePageSlice.actions;
export default activePageSlice.reducer;
