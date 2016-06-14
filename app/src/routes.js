import React from 'react';
import { Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import { CourseContainer } from './containers/CourseContainer';

const routes = (
    <Route path="/" component={AppContainer} >
        <Route path="course(/:id)" component={CourseContainer} />
    </Route>);

export default routes;
