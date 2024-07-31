/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailPageComponent from './Detail-page.component';
import store from '../../redux';

test('renders the correct text', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <Provider store={store}>
        <DetailPageComponent />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText('Loading ...')).toBeInTheDocument();
});
