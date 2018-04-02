import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Main from './Main';
import Profile from './Profile';
import SetupProfile from './Profile/components/SetupProfile';
import PageNotFound from './common/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/profile" component={Profile} />  
    <Route path="/profile/setup" component={SetupProfile} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);