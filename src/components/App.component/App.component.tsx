import React from 'react';

import './App.component.scss';
import SearchComponent from '../Search.component/Search.component';

const AppComponent: React.FC = () => {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Class component !</h1>
      <div className="app-container">
        <SearchComponent />
      </div>
      <div className="app-container">111111</div>
    </div>
  );
};

export default AppComponent;
