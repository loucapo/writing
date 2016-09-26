import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ActivityContainer from './containers/ActivityContainer';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/" component={PageNotFound}>
    <IndexRoute />
    <Route path="activity/:id" component={ActivityContainer} />
    <Route path="" component={EditorWrapper} />
  </Route>);
module.exports = routes;


