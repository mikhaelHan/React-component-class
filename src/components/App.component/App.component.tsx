import React, { useState, useEffect } from 'react';

import './App.component.scss';

import SearchComponent from '../Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import APIrequest from '../../services/client-API.service';
import SearchListComponent from '../Search-list.component/Search-list.component';
import useLocalStorage from '../../services/useLocalStorage.service';

const AppComponent: React.FC = () => {
  const [state, setState] = useState<{ data: ISearchItem[]; isLoad: boolean }>({
    data: [],
    isLoad: false,
  });

  const [searchQuery, setSearchQuery] = useLocalStorage();

  const changeStorageValue = (value: string) => {
    setSearchQuery(value);
  };

  const getData = async (search: string) => {
    setState((prev) => ({ ...prev, isLoad: true }));

    const ApiRes: ISearchItem[] | null = await APIrequest(search);

    setState({ data: ApiRes || [], isLoad: false });
  };

  useEffect(() => {
    getData(searchQuery);
  }, [searchQuery]);

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Class component !</h1>
      <div className="app-container">
        <SearchComponent onSearchChange={changeStorageValue} />
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
