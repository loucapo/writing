/**
 * Created by rharik on 5/13/16.
 */

// import  moment from 'moment';
// import Promise from 'bluebird';

const cache = function cache(store, entityType, id) {
    const target = store[entityType][id];
    if (target) {
        // && (!target.lastUpdated || moment().isBefore(moment(target.lastUpdated).add(2, 'm')))) {
        return true;
    }
    return false;
};

export default cache;
