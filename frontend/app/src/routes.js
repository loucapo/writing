import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import {
  LaunchContainer,
  CompositionContainer,
  CompositionDisplayContainer,
  ReflectionQuestionsFormContainer,
  FeedbackToolContainer,
  FeedbackDisplayContainer
} from './containers/index';
import KitchenSink from './components/KitchenSink/KitchenSink';
import Layout from './components/Layout/Layout';

let redirectActivity = '/resource';
const routes = (
  <Route path="/" component={Layout}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/kitchensink" component={KitchenSink} />
    <Route path="/activity/:activityId/draft/:draftId" component={CompositionContainer} />
    <Route
      path="/activity/:activityId/studentDraft/:studentDraftId/display"
      component={CompositionDisplayContainer}
    />
    <Route
      path="/reflectionQuestions/:activityId/studentdraft/:studentDraftId"
      component={ReflectionQuestionsFormContainer}
    />
    <Route path="/studentdraft/:studentDraftId/feedbacktool" component={FeedbackToolContainer} />
    <Route path="/studentdraft/:studentDraftId/feedbackdisplay" component={FeedbackDisplayContainer} />

    {/* This route needs to be at the bottom, since it is the most non-specific */}
    <Route path="/:lmsId/:courseId/:activityId" component={LaunchContainer} />
  </Route>
);
module.exports = routes;
