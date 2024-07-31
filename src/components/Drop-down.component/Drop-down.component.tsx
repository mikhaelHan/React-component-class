import React, { useContext } from 'react';
import Papa from 'papaparse';

import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { removeAllCards } from '../../redux/counterSlice';

import './Drop-down.component.scss';
import { ThemeContext } from '../../services/Theme.provider';
import { CheckedCard } from '../../models/redux.model';

const DropDownComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const visible: boolean = useAppSelector(
    (state) => !!state.checkedCards.IdCards.length,
  );
  const condition: number = useAppSelector(
    (state) => state.checkedCards.IdCards.length,
  );
  const dataParse: CheckedCard[] = useAppSelector(
    (state) => state.checkedCards.cards,
  );

  const { isDarkTheme } = useContext(ThemeContext);

  const exportDataCSV = () => {
    const csvData: string = Papa.unparse(dataParse);
    const csvBlob: Blob = new Blob([csvData], { type: 'text/csv' });
    const csvUrl: string = URL.createObjectURL(csvBlob);

    const link: HTMLAnchorElement = document.createElement('a');
    link.href = csvUrl;
    link.download = `${dataParse.length}_episodes.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(csvUrl);
  };

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
        onClick={exportDataCSV}
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
