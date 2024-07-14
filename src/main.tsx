import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import AppComponent from './components/App.component/App.component';
import ErrorBoundaryComponent from './components/Error-boundary.component/Error-boundary.component';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaryComponent>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </ErrorBoundaryComponent>
  </React.StrictMode>,
);
