import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.scss';

import AppComponent from './components/App.component/App.component';
import ErrorBoundaryComponent from './components/Error-boundary.component/Error-boundary.component';
import store from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaryComponent>
      <BrowserRouter>
        <Provider store={store}>
          <AppComponent />
        </Provider>
      </BrowserRouter>
    </ErrorBoundaryComponent>
  </React.StrictMode>,
);
