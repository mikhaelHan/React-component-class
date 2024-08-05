'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ThemeProvider from '../services/Theme.provider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux';

const ErrorBoundaryComponent = dynamic(
  () =>
    import('../components/Error-boundary.component/Error-boundary.component'),
  { ssr: false },
);
const AppComponent = dynamic(
  () => import('../components/App.component/App.component'),
  { ssr: false },
);

export const ClientOnly = () => {
  return (
    <ErrorBoundaryComponent>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <AppComponent />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundaryComponent>
  );
};
