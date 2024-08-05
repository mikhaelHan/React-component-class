import React from 'react';

import './Search-list.component.scss';

import { ISearchItem } from '../../models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';

const SearchListComponent: React.FC<{ data: ISearchItem[] }> = ({ data }) => {
  return (
    <ul className="search-list-container">
      {data.map((el: ISearchItem) => {
        return (
          <li key={el.created} className="serch-list-container__item">
            <SearchItemComponent
              name={el.name}
              gender={el.gender}
              height={el.height}
              mass={el.mass}
              eye_color={el.eye_color}
              url={el.url}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SearchListComponent;
