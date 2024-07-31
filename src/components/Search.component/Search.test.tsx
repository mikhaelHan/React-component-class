/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchComponent from './Search.component';
import store from '../../redux';

test('renders SearchItemComponent with correct data', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <SearchComponent onSearchChange={() => {}} />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  expect(getByText('Search')).toBeInTheDocument();
});

test('calls onSearchChange when form is submitted', () => {
  let searchValue: string = '';
  const mockOnSearchChange = (value: string) => {
    searchValue = value;
  };
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <SearchComponent onSearchChange={mockOnSearchChange} />
      </Provider>
    </MemoryRouter>,
  );

  const searchInput = getByPlaceholderText('Search...');
  fireEvent.change(searchInput, { target: { value: 'test' } });

  const searchButton = getByText('Search');
  fireEvent.click(searchButton);

  expect(searchValue).toBe('test');
});
