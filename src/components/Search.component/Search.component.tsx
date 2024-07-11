import React, { useState } from 'react';

import './Search.component.scss';

const SearchComponent: React.FC<{
  onSearchChange: (searchValue: string) => void;
}> = (props) => {
  const [searchState, setSearchState] = useState<string>('');
  const [toggleState, setToggleState] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { onSearchChange } = props;
    e.preventDefault();
    onSearchChange(searchState);
    setSearchState('');
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setSearchState(val);
  };

  const throwError = () => {
    setToggleState(true);
  };

  if (toggleState) throw new Error('Oooops, something went wrong...');
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-container__form">
        <input
          onChange={inputOnChange}
          value={searchState}
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
