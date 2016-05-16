/**
 * Created by rharik on 5/13/16.
 */

import  moment from 'moment';

var cache = function(store) {
    var course = (expression) => {
        var targetCourse = store.courses.find(expression);
        if(targetCourse && (!targetCourse.lastUpdated || moment().isBefore(moment(targetCourse.lastUpdated).add(2,'m')))) {
            return Promise.resolve({
                response: targetCourse,
                type: successType
            });
        }
    }
};