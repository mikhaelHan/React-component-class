import React, { ReactNode } from 'react';

class ErrorBoundaryComponent extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
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
