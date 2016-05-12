/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

require('./sass/master.scss');

const initialState =  {
    auth:{
        userName: 'Raif Harik'
    },
    course: {
        courseName: 'General Chemistry Laboratory - 1331',
        assignments: [
            {
                id: 1,
                name: 'Chemical Reactions Pre-Lab Assignment',
                status: 'TO DO',
                date: 'MAY 16, 2016 at 1:51PM',
                points: 3,
                pointsAvailable: 300,
                type: 'Assesment'
            }
        ],
        chapters: [
            {
                id: 1,
                title: "Experiment 1 - Density",
                content: [
                    {
                        id: 1,
                        description: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Chapter 1 Content',
                        summary: 'A list of content and assignments for Chapter 1',
                        assignments: [
                            {
                                id: 1,
                                name: 'Chemical Reactions Pre-Lab Assignment',
                                status: 'TO DO',
                                date: 'MAY 16, 2016 at 1:51PM',
                                points: 3,
                                pointsAvailable: 300,
                                type: 'Assesment'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
<Root store={store} history={history} />,
    document.getElementById('root')
);