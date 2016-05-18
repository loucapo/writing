/**
 * Created by rharik on 5/13/16.
 */

import {EXPAND_CHAPTER} from './../constants';

const expandChapter = (id) => {
    return {
        type: EXPAND_CHAPTER,
        id
    }
};

export default {
    expandChapter
}


