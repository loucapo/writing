import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ProdToolsContainer from './containers/ProdToolsContainer';
import QuickFeedbackForm from './components/MLForm/Forms/QuickFeedback';
import AppContainer from './containers/AppContainer';

let redirectActivity = '/prodtools';

const routes = (
  <Route path="/" component={AppContainer} history={createBrowserHistory()}>
    <IndexRedirect to={redirectActivity} />
    <Route path="/prodtools" component={ProdToolsContainer} />
    <Route path="/quick-feedback-creation" component={QuickFeedbackForm} />
  </Route>);
module.exports = routes;


