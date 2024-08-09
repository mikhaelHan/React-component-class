import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { render, screen, act } from '@testing-library/react';
import { ISearchItem } from '@/models/Search.model';
import SearchListComponent from '@/components/Search-list.component/Search-list.component';
import { Provider } from 'react-redux';
import store from '@/redux';

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

describe('Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders SearchListComponent with correct data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <SearchListComponent data={data} />
        </Provider>,
      );
    });

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('C-3PO')).toBeInTheDocument();
    expect(screen.getByText('R2-D2')).toBeInTheDocument();
  });
});
