/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Assignments from './../components/Assignments'
import ramda from 'ramda'
import moment from 'moment'

function mapStateToProps(state) {
    const currentCourse = state.courses.filter(x=>x.id === state.currentCourse)[0] || state.courses[0];
    var filter = a => moment.unix(a.closeDate) < moment() && a.badge==='TO DO' ? a : null;
    var reducer = (acc, chapter)=>
        acc.concat(chapter.assignments.filter(filter).map(a=>
            Object.assign({}, a, {
                isUpcoming:"UPCOMING",
                tableSummary: 'A list of upcoming course content and assigments',
                tableCaption :'Upcoming Assignments'})));

    var assignments =  ramda.reduce(reducer, [],  currentCourse.chapters) ;
    return {
        assignments
    };
}

export default connect(mapStateToProps)(Assignments);

