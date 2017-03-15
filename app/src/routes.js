import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import ProdToolsContainer from './containers/ProdToolsContainer';
import AppContainer from './containers/AppContainer';

let redirectActivity = '/prodtools';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/prodtools" component={ProdToolsContainer} />
  </Route>);
module.exports = routes;


