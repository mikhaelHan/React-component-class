import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Drop-down.component.scss';
import { IStore } from '../../models/redux.model';
import { removeAllCards } from '../../redux/counterSlice';

const DropDownComponent: React.FC = () => {
  const dispatch = useDispatch();

  const visible = useSelector(
    (state: IStore) => !!state.checkedCards.IdCards.length,
  );
  const condition = useSelector(
    (state: IStore) => state.checkedCards.IdCards.length,
  );

  return (
    <div
      className={`${visible ? 'drop-down-container active' : 'drop-down-container'}`}
    >
      <button
        onClick={() => dispatch(removeAllCards())}
        type="button"
        className="drop-down-container__button drop-down-container__cancel"
      >
        Cancel
      </button>
      <button
        type="button"
        className="drop-down-container__button drop-down-container__load"
      >
        Load
      </button>
      <p className="drop-down-container__condition-text">
        Condition
        {'  '}
        <span className="drop-down-container__condition">{condition}</span>
      </p>
    </div>
  );
};

export default DropDownComponent;
