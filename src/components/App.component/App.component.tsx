import React from 'react';

import './App.component.scss';
import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';
import APIrequest from '../../services/client-API.service';

class AppComponent extends React.Component<never, { data: ISearchItem[] }> {
  constructor(props: never) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res: ISearchItem[] | null = await APIrequest('');
    if (res) {
      this.setState({ data: res });
    } else {
      this.setState({ data: [] });
    }
  }

  render(): React.ReactNode {
    const { data } = this.state;

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
                <li key={el.created} className="app-container__item">
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
  }
}

export default AppComponent;
