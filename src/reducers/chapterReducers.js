/**
 * Created by rharik on 5/13/16.
 */
import {EXPAND_CHAPTER} from './../constants';

const expandChapter = (state = {}, action = null) => {

    if(action.type == EXPAND_CHAPTER) {
        var item = state[action.id];
        return {...state, [action.id]: {...item, isExpanded: !item.isExpanded}}
    }
    return state;
};

export  {
    expandChapter
}