import React, { PropTypes } from 'react';
import moment from 'moment';
import AssignmentComplete from './AssignmentComplete';

const Assignments = ({ assignment }) => (
    <tr className="done">
        <th className="ctd-title">
            <h4 role="presentation"><a target="_blank" href={assignment.link}>{assignment.name}</a></h4>
            {assignment.type}
        </th>
        <AssignmentComplete {...assignment} />
        <td>
            <div className={'badge ' + assignment.badge}> {assignment.badge} </div>
        </td>
        <td className="ctd-date">{moment.unix(assignment.closeDate).format('MMMM Do YYYY, h:mm a')}</td>
        {!assignment.isUpcoming
            ? <td className="ctd-points">{assignment.pointsEarned}/{assignment.pointsTotal}</td>
            : <td className="ctd-points">{assignment.pointsTotal}</td>}
    </tr>
);

Assignments.propTypes = {
    assignment: PropTypes.object
};

export default Assignments;

