// import moment from 'moment';
/*eslint-disable*/
const cache = {
    needsCacheRefresh: (store, rootEntity, action) => {
        // here check the entity for the exp time, then if necessary fire action and return true, else return false
        return false;
    }
};

export { cache };
