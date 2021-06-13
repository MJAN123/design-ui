import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Booking from '../BookingsTable';
import UserManagement from '../UserManagement';
import LandingPage from '../LandingPage';

const LandingPageRoute = () => {
  return (
    <>
      <LandingPage />
      <Switch>
        <Route exact path='/landing-page/booking' component={Booking} />

        <Route
          exact
          path='/landing-page/user-management'
          component={UserManagement}
        />
      </Switch>
    </>
  );
};

export default LandingPageRoute;
