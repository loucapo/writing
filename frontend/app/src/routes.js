import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import KitchenSink from './components/KitchenSink/KitchenSink';
import AppContainer from './containers/AppContainer';
import LaunchContainer from './containers/LaunchContainer';
import StudentDraftContainer from './containers/StudentDraftContainer';
import StudentReflectionQuestionsContainer from './containers/StudentReflectionQuestionsContainer';

let redirectActivity = '/resource';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/lms/:lmsId/course/:courseId/resource/:activityId" component={LaunchContainer} />
    <Route path="/activity/:activityId/draft/:draftId" component={StudentDraftContainer} />
    <Route path="/studentReflectionQuestions/:studentActivityId/studentdraft/:studentDraftId"
      component={StudentReflectionQuestionsContainer} />
  </Route>);
module.exports = routes;


