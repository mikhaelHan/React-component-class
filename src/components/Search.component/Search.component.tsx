import React, { useState, useRef, useEffect, useContext } from 'react';

import './Search.component.scss';
import KEY from '../../models/Local-storage.model';
import { ThemeContext } from '../../services/Theme.provider';

const SearchComponent: React.FC<{
  onSearchChange: (searchValue: string) => void;
}> = (props) => {
  const [toggleState, setToggleState] = useState<boolean>(false);

  const [valueState, setValueState] = useState<string>(() => {
    const item: string | null = localStorage.getItem(KEY);
    if (item !== null && typeof JSON.parse(item) === 'string') {
      return JSON.parse(item);
    }
    return '';
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevValue = useRef<string>('');
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    prevValue.current = valueState;
  }, [valueState]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { onSearchChange } = props;
    e.preventDefault();
    const searchValue = inputRef.current?.value.trim();

    if (searchValue !== undefined && searchValue !== valueState) {
      onSearchChange(searchValue);
      setValueState(searchValue);
    }
  };

  const throwError = () => {
    setToggleState(true);
  };

  if (toggleState) throw new Error('Oooops, something went wrong...');
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-container__form">
        <input
          ref={inputRef}
          placeholder="Search..."
          className={`search-container__input ${isDarkTheme ? 'input-dark' : 'input-light'}`}
          type="search"
          size={30}
        />
        <input
          value="Search"
          type="submit"
          className={`search-container__button ${isDarkTheme ? 'btn-dark' : 'btn-light'}`}
        />
      </form>
      <div className="search-container__button-box">
        <button
          onClick={toggleTheme}
          type="button"
          className={`search-container__button ${isDarkTheme ? 'btn-dark' : 'btn-light'}`}
        >
          Change Theme
        </button>
        <button
          onClick={throwError}
          type="button"
          className={`search-container__button ${isDarkTheme ? 'btn-dark' : 'btn-light'}`}
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
