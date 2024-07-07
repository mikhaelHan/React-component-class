import React from 'react';

import './Search.component.scss';

class SearchComponent extends React.Component<
  { onSearchChange: (searchValue: string) => void },
  { search: string }
> {
  constructor(props: { onSearchChange: (searchValue: string) => void }) {
    super(props);
    this.state = { search: '' };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { search } = this.state;
    const { onSearchChange } = this.props;
    e.preventDefault();
    onSearchChange(search);
    this.setState({ search: '' });
  };

  public inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    this.setState({ search: val });
  };

  render(): React.ReactNode {
    const { search } = this.state;
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit} className="search-container__form">
          <input
            onChange={this.inputOnChange}
            value={search}
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
        <button type="button" className="search-container__button">
          Error
        </button>
      </div>
    );
  }
}

export default SearchComponent;
