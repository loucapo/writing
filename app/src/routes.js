import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import KitchenSink from './components/KitchenSink/KitchenSink';
import AppContainer from './containers/AppContainer';
import LaunchContainer from './containers/LaunchContainer';

let redirectActivity = '/resource';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/resource/*" component={LaunchContainer} />
  </Route>);
module.exports = routes;


