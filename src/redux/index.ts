import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counterSlice';

const store = configureStore({
  reducer: {
    forms: counterSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
