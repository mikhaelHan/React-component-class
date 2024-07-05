import React from 'react';

import './App.component.scss';

import ApiService from '../../services/client-API.service';

const App: React.FC = () => {
  const data = [];
  const getResult = async (): Promise<void> => {
    const res = await ApiService();
  };
  return (
    <div className="wrapper">
      <h1 className="title">Class component !</h1>
      <div className="container-top">
        <input
          placeholder="Search..."
          className="container-top__input"
          type="search"
          size={70}
        />
      </div>
      <div className="container-bottom">1</div>
    </div>
  );
};

export default App;
