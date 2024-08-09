import { CheckedCard, CheckedCardState } from '@/models/redux.model';
import '@testing-library/jest-dom';

import cardReducer, {
  addCard,
  removeCard,
  removeAllCards,
} from '@/redux/counterSlice';

describe('cardSlice reducers', () => {
  it('should add a card', () => {
    const initialState: CheckedCardState = { cards: [], IdCards: [] };
    const card: CheckedCard = {
      id: '1',
      name: 'Luke Skywalker',
      gender: 'Male',
      height: '172 cm',
      mass: '77 kg',
      eye_color: 'blue',
    };
    const newState = cardReducer(initialState, addCard(card));

    expect(newState.cards).toEqual([card]);
    expect(newState.IdCards).toEqual(['1']);
  });

  it('should remove a card', () => {
    const initialState: CheckedCardState = {
      cards: [
        {
          id: '1',
          name: 'Luke Skywalker',
          gender: 'Male',
          height: '172 cm',
          mass: '77 kg',
          eye_color: 'blue',
        },
      ],
      IdCards: ['1'],
    };
    const newState = cardReducer(initialState, removeCard('1'));

    expect(newState.cards).toEqual([]);
    expect(newState.IdCards).toEqual([]);
  });

  it('should remove all cards', () => {
    const initialState = {
      cards: [
        {
          id: '1',
          name: 'Luke Skywalker',
          gender: 'Male',
          height: '172 cm',
          mass: '77 kg',
          eye_color: 'blue',
        },
      ],
      IdCards: ['1'],
    };

    const newState = cardReducer(initialState, removeAllCards());

    expect(newState.cards).toEqual([]);
    expect(newState.IdCards).toEqual([]);
  });
});
