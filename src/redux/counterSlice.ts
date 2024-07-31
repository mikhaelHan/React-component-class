import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckedCard, CheckedCardState } from '../models/redux.model';

const initialState: CheckedCardState = {
  cards: [],
  IdCards: [],
};

const cardSlice = createSlice({
  name: 'checkedCards',
  initialState,

  reducers: {
    addCard(state, action: PayloadAction<CheckedCard>) {
      return {
        ...state,
        cards: [...state.cards, action.payload],
        IdCards: [...state.IdCards, action.payload.id],
      };
    },

    removeCard(state, action: PayloadAction<string>) {
      return {
        cards: state.cards.filter(
          (card: CheckedCard) => card.id !== action.payload,
        ),
        IdCards: state.IdCards.filter((id: string) => id !== action.payload),
      };
    },

    removeAllCards() {
      return {
        cards: [],
        IdCards: [],
      };
    },
  },
});

export const { addCard, removeCard, removeAllCards } = cardSlice.actions;
export default cardSlice.reducer;
