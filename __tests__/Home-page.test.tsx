import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { render, act, screen } from '@testing-library/react';
import HomePageComponent from '@/components/Home-page.component/Home-page.component';
import store from '@/redux';
import { Provider } from 'react-redux';

describe('Page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders HomePageComponent with text', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <HomePageComponent>
            <></>
          </HomePageComponent>
        </Provider>,
      );
    });

    const titleText = screen.getByText('Cancel');
    expect(titleText).toBeInTheDocument();

    const loadText = screen.getByText('Cancel');
    expect(loadText).toBeInTheDocument();
  });
});
