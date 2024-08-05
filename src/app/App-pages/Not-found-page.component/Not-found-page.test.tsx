/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFoundPageComponent from './Not-found-page.component';
import store from '../../redux';

test('renders the correct title', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <NotFoundPageComponent />
      </Provider>
    </MemoryRouter>,
  );

  const notFoundImg = screen.getByRole('img', { name: '404-page' });
  expect(notFoundImg).toBeInTheDocument();
});
