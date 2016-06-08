/**
 * Created by rharik on 5/11/16.
 */

import Assignments from './../components/Assignments'
import moment from 'moment'

import container from './containerFactory'

const transform = ({courses, currentCourse, chapters, assignments}, props) => {
    var course = courses[currentCourse];
    var filter = a => moment.unix(a.closeDate) >= moment() && a.badge==='TO DO' ? a : null;

    var allAssIds = course.chapters
        .map(chapterId => chapters[chapterId])
        .map(chap => chap.assignments)
        .reduce((a,b) => a.concat(b),[]);

    var upCommingAssignments = allAssIds
        .map(id=>assignments[id])
        .filter(filter)
        .map(ass=>{ return {
            ...ass,
                isUpcoming:"UPCOMING",
                tableSummary: 'A list of upcoming course content and assigments',
                tableCaption :'Upcoming Assignments'
            }
        });
    return {assignments: upCommingAssignments};
};

const UpComingAssignmentsContainer = container(['courses', 'currentCourse', 'chapters', 'assignments'], transform)(Assignments);

export {transform, UpComingAssignmentsContainer};
