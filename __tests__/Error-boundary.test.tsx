import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorBoundaryComponent from '@/components/Error-boundary.component/Error-boundary.component';

describe('Component', () => {
  const mockChild = <div>Child element</div>;
  it('renders child elements if there is no error', () => {
    const { container } = render(
      <ErrorBoundaryComponent>{mockChild}</ErrorBoundaryComponent>,
    );

    expect(container.querySelector('.error-container')).toBeNull();
  });
});
