import PaginationComponent from '@/components/Pagination.component/Pagination.component';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Component', () => {
  it('renders PaginationComponent with Prev and Next buttons', () => {
    render(<PaginationComponent onPaginationChange={() => {}} />);

    const prevButton = screen.getByText('prev');
    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.getByText('next');
    expect(nextButton).toBeInTheDocument();

    const onPrevButton = screen.getByText('prev');
    fireEvent.click(onPrevButton);
  });
});
