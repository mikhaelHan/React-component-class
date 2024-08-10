import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { fireEvent, render, screen, act } from '@testing-library/react';
import SearchItemComponent from '@/components/Search-item.component/Search-item.component';
import { Provider } from 'react-redux';
import store from '@/redux';

const mockItem = {
  name: 'Luke Skywalker',
  gender: 'Male',
  height: '172 cm',
  mass: '77 kg',
  eye_color: 'blue',
  url: '/people/1/',
};

describe('Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders SearchItemComponent with correct data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <SearchItemComponent {...mockItem} />
        </Provider>,
      );
    });

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.mass)).toBeInTheDocument();
    expect(screen.getByText(mockItem.gender)).toBeInTheDocument();
    expect(screen.getByText(mockItem.height)).toBeInTheDocument();

    const checkbox = screen.getByText(mockItem.name);
    fireEvent.click(checkbox);

    const link = screen.getByText('Luke Skywalker');
    expect(link.getAttribute('href')).toBe(null);
  });
});
