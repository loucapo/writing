import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ActivityContainer from './containers/ActivityContainer';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';
import DashBoard from './components/DashBoard/DashBoard';
import CreateAssignmentContainer from './containers/CreateAssignmentContainer';
import PageNotFound from './components/PageNotFound';
import AppContainer from './containers/AppContainer';
import StudentSubmissionContainer from './containers/StudentSubmissionContainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PageNotFound} />
    <Route path="/editor" component={EditorWrapper} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/create" component={CreateAssignmentContainer} />
    <Route path="/activity/:id" component={ActivityContainer} />
    <Route path="/studentSubmission/:id" component={StudentSubmissionContainer} />
  </Route>);
module.exports = routes;


