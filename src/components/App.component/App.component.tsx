import React from 'react';

import './App.component.scss';
import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';
import APIrequest from '../../services/client-API.service';
import LSService from '../../services/Local-storage.service';

class AppComponent extends React.Component<unknown, { data: ISearchItem[] }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const LSResult: string = LSService();

    const ApiResult: ISearchItem[] | null = await APIrequest(LSResult);
    if (ApiResult) {
      this.setState({ data: ApiResult });
    } else {
      this.setState({ data: [] });
    }
  }

  public handleSearchChange = async (search: string) => {
    const searchValue = search.trim();
    const LSResult: string = LSService(searchValue);

    const result: ISearchItem[] | null = await APIrequest(LSResult);
    if (result) {
      this.setState({ data: result });
    } else {
      this.setState({ data: [] });
    }
  };

  render(): React.ReactNode {
    const { data } = this.state;

    return (
      <div className="app-wrapper">
        <h1 className="app-title">Class component !</h1>
        <div className="app-container">
          <SearchComponent onSearchChange={this.handleSearchChange} />
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
