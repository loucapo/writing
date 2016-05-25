/**
 * Created by rharik on 5/13/16.
 */

import  moment from 'moment';

var cache = function(store, entityType, id) {
    var target = store[entityType][id];
    if ( target ) {
        // && (!target.lastUpdated || moment().isBefore(moment(target.lastUpdated).add(2, 'm')))) {
        return true;
    }
};

export default cache;