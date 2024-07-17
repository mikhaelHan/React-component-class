/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppComponent from './App.component';

test('renders HomePageComponent for the root route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppComponent />
    </MemoryRouter>,
  );

  const homePageElement = screen.getByRole('heading', {
    name: 'Class component !',
  });
  expect(homePageElement).toBeInTheDocument();
});

test('renders DetailPageComponent for /frontpage route', () => {
  render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <AppComponent />
    </MemoryRouter>,
  );

  const detailPageElement = screen.getByRole('link', { name: '← Back' });
  expect(detailPageElement).toBeInTheDocument();
});

test('renders NotFoundPageComponent for an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/nonexistent']}>
      <AppComponent />
    </MemoryRouter>,
  );

  const notFoundImg = screen.getByRole('img', { name: '404-page' });
  expect(notFoundImg).toBeInTheDocument();
});
