/**
 * Created by rharik on 5/11/16.
 */

import { connect } from 'react-redux'
import Assignments from './../components/Assignments'
import ramda from 'ramda'

function mapStateToProps(state) {
    var filter = a => a.date < new Date.now() && a.status==='TO DO' ? a : null;
    var reducer = (course, acc)=> course.assignments.map(a=> { if(filter(a)) {acc.push(a)}} );
    var assignments =  ramda.reduce(reducer, [],  state.course);
    return {
        assignments
    }
}

export default connect(mapStateToProps)(Assignments);

