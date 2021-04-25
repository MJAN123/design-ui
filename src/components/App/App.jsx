import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {
  userName = this.props.userName;
  render() {
    return <div>{this.userName}</div>;
  }
}

export default App;
