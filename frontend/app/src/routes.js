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
    <Route path="/lms/:lmsId/course/:courseId/resource/:activityId" component={LaunchContainer} />
    <Route path="/studentActivity/:studentActivityId/studentdraft/:draftId" component={StudentDraftContainer} />
  </Route>);
module.exports = routes;


