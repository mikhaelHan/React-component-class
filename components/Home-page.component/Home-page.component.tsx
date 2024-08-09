import { ISearchResult } from '@/models/Search.model';
import { useGetCardsByParamQuery } from '@/redux/RtkApi';
import { ThemeContext } from '@/services/Theme.provider';
import useLocalStorage from '@/services/useLocalStorage.service';
import { useContext, useEffect } from 'react';
import SearchComponent from '../Search.component/Search.component';
import SearchListComponent from '../Search-list.component/Search-list.component';
import DropDownComponent from '../Drop-down.component/Drop-down.component';
import PaginationComponent from '../Pagination.component/Pagination.component';

const HomePageComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

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
    <div
      className={`app-container ${isDarkTheme ? 'container-dark' : 'container-light'}`}
    >
      <div className="app-container__box">
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
              <DropDownComponent />
            </div>
            {children}
          </div>
          {typeof searchQuery === 'number' && (
            <div className="home-page-container home-page-container__pagination">
              <PaginationComponent onPaginationChange={changeStorageSearch} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
