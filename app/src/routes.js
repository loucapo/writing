import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import KitchenSink from './components/KitchenSink/KitchenSink';
import AppContainer from './containers/AppContainer';
import LaunchContainer from './containers/LaunchContainer';
import StudentDraftContainer from './containers/StudentDraftContainer';

let redirectActivity = '/resource';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/resource/:resournceId" component={LaunchContainer} />
    <Route path="/studentActivity/:studentActivityId/studentdraft/:draftId" component={StudentDraftContainer} />
  </Route>);
module.exports = routes;


