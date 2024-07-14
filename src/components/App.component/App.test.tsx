import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';

import AppComponent from './App.component';

test('renders HomePageComponent for the root route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppComponent />
    </MemoryRouter>,
  );

  // Checking that the HomePageComponent is rendered in the route '/'
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

  // Checking that the DetailPageComponent is rendered at the '/frontpage' route
  const detailPageElement = screen.getByRole('link', { name: '← Back' });
  expect(detailPageElement).toBeInTheDocument();
});

test('renders NotFoundPageComponent for an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/nonexistent']}>
      <AppComponent />
    </MemoryRouter>,
  );

  // Checking that the NotFoundPageComponent is rendered at the '/*' route
  const notFoundImg = screen.getByRole('img', { name: '404-page' });
  expect(notFoundImg).toBeInTheDocument();
});
