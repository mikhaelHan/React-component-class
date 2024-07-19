import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { ICheckedCard } from '../models/redux.model';

const cardSlice = createSlice({
  name: 'checkedCards',
  initialState: {
    cards: [] as ICheckedCard[],
    IdCards: [] as string[],
  },

  reducers: {
    addCard(
      state: Draft<{ cards: ICheckedCard[]; IdCards: string[] }>,
      action: PayloadAction<ICheckedCard>,
    ) {
      // if (!state.cards.length) console.log('open');
      return {
        ...state,
        cards: [...state.cards, action.payload],
        IdCards: [...state.IdCards, action.payload.id],
      };
    },

    removeCard(
      state: Draft<{ cards: ICheckedCard[]; IdCards: string[] }>,
      action: PayloadAction<string>,
    ) {
      return {
        cards: state.cards.filter(
          (card: ICheckedCard) => card.id !== action.payload,
        ),
        IdCards: state.IdCards.filter((id: string) => id !== action.payload),
      };
      // if (!state.cards.length) console.log('close');
    },

    removeAllCards() {
      return {
        cards: [],
        IdCards: [],
      };
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
