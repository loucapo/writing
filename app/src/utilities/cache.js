// import moment from 'moment';

const cache = function cache(store, entityType, id) {
    return !!store[entityType][id];
};

export default cache;
