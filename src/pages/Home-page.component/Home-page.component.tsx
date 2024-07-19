import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetCardsByParamQuery } from '../../redux/RtkApi';
import './Home-page.component.scss';

import SearchComponent from '../../components/Search.component/Search.component';
import { ISearchResult } from '../../models/Search.model';
import SearchListComponent from '../../components/Search-list.component/Search-list.component';
import useLocalStorage from '../../services/useLocalStorage.service';
import PaginationComponent from '../../components/Pagination.component/Pagination.component';

const HomePageComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useLocalStorage();

  const { data, isLoading } = useGetCardsByParamQuery<{
    data: ISearchResult;
    isLoading: boolean;
  }>(searchQuery);

  const changeStorageSearch = (value: string | number) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    changeStorageSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className="home-page-wrapper">
      <h1 className="home-page-title">Class component !</h1>
      <div className="home-page-container home-page-container__search">
        <SearchComponent onSearchChange={changeStorageSearch} />
      </div>
      <div className="home-page-container home-page-container__list-box">
        <div className="home-page-container__list">
          {isLoading ? (
            <p className="home-page-container__loading">Loading ...</p>
          ) : (
            <SearchListComponent data={data?.results || []} />
          )}
        </div>
        <Outlet />
      </div>
      {typeof searchQuery === 'number' && (
        <div className="home-page-container home-page-container__pagination">
          <PaginationComponent onPaginationChange={changeStorageSearch} />
        </div>
      )}
    </div>
  );
};

export default HomePageComponent;
