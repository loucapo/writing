import { CALL_API } from 'redux-api-middleware';
import { AVAILABLE_COURSES_REQUEST,
    AVAILABLE_COURSES_SUCCESS,
    AVAILABLE_COURSES_FAILURE,
    LAST_FETCHED } from './../constants';
import moment from 'moment';

function getAvailableCoursesByUID(url) {
    return {
        [CALL_API]: {
            endpoint: url,
            method: 'GET',
            bailout: (state) => !!(state.headerMenuCourses
                && state.headerMenuCourses[LAST_FETCHED]
                && state.headerMenuCourses.LAST_FETCHED.isAfter(moment().subtract(5, 'minutes'))),
            types: [
                AVAILABLE_COURSES_REQUEST,
                AVAILABLE_COURSES_SUCCESS,
                AVAILABLE_COURSES_FAILURE]
        }
    };
}

export {
    getAvailableCoursesByUID
};

