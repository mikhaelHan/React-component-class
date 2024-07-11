import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.component.scss';
import HomePageComponent from '../../pages/Home-page.component/Home-page.component';
import NotFoundPageComponent from '../../pages/Not-found-page.component/Not-found-page.component';

const AppComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageComponent />} />
      <Route path="*" element={<NotFoundPageComponent />} />
    </Routes>
  );
};

export default AppComponent;
