import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../Common/Loader';
import Signup from '../SignUp';
import Login from '../Login';
import UserForm from '../UserForm';
import LandingPage from '../LandingPage';
import Google2fa from '../Google2fa';
export class App extends Component {
  userName = this.props.userName;

  render() {
    return (
      <div className='app-container'>
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
            <Route path='/landing-page'>
              <LandingPage />
            </Route>
            <Route path='/google-2fa'>
              <Google2fa />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
