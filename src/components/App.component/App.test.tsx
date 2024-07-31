/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import AppComponent from './App.component';
import store from '../../redux';

test('renders HomePageComponent for the root route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <AppComponent />
      </Provider>
    </MemoryRouter>,
  );

  const homePageElement = screen.getByRole('heading', {
    name: 'Class component !',
  });
  expect(homePageElement).toBeInTheDocument();
});

test('renders NotFoundPageComponent for an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/nonexistent']}>
      <Provider store={store}>
        <AppComponent />
      </Provider>
    </MemoryRouter>,
  );

  const notFoundImg = screen.getByRole('img', { name: '404-page' });
  expect(notFoundImg).toBeInTheDocument();
});
