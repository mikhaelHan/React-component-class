import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { ICheckedCard } from '../models/redux.model';

const cardSlice = createSlice({
  name: 'checkedCards',
  initialState: {
    cards: [] as ICheckedCard[],
  },

  reducers: {
    addCard(
      state: Draft<{ cards: ICheckedCard[] }>,
      action: PayloadAction<ICheckedCard>,
    ) {
      // if (!state.cards.length) console.log('open');
      state.cards.push(action.payload);
    },

    removeCard(
      state: Draft<{ cards: ICheckedCard[] }>,
      action: PayloadAction<string>,
    ) {
      state.cards = state.cards.filter(
        (card: ICheckedCard) => card.id !== action.payload,
      );
      // if (!state.cards.length) console.log('close');
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
