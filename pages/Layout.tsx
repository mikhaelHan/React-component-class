import ErrorBoundaryComponent from '@/components/Error-boundary.component/Error-boundary.component';
import HomePageComponent from '@/components/Home-page.component/Home-page.component';
import store from '@/redux';
import ThemeProvider from '@/services/Theme.provider';
import { Provider } from 'react-redux';

const Layout: React.FC<{
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

export default Layout;
