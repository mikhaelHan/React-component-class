import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Search-item.component.scss';
import { ISearchItem } from '../../models/Search.model';
import { addCard, removeCard } from '../../slices/counterSlice';

const SearchItemComponent: React.FC<ISearchItem> = (props) => {
  const { name, gender, height, mass, eye_color, url } = props;

  const location = useLocation();
  const dispatch = useDispatch();

  const cardId: string = url.split('/').reverse()[1];

  const toValue =
    location.pathname === '/frontpage'
      ? '/'
      : `/frontpage?detail=${encodeURIComponent(cardId)}`;

  let changeable = true;

  const handleChange = () => {
    if (changeable) {
      dispatch(
        addCard({
          id: cardId,
          name,
          gender,
          height,
          mass,
          eye_color,
        }),
      );
    } else {
      dispatch(removeCard(cardId));
    }

    changeable = !changeable;
  };

  return (
    <div
      className="search-item-container"
      style={{ border: `0.2rem solid ${eye_color}` }}
    >
      <Link className="search-item-container__box-info" to={toValue}>
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
      </Link>
      <div className="search-item-container__box-control">
        <input
          onChange={handleChange}
          className="search-item-container__control"
          type="checkbox"
          name={name}
          id={cardId}
        />
      </div>
    </div>
  );
};

export default SearchItemComponent;
