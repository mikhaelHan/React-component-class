import { ISearchItem } from 'models/Search.model';
import SearchItemComponent from '../Search-item.component/Search-item.component';

const SearchListComponent: React.FC<{ data: ISearchItem[] }> = ({ data }) => {
  return (
    <div className="search-list-container">
      <ul className="search-list-container__wrapper">
        {data.map((el: ISearchItem) => {
          return (
            <li key={el.created} className="serch-list-container__item">
              <SearchItemComponent
                name={el.name}
                gender={el.gender}
                height={el.height}
                mass={el.mass}
                eye_color={el.eye_color}
                url={el.url}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchListComponent;
