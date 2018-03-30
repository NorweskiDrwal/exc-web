import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import PageNotFound from './common/PageNotFound';

export default (
  <Switch>
    <Route path="*" component={PageNotFound} />
  </Switch>
);