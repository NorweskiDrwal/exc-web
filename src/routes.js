import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Main from './Main';
import Profile from './Profile';
import PageNotFound from './common/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/profile" component={Profile} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);