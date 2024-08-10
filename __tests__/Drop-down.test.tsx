import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { fireEvent, render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/redux';
import DropDownComponent from '@/components/Drop-down.component/Drop-down.component';

describe('Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders DropDownComponent with Cancel and Load buttons', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: 'Luke Skywalker',
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <DropDownComponent />
        </Provider>,
      );
    });

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    const loadButton = screen.getByText('Load');
    expect(loadButton).toBeInTheDocument();

    const onCancelButton = screen.getByText('Cancel');
    fireEvent.click(onCancelButton);
  });
});
