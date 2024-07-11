import React, { useState, useRef, useEffect } from 'react';

import './Search.component.scss';
import LSService from '../../services/Local-storage.service';

const SearchComponent: React.FC<{
  onSearchChange: (searchValue: string) => void;
}> = (props) => {
  const [valueState, setValueState] = useState<string>(LSService());
  const [toggleState, setToggleState] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevValue = useRef<string>('');

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
          className="search-container__input"
          type="search"
          size={30}
        />
        <input
          value="Search"
          type="submit"
          className="search-container__button"
        />
      </form>
      <button
        onClick={throwError}
        type="button"
        className="search-container__button"
      >
        Error
      </button>
    </div>
  );
};

export default SearchComponent;
