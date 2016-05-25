/**
 * Created by rharik on 5/13/16.
 */

import {EXPAND_CHAPTER} from './../constants';

const toggleChapter = (id) => {
    return {
        type: EXPAND_CHAPTER,
        id
    }
};

export  {
    toggleChapter
}


