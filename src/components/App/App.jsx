import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../Common/Loader';
import Signup from '../SignUp';
import Login from '../Login';
import UserForm from '../UserForm';
import LandingPage from '../LandingPage';
import Google2fa from '../Google2fa';
import LandingRoute from '../routes/LandingPage.routes';
export class App extends Component {
  userName = this.props.userName;

  render() {
    return (
      <div className='app-container'>
        <div className='version-info'>
          <span className='key'>Build Version:</span>
          <span className='value'>V1.0.0.1</span>&nbsp;
          <span className='key'>Release Version:</span>
          <span className='value'>V1.0.0.0</span>
        </div>
        <BrowserRouter>
          <Switch>
            <LandingRoute path='/landing-page' />
            <Route exact path='/'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/userForm'>
              <UserForm />
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
