import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { ISearchItem } from '../../models/Search.model';
import { addCard, removeCard } from '../../redux/counterSlice';

import './Search-item.component.scss';

const SearchItemComponent: React.FC<ISearchItem> = (props) => {
  const { name, gender, height, mass, eye_color, url } = props;

  // const location = useLocation();
  const dispatch = useAppDispatch();

  const cardId: string = url.split('/').reverse()[1];
  let changeable = useAppSelector((state) =>
    state.checkedCards.IdCards.includes(cardId),
  );

  // const toValue =
  //   location.pathname === '/frontpage'
  //     ? '/'
  //     : `/frontpage?detail=${encodeURIComponent(cardId)}`;

  const handleChange = () => {
    if (!changeable) {
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
      <div className="search-item-container__box-info">
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
      <div className="search-item-container__box-control">
        <input
          checked={changeable}
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
