import {MENU_TOGGLE} from './../constants';

export const onMenuToggle = (menuName, event) => {
    return {
        type: MENU_TOGGLE,
        menuName: menuName,
        event: event
    }
};