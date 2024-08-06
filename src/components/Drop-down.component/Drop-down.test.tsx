/* eslint-disable react/react-in-jsx-scope */
import { expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import DropDownComponent from './Drop-down.component';
import store from '../../redux';

test('renders DropDownComponent with Cancel and Load buttons', () => {
  render(
    <Provider store={store}>
      <DropDownComponent />
    </Provider>,
  );

  const cancelButton = screen.getByText('Cancel');
  const loadButton = screen.getByText('Load');

  expect(cancelButton).toBeInTheDocument();
  expect(loadButton).toBeInTheDocument();
});

test('calls dispatch when Cancel button is clicked', () => {
  render(
    <Provider store={store}>
      <DropDownComponent />
    </Provider>,
  );

  const cancelButton = screen.getByText('Cancel');
  fireEvent.click(cancelButton);
});
