/**
 * Created by rharik on 5/13/16.
 */
import {EXPAND_CHAPTER} from './../constants';
import update from 'react-addons-update'

const expandChapter = (state = {}, action = null) => {

    if(action.type == EXPAND_CHAPTER) {
        var index = state.chapters.findIndex(x=>x.id == action.id);
        var item = state[index];
        return update(item, $merge({isExpanded: !item.isExpanded }))
        }
    return state;
};

export  {
    expandChapter
}