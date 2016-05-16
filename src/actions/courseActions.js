/**
 * Created by rharik on 5/13/16.
 */

const onCourseMenuHover = () => {
    return {
        type: 'COURSE_MENU_HOVER'
    }
};

const onHelpMenuHover = () => {
    return {
        type: 'HELP_MENU_HOVER'
    }
};

export default {
    onCourseMenuHover,
    onHelpMenuHover
}


