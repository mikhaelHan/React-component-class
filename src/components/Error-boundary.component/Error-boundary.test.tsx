import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import React from 'react';
import ErrorBoundaryComponent from './Error-boundary.component';

test('renders child elements if there is no error', () => {
  const mockChild = <div>Child element</div>;
  const { container } = render(
    <ErrorBoundaryComponent>{mockChild}</ErrorBoundaryComponent>,
  );

  expect(container.querySelector('.errorйй-container')).toBeNull();
});
