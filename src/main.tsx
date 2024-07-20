import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.scss';

import ErrorBoundaryComponent from './components/Error-boundary.component/Error-boundary.component';
import store from './redux';
import { ThemeProvider } from './services/Theme.provider';
import AppComponent from './components/App.component/App.component';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaryComponent>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <AppComponent />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundaryComponent>
  </React.StrictMode>,
);
