import React, { Component } from 'react';
import Signup from '../SignUp';
import Login from '../Login';
export class App extends Component {
  userName = this.props.userName;
  render() {
    return (
      <div className='app-container'>
        {/* <Signup /> */}
        <Login />
      </div>
    );
  }
}

export default App;
