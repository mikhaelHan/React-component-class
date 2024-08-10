import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPageComponent from '@/components/Not-found-page.component/Not-found-page.component';

describe('Page', () => {
  it('renders NotFoundPageComponent with inclide the image', () => {
    render(<NotFoundPageComponent />);

    const notFoundImg = screen.getByRole('img', { name: '404-page' });
    expect(notFoundImg).toBeInTheDocument();
  });
});
