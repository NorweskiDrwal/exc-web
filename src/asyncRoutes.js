import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/AppLoader';

// Import modules/routes
import Main from './Main';
import Profile from './Profile';
import SetupProfile from './Profile/components/SetupProfile';
import PageNotFound from './common/PageNotFound';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
	loader: () => import('./home'),
	loading: AppLoader
});


export default (
	<Switch>
    <Route exact path="/" component={Main} />
    <Route path="/profile" component={Profile} />  
		<Route path="/profile/setup" component={SetupProfile} />
    <Route path="*" component={PageNotFound} />
	</Switch>
);
