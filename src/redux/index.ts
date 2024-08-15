import { configureStore } from '@reduxjs/toolkit';
import activeFormPageReducer from './counterSlice.isActivePage';

const store = configureStore({
  reducer: {
    activeFormPage: activeFormPageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
