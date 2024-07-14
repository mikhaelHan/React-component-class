import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Search-item.component.scss';
import { ISearchItem } from '../../models/Search.model';

const SearchItemComponent: React.FC<ISearchItem> = (props) => {
  const { name, gender, height, mass, eye_color, url } = props;

  const location = useLocation();

  const toValue =
    location.pathname === '/frontpage'
      ? '/'
      : `/frontpage?detail=${encodeURIComponent(url.split('/').reverse()[1])}`;

  return (
    <Link to={toValue}>
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
            Mass:{' '}
            <span className="search-item-container__item-bold">{mass}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItemComponent;
