import React, { useState } from 'react';

import './Pagination.component.scss';
import { LSKey } from '../../models/Local-storage.model';

const PaginationComponent: React.FC<{
  onPaginationChange: (paginationValue: number) => void;
}> = (props) => {
  const [paginationState, setPaginationState] = useState<number>(() => {
    const item: string | null = localStorage.getItem(LSKey.key);
    const parsedItem = item ? JSON.parse(item) : null;
    return parsedItem?.page || 1;
  });

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
        className="pagination-container__button pagination-container__prev"
      >
        prev
      </button>
      <span className="pagination-container__condition">{paginationState}</span>
      <button
        onClick={() => changePagination(true)}
        disabled={paginationState >= 9}
        type="button"
        className="pagination-container__button pagination-container__next"
      >
        next
      </button>
    </div>
  );
};

export default PaginationComponent;
