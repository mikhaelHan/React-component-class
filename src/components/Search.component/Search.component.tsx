import React from 'react';

import './Search.component.scss';

class SearchComponent extends React.Component {
  render(): React.ReactNode {
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
  }
}

export default SearchComponent;
