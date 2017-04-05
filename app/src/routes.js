import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import ActivityContainer from './containers/ActivityContainer';
import AppContainer from './containers/AppContainer';

let redirectActivity = '/resource';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/resource/*" component={ActivityContainer} />
  </Route>);
module.exports = routes;


