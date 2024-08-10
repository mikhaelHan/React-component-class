import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { act, render, screen } from '@testing-library/react';
import DetailPageComponent from '@/components/Detail-page.component/Detail-page.component';
import { Provider } from 'react-redux';
import store from '@/redux';

describe('Page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders DetailPageComponent with the text', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
        gender: 'male',
        height: '168',
        mass: '76',
        eye_color: 'blue',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <DetailPageComponent />
        </Provider>,
      );
    });

    const textLoading = screen.getByText('Loading ...');
    expect(textLoading).toBeInTheDocument();
  });
});
