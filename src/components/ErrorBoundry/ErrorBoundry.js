import React, { Component } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(err) {
    this.setState({ hasError: true });
  }

  render() {
    return <>{this.state.hasError ? <ErrorPage /> : this.props.children}</>;
  }
}
