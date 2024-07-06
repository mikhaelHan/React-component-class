import React from 'react';

import './Search-item.component.scss';

const SearchItemComponent: React.FC<{
  name: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
}> = ({ name, gender, height, mass, eye_color }) => {
  return (
    <div
      className="search-item-container"
      style={{ border: `0.2rem solid ${eye_color}` }}
    >
      <h3 className="search-item-container__title">{name}</h3>
      <div className="search-item-container__info">
        <p className="search-item-container__item">
          Gender:{' '}
          <span className="search-item-container__item-bold">{gender}</span>
        </p>
        <p className="search-item-container__item">
          Height:{' '}
          <span className="search-item-container__item-bold">{height}</span>
        </p>
        <p className="search-item-container__item">
          Mass: <span className="search-item-container__item-bold">{mass}</span>
        </p>
      </div>
    </div>
  );
};

export default SearchItemComponent;
