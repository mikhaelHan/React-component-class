import { configureStore, Reducer } from '@reduxjs/toolkit';
import { cardsApi } from './RtkApi';
import cardReducer from './counterSlice';
import { ICheckedCard } from '../models/redux.model';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    checkedCards: cardReducer as Reducer<{
      cards: ICheckedCard[];
      IdCards: string[];
    }>,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;
