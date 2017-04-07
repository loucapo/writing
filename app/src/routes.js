import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import ActivityContainer from './containers/ActivityContainer';
import KitchenSink from './components/KitchenSink/KitchenSink';
import AppContainer from './containers/AppContainer';

let redirectActivity = '/resource';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/activity/*" component={ActivityContainer} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/resource/*" component={ActivityContainer} />
  </Route>);
module.exports = routes;


