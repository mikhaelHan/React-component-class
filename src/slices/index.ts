import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './counterSlice';
import { IRootStore } from '../models/redux.model';

export default configureStore<IRootStore>({
  reducer: {
    checkedCards: cardReducer,
  },
});
