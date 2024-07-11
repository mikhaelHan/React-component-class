import React, { useState, useEffect } from 'react';

import './Home-page.component.scss';

import SearchComponent from '../../components/Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import APIrequest from '../../services/client-API.service';
import SearchListComponent from '../../components/Search-list.component/Search-list.component';
import useLocalStorage from '../../services/useLocalStorage.service';

const HomePageComponent: React.FC = () => {
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
    <div className="home-page-wrapper">
      <h1 className="home-page-title">Class component !</h1>
      <div className="home-page-container home-page-container__search">
        <SearchComponent onSearchChange={changeStorageValue} />
      </div>
      <div className="home-page-container home-page-container__list">
        {state.isLoad ? (
          <p className="home-page-container__loading">Loading ...</p>
        ) : (
          <SearchListComponent data={state.data} />
        )}
      </div>
    </div>
  );
};

export default HomePageComponent;
