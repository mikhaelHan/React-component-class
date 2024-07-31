/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePageComponent from './Home-page.component';
import store from '../../redux';

test('renders the correct title', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <HomePageComponent />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText('Class component !')).toBeInTheDocument();
});

test('renders loading message when data is loading', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <HomePageComponent />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText('Loading ...')).toBeInTheDocument();
});
