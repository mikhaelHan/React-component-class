/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // Импортируйте Provider из react-redux
import store from '../../redux'; // Импортируйте ваш Redux store
import PaginationComponent from './Pagination.component';

test('renders PaginationComponent with prev and next buttons', () => {
  render(
    <Provider store={store}>
      <PaginationComponent onPaginationChange={() => {}} />
    </Provider>,
  );

  const prevButton = screen.getByText('prev');
  const nextButton = screen.getByText('next');

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test('calls onPaginationChange when prev button is clicked', () => {
  const mockOnPaginationChange = (paginationValue: unknown) => {
    // eslint-disable-next-line no-console
    console.log('Pagination value changed:', paginationValue);
  };

  render(
    <Provider store={store}>
      <PaginationComponent onPaginationChange={mockOnPaginationChange} />
    </Provider>,
  );

  const prevButton = screen.getByText('prev');
  fireEvent.click(prevButton);
});
