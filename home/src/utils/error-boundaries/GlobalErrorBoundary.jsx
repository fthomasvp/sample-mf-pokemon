import React from "react";

export default class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('[GlobalErrorBoundary][componentDidCatch]', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h3>Algo de inesperado aconteceu.</h3>;
    }

    return this.props.children;
  }
}
