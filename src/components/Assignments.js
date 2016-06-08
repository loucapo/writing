/**
 * Created by rharik on 5/11/16.
 */

import React, {PropTypes} from 'react';
import Assignment from './Assignment';

const Assignments = ({assignments}) => {
    return (
        <div id="assignments">
            <h2>Assignments</h2>
            <table summary={(assignments && assignments[0].tableSummary) ? assignments[0].tableSummary : "A list of upcoming course content and assignments"} >
                <caption>{(assignments && assignments[0].tableCaption) ? assignments[0].tableCaption : "Chapter 1 Assignments"}</caption>
                <thead>
                <tr>
                    <th className="ath-upcoming">{(assignments && assignments[0].isUpcoming)? assignments[0].isUpcoming: 'CONTENT'}</th>
                    <th className="cth-done"></th>
                    <th className="ath-status">STATUS</th>
                    <th className="ath-date">DATE</th>
                    <th className="ath-points">POINTS</th>
                </tr>
                </thead>
                <tbody>
                    {assignments.map(assignment => <Assignment key={assignment.id} assignment={assignment}/>)}
                </tbody>
            </table>
        </div>
    );
};


Assignments.propTypes = {
    assignments: PropTypes.array
};

export default Assignments;