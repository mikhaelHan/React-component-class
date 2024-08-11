import { Link, useLocation } from '@remix-run/react';
import { ISearchItem } from 'models/Search.model';
import { addCard, removeCard } from 'redux/counterSlice';
import { useAppDispatch, useAppSelector } from 'redux/hook';

const SearchItemComponent: React.FC<ISearchItem> = (props) => {
  const { name, gender, height, mass, eye_color, url } = props;

  const dispatch = useAppDispatch();

  const cardId: string = url.split('/').reverse()[1];
  const changeable = useAppSelector((state) =>
    state.checkedCards.IdCards.includes(cardId),
  );

  const location = useLocation();
  const toPath =
    location.pathname === '/'
      ? `/frontpage&detail=${encodeURIComponent(cardId)}`
      : '/';

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
  };

  return (
    <div
      className="search-item-container"
      style={{ border: `0.2rem solid ${eye_color}` }}
    >
      <Link to={toPath} className="search-item-container__box-info">
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
