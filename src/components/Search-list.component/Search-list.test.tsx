/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchListComponent from './Search-list.component';
import store from '../../redux';
import { ISearchItem } from '../../models/Search.model';

const data: ISearchItem[] = [
  {
    name: 'R2-D2',
    gender: 'n/a',
    height: '96',
    mass: '32',
    eye_color: 'red',
    url: '',
  },
  {
    name: 'C-3PO',
    gender: 'n/a',
    height: '167',
    mass: '75',
    eye_color: 'yellow',
    url: '',
  },
  {
    name: 'Luke Skywalker',
    gender: 'male',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    url: '',
  },
];

test('renders SearchItemComponent with correct data', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/frontpage']}>
      <Provider store={store}>
        <SearchListComponent data={data} />
      </Provider>
    </MemoryRouter>,
  );

  expect(getByText('Luke Skywalker')).toBeInTheDocument();
  expect(getByText('C-3PO')).toBeInTheDocument();
  expect(getByText('R2-D2')).toBeInTheDocument();
});
