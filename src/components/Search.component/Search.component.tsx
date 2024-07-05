import React from 'react';

import './Search.component.scss';

// import ApiService from '../../services/client-API.service';

const SearchComponent: React.FC = () => {
  // const data = [];
  // const getResult = async (): Promise<void> => {
  // const res = await ApiService();
  // };
  return (
    <div className="search-container">
      <input
        placeholder="Search..."
        className="search-container__input"
        type="search"
        size={30}
      />
      <button type="button" className="search-container__button">
        Search
      </button>
      <button type="button" className="search-container__button">
        Error
      </button>
    </div>
  );
};

export default SearchComponent;
