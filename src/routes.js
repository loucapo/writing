/**
 * Created by rharik on 5/11/16.
 */
"use strict";

import React from 'react'
import { Route } from 'react-router'

import  AppContainer from './containers/AppContainer'

var routes = (
    <Route path="/" component={AppContainer}>
    </Route>);

module.exports = routes;
