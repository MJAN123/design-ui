import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../common/Loader';
import Signup from '../SignUp';
import Login from '../Login';
import UserForm from '../UserForm';
import Drawer from '../Drawer';
export class App extends Component {
  userName = this.props.userName;

  render() {
    return (
      <div className='app-container'>
        <Drawer />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/userForm'>
              <UserForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
