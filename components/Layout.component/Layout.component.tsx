import { Provider } from 'react-redux';
import { ThemeProvider } from 'services/Theme.provider';

import ErrorBoundaryComponent from '../Error-boundary.component/Error-boundary.component';

import HomePageComponent from '../Home-page.component/Home-page.component';
import store from '../../redux';

const LayoutComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ErrorBoundaryComponent>
      <Provider store={store}>
        <ThemeProvider>
          <HomePageComponent>{children}</HomePageComponent>
        </ThemeProvider>
      </Provider>
    </ErrorBoundaryComponent>
  );
};

export default LayoutComponent;
