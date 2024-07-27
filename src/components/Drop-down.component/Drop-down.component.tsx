import React, { useContext } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { removeAllCards } from '../../redux/counterSlice';

import './Drop-down.component.scss';
import { ThemeContext } from '../../services/Theme.provider';

const DropDownComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const visible = useAppSelector(
    (state) => !!state.checkedCards.IdCards.length,
  );
  const condition = useAppSelector(
    (state) => state.checkedCards.IdCards.length,
  );

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${visible ? 'drop-down-container active' : 'drop-down-container'}`}
    >
      <button
        onClick={() => dispatch(removeAllCards())}
        type="button"
        className={`drop-down-container__button drop-down-container__button ${isDarkTheme ? 'dark' : 'light'}`}
      >
        Cancel
      </button>
      <button
        type="button"
        className={`drop-down-container__button drop-down-container__button ${isDarkTheme ? 'dark' : 'light'}`}
      >
        Load
      </button>
      <p className="drop-down-container__condition-text">
        Condition
        {'  '}
        <span
          className={`drop-down-container__condition drop-down-container__condition ${isDarkTheme ? 'dark' : 'light'}`}
        >
          {condition}
        </span>
      </p>
    </div>
  );
};

export default DropDownComponent;
