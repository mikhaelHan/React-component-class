import React, { useContext } from 'react';

import './App.component.scss';
import HomePageComponent from '../../App-pages/Home-page.component/Home-page.component';

import { ThemeContext } from '../../services/Theme.provider';

const AppComponent: React.FC = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`app-container ${isDarkTheme ? 'container-dark' : 'container-light'}`}
    >
      <div className="app-container__box">
        <HomePageComponent />
      </div>
    </div>
  );
};

export default AppComponent;
