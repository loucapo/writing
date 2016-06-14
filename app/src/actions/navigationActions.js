/**
 * Created by rharik on 5/18/16.
 */

import { CALL_API } from 'redux-api-middleware';
import { course } from './../models/course';
import { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAILURE } from './../constants';


// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
function getCourse(id) {
    return {
        id,
        type: 'apicall',
        [CALL_API]: {
            types: [COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAILURE],
            endpoint: '/course',
            schema: course,
            method: 'GET',
            entityType: 'courses'
        }
    };
}

export {
    getCourse
};

