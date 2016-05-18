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

const initialState = {
    auth: {
        userName: 'Raif Harik'
    },
    headerMenuCourses: {
        dropdownActive: false,
        items: [
            {
                id: 1,
                name: 'General Chemistry Laboratory - 6660',
                isActive: true
            },
            {
                id: 2,
                name: 'General Chemistry Laboratory - 1331',
                isActive: true
            }
        ]
    },
    headerMenuHelp: {
        dropdownActive: false,
        items: [
            {id: 1, name: 'User Guide'},
            {id: 2, name: 'Email Technical Support'},
            {id: 3, name: 'Chat with an Agent'},
            {id: 4, name: 'Show Book Information'}
        ]
    },
    currentCourse:1,
    
    courses:{
        1:{
            lastUpdated: '',
            id: 1,
            courseTitle: 'General Chemistry Laboratory - 1331',
            active: true,
            chapters: [1]
        },
        2:{
            lastUpdated: '',
            id: 2,
            courseTitle: 'General Chemistry Laboratory - 666',
            active: true,
            chapters: [2]
        }
    },
    chapters: {
        1: {
            isExpanded: false,
            id: 1,
            title: "Experiment 1 - Density",
            summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
            caption: 'Chapter 1 Content',
            tableSummary: 'A list of content and assignments for Chapter 1',
            assignments: [1]
        },

        2: {
            isExpanded: false,
            id: 2,
            title: "Experiment 2 - Density",
            summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
            caption: 'Chapter 2 Content',
            tableSummary: 'A list of content and assignments for Chapter 2',
            assignments: [2]
        }
    },
    assignments: {
        1: {
            id: 1,
            link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
            name: 'Chemical Reactions Pre-Lab Assignment',
            badge: 'TO DO',
            openDate: 1460987807,
            closeDate: 1461600000,
            pointsEarned: 3,
            pointsTotal: 300,
            type: 'Assesment'
        },
        2: {
            id: 2,
            link: 'https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7778"',
            name: 'Chemical Reactions Pre-Lab Assignment',
            badge: 'TO DO',
            openDate: 1460987807,
            closeDate: 1461600000,
            pointsEarned: 3,
            pointsTotal: 300,
            type: 'Assesment'
        }
    }
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
<Root store={store} history={history} />,
    document.getElementById('root')
);