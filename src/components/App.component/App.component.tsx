import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.component.scss';
import HomePageComponent from '../../pages/Home-page.component/Home-page.component';
import NotFoundPageComponent from '../../pages/Not-found-page.component/Not-found-page.component';
import DetailPageComponent from '../../pages/Detail-page.component/Detail-page.component';

const AppComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageComponent />}>
        <Route path="frontpage" element={<DetailPageComponent />} />
      </Route>
      <Route path="*" element={<NotFoundPageComponent />} />
    </Routes>
  );
};

export default AppComponent;
