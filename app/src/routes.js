import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import ActivityContainer from './containers/ActivityContainer';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';
import DashBoard from './components/DashBoard/DashBoard';
import CreateActivityContainer from './containers/CreateActivityContainer';
import AppContainer from './containers/AppContainer';

let redirectActivity = '/activity/23630184-5955-4dbe-9908-ab065f1bcad2';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/editor" component={EditorWrapper} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/create" component={CreateActivityContainer} />
    <Route path="/activity/:id" component={ActivityContainer} />
  </Route>);
module.exports = routes;


