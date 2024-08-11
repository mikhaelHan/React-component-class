import { useContext, useState } from 'react';
import { ThemeContext } from 'services/Theme.provider';

const PaginationComponent: React.FC<{
  onPaginationChange: (paginationValue: number) => void;
}> = (props) => {
  const [paginationState, setPaginationState] = useState<number>(1);

  const { isDarkTheme } = useContext(ThemeContext);

  const changePagination = (state: boolean) => {
    const { onPaginationChange } = props;
    if (state) {
      setPaginationState((prev) => prev + 1);
      onPaginationChange(paginationState + 1);
    } else {
      setPaginationState((prev) => prev - 1);
      onPaginationChange(paginationState - 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        onClick={() => changePagination(false)}
        disabled={paginationState <= 1}
        type="button"
        className={`pagination-container__button ${isDarkTheme ? 'btn-dark' : 'btn-light'}`}
      >
        prev
      </button>
      <span className="pagination-container__condition">{paginationState}</span>
      <button
        onClick={() => changePagination(true)}
        disabled={paginationState >= 9}
        type="button"
        className={`pagination-container__button ${isDarkTheme ? 'btn-dark' : 'btn-light'}`}
      >
        next
      </button>
    </div>
  );
};

export default PaginationComponent;
