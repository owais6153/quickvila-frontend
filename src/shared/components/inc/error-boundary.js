import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div id="error-boundry">
          <div className="catch">
            <h1>Opps! Something went wrong.</h1>
            <p>
              Something went wrong, We are working on it, Please try again
              later.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
