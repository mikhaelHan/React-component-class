import React from 'react';

import './App.component.scss';
import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';
import APIrequest from '../../services/client-API.service';
import LSService from '../../services/Local-storage.service';

class AppComponent extends React.Component<
  unknown,
  { data: ISearchItem[]; isLoading: boolean }
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const LSResult: string = LSService();

    console.log('hello');

    const ApiResult: ISearchItem[] | null = await APIrequest(LSResult);
    if (ApiResult) {
      this.setState({ data: ApiResult, isLoading: false });
    } else {
      this.setState({ data: [], isLoading: false });
    }
  }

  public handleSearchChange = async (search: string) => {
    this.setState({ isLoading: true });

    const searchValue = search.trim();
    const LSResult: string = LSService(searchValue);

    const result: ISearchItem[] | null = await APIrequest(LSResult);
    if (result) {
      this.setState({ data: result, isLoading: false });
    } else {
      this.setState({ data: [], isLoading: false });
    }
  };

  render(): React.ReactNode {
    const { data, isLoading } = this.state;

    return (
      <div className="app-wrapper">
        <h1 className="app-title">Class component !</h1>
        <div className="app-container">
          <SearchComponent onSearchChange={this.handleSearchChange} />
        </div>
        <div className="app-container">
          {isLoading ? (
            <p className="app-container__loading">Loading ...</p>
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}

export default AppComponent;
