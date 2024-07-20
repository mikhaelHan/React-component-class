import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.component.scss';
import HomePageComponent from '../../pages/Home-page.component/Home-page.component';
import NotFoundPageComponent from '../../pages/Not-found-page.component/Not-found-page.component';
import DetailPageComponent from '../../pages/Detail-page.component/Detail-page.component';
import { ThemeContext } from '../../services/Theme.provider';

const AppComponent: React.FC = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`app-container ${isDarkTheme ? 'container-dark' : 'container-light'}`}
    >
      <div className="app-container__box">
        <Routes>
          <Route path="/" element={<HomePageComponent />}>
            <Route path="frontpage" element={<DetailPageComponent />} />
          </Route>
          <Route path="/*" element={<NotFoundPageComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppComponent;
