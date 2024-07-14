import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './Home-page.component.scss';

import SearchComponent from '../../components/Search.component/Search.component';
import { ISearchItem } from '../../models/Search.model';
import { APIListRequest } from '../../services/client-API.service';
import SearchListComponent from '../../components/Search-list.component/Search-list.component';
import useLocalStorage from '../../services/useLocalStorage.service';
import PaginationComponent from '../../components/Pagination.component/Pagination.component';
import { ILSValue } from '../../models/Local-storage.model';

const HomePageComponent: React.FC = () => {
  const [state, setState] = useState<{
    data: ISearchItem[];
    isLoad: boolean;
    isPagination: boolean;
  }>({
    data: [],
    isLoad: false,
    isPagination: false,
  });

  const [searchQuery, setSearchQuery] = useLocalStorage();

  const changeStorageSearch = (value: string) => {
    const item: ILSValue = {
      search: value,
      page: 1,
    };
    setSearchQuery(item);
  };

  const changePaginationValue = (value: number) => {
    const item: ILSValue = {
      search: '',
      page: value,
    };
    setSearchQuery(item);
  };

  const getData = async (qwery: ILSValue) => {
    let ApiRes: ISearchItem[] | null;
    if (qwery.search === '') {
      setState((prev) => ({ ...prev, isLoad: true, isPagination: true }));
      ApiRes = await APIListRequest(`?page=${qwery.page}`);
      setState((prev) => ({ ...prev, data: ApiRes || [], isLoad: false }));
    } else {
      ApiRes = await APIListRequest(`?search=${qwery.search}`);
      setState({ data: ApiRes || [], isLoad: false, isPagination: false });
    }
  };

  useEffect(() => {
    getData(searchQuery);
  }, [searchQuery]);

  return (
    <div className="home-page-wrapper">
      <h1 className="home-page-title">Class component !</h1>
      <div className="home-page-container home-page-container__search">
        <SearchComponent onSearchChange={changeStorageSearch} />
      </div>
      <div className="home-page-container home-page-container__list-box">
        <div className="home-page-container__list">
          {state.isLoad ? (
            <p className="home-page-container__loading">Loading ...</p>
          ) : (
            <SearchListComponent data={state.data} />
          )}
        </div>
        <Outlet />
      </div>
      {state.isPagination && (
        <div className="home-page-container home-page-container__pagination">
          <PaginationComponent onPaginationChange={changePaginationValue} />
        </div>
      )}
    </div>
  );
};

export default HomePageComponent;
