/**
 * Created by rharik on 5/11/16.
 */

import React from 'react';
import { Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import Course from './containers/CourseContainer';

const routes = (
    <Route path="/" component={AppContainer}>
        <Route path="course(/:id)" component={Course} />
    </Route>);

export default routes;
