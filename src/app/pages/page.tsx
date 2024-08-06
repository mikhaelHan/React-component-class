'use client';
import { Provider } from 'react-redux';
import ErrorBoundaryComponent from '../../components/Error-boundary.component/Error-boundary.component';
import store from '../../redux';
import ThemeProvider from '../../services/Theme.provider';
import AppComponent from '../../components/App.component/App.component';

const Index = () => {
  return (
    <ErrorBoundaryComponent>
      <Provider store={store}>
        <ThemeProvider>
          <AppComponent />
        </ThemeProvider>
      </Provider>
    </ErrorBoundaryComponent>
  );
};

export default Index;
