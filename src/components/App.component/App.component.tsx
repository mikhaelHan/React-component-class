import React, { useState, useEffect } from 'react';

import './App.component.scss';

import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import APIrequest from '../../services/client-API.service';
import LSService from '../../services/Local-storage.service';
import SearchListComponent from '../Search-list.component/Search-list.component';

const AppComponent: React.FC = () => {
  const [state, setState] = useState<{ data: ISearchItem[]; isLoad: boolean }>({
    data: [],
    isLoad: false,
  });

  const getData = async (search?: string) => {
    setState((prev) => ({ ...prev, isLoad: true }));

    const LSResult: string =
      search === undefined ? LSService() : LSService(search);
    const ApiRes: ISearchItem[] | null = await APIrequest(LSResult);

    setState({ data: ApiRes || [], isLoad: false });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Class component !</h1>
      <div className="app-container">
        <SearchComponent onSearchChange={getData} />
      </div>
      <div className="app-container">
        {state.isLoad ? (
          <p className="app-container__loading">Loading ...</p>
        ) : (
          <SearchListComponent data={state.data} />
        )}
      </div>
    </div>
  );
};

export default AppComponent;
