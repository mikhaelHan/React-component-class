import React from 'react';

import './App.component.scss';
import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';

const AppComponent: React.FC = () => {
  const data: ISearchItem[] = [
    {
      name: 'Abby',
      gender: 'male',
      height: '175',
      mass: '142',
      eye_color: 'blue',
    },
    {
      name: 'Luck',
      gender: 'male',
      height: '118',
      mass: '102',
      eye_color: 'yellow',
    },
  ];
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Class component !</h1>
      <div className="app-container">
        <SearchComponent />
      </div>
      <div className="app-container">
        <ul className="app-container__list">
          {data.map((el: ISearchItem) => {
            return (
              <li className="app-container__item">
                <SearchItemComponent
                  name={el.name}
                  gender={el.gender}
                  height={el.height}
                  mass={el.mass}
                  eye_color={el.eye_color}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AppComponent;
