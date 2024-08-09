import '@testing-library/jest-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import store from '@/redux';
import SearchComponent from '@/components/Search.component/Search.component';

describe('Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders SearchComponent with correct text', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <SearchComponent onSearchChange={() => {}} />
        </Provider>,
      );
    });

    const text = screen.getByText('Search');
    expect(text).toBeInTheDocument();

    const plaseholdrText = screen.getByPlaceholderText('Search...');
    expect(plaseholdrText).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
  });
});

describe('Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  let searchValue: string = '';
  const mockOnSearchChange = (value: string) => {
    searchValue = value;
  };

  it('renders SearchComponent with emit correct data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <SearchComponent onSearchChange={mockOnSearchChange} />
        </Provider>,
      );
    });

    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    expect(searchValue).toBe('test');
  });
});
