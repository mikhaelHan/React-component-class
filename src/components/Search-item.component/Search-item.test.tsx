/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchItemComponent from './Search-item.component';
import store from '../../redux';

const mockItem = {
  name: 'Luke Skywalker',
  gender: 'Male',
  height: '172 cm',
  mass: '77 kg',
  eye_color: 'blue',
  url: '/people/1/',
};

test('renders SearchItemComponent with correct data', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <Provider store={store}>
        <SearchItemComponent {...mockItem} />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText(mockItem.name)).toBeInTheDocument();
  expect(getByText(mockItem.gender)).toBeInTheDocument();
  expect(getByText(mockItem.height)).toBeInTheDocument();
  expect(getByText(mockItem.mass)).toBeInTheDocument();
});

test('calls handleChange when checkbox is clicked', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <Provider store={store}>
        <SearchItemComponent {...mockItem} />
      </Provider>
    </MemoryRouter>,
  );

  const checkbox = getByText(mockItem.name);
  fireEvent.click(checkbox);
});

test('generates correct link based on route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <Provider store={store}>
        <SearchItemComponent {...mockItem} />
      </Provider>
    </MemoryRouter>,
  );

  const link = getByText('Luke Skywalker');
  expect(link.getAttribute('href')).toBe(null);
});
