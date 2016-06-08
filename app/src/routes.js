/**
 * Created by rharik on 5/11/16.
 */
"use strict";

import React from 'react'
import { Route } from 'react-router'

import  AppContainer from './containers/AppContainer'
import  {CourseContainer} from './containers/CourseContainer'

var routes = (
    <Route path="/" component={AppContainer}>
        <Route path="course(/:id)" component={CourseContainer} />
    </Route>);

module.exports = routes;
