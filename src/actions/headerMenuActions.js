/**
 * Created by rharik on 5/12/16.
 */

import {COURSE_MENU_HOVER, HELP_MENU_HOVER} from './../constants';


const onCourseMenuHover = () => {
    return {
        type: COURSE_MENU_HOVER
    }
};

const onHelpMenuHover = () => {
    return {
        type: HELP_MENU_HOVER
    }
};

export default {
    onCourseMenuHover,
    onHelpMenuHover
}



