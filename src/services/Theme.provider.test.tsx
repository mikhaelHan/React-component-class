/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppComponent from '../components/App.component/App.component';
import { ThemeProvider } from './Theme.provider';

test('initial theme state is light', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/nonexistent']}>
      <ThemeProvider>
        <AppComponent />
      </ThemeProvider>
      ,
    </MemoryRouter>,
  );

  expect(container.querySelector('.container-light')).toBeInTheDocument();
});
