import {SELECT_COURSE_FROM_MENU} from './../constants';
import { browserHistory } from 'react-router';

export const onSelectCourseFromMenu = (value) => {
    value && browserHistory.push('/course/' + value);
    return {
        type: SELECT_COURSE_FROM_MENU
    }
};