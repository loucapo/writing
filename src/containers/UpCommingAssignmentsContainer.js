/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Assignments from './../components/Assignments'
// import ramda from 'ramda'
import moment from 'moment'

// function mapStateToProps(state) {
//     const currentCourse = state.courses[state.currentCourse]
//     var filter = a => moment.unix(a.closeDate) < moment() && a.badge==='TO DO' ? a : null;
//     var reducer = (acc, chapter)=>
//         acc.concat(chapter.assignments.filter(filter).map(a=>
//             Object.assign({}, a, {
//                 isUpcoming:"UPCOMING",
//                 tableSummary: 'A list of upcoming course content and assigments',
//                 tableCaption :'Upcoming Assignments'})));
//
//     var assignments =  ramda.reduce(reducer, [],  currentCourse.chapters) ;
//     return {
//         assignments
//     };
// }

// export default connect(mapStateToProps)(Assignments);

import container from './containerFactory'

var transform = ({courses, currentCourse, chapters, assignments}, props) => {
    var course = courses[currentCourse];
    var filter = a => moment.unix(a.closeDate) < moment() && a.badge==='TO DO' ? a : null;

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
}   ;

export default container(['courses', 'currentCourse', 'chapters', 'assignments'], transform)(Assignments);
