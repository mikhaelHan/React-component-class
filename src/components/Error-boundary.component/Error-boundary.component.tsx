import React, { ReactNode } from 'react';

import './Error-boundary.component.scss';

class ErrorBoundaryComponent extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-container">
          <h1 className="error-container__text">
            Oooops, something went wrong...
          </h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;
