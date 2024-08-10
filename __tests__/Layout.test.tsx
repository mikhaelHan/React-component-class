import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LayoutComponent from '@/components/Layout.component/Layout.component';

describe('Page', () => {
  const mockChild = (
    <div>
      <h2>Child element !</h2>
    </div>
  );
  it('renders LayoutComponent with children element', () => {
    render(<LayoutComponent>{mockChild}</LayoutComponent>);

    const titleText = screen.getByText('Child element !');
    expect(titleText).toBeInTheDocument();
  });
});
