import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import {
  LaunchContainer,
  CompositionContainer,
  CompositionDisplayContainer,
  ReflectionQuestionsFormContainer,
  FeedbackToolContainer
} from './containers/index';
import KitchenSink from './components/KitchenSink/KitchenSink';
import Layout from './components/Layout/Layout';

let redirectActivity = '/resource';
const routes = (
  <Route path="/" component={Layout}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/lms/:lmsId/course/:courseId/resource/:activityId" component={LaunchContainer} />
    <Route path="/activity/:activityId/draft/:draftId" component={CompositionContainer} />
    <Route path="/studentDraft/:studentDraftId/display" component={CompositionDisplayContainer} />
    <Route
      path="/reflectionQuestions/:studentActivityId/studentdraft/:studentDraftId"
      component={ReflectionQuestionsFormContainer}
    />
    <Route path="/studentdraft/:studentDraftId/feedbacktool" component={FeedbackToolContainer} />
  </Route>
);
module.exports = routes;
