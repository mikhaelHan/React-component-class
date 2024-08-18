import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/Not-found.page';
import { HomePage } from './pages/Home.page';
import { FirsFormPage } from './pages/First-form.page';
import { SecondFormPage } from './pages/Second-form.page';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="first-form" element={<FirsFormPage />} />
        <Route path="second-form" element={<SecondFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
