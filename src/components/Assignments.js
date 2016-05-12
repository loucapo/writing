/**
 * Created by rharik on 5/11/16.
 */

import React from 'react'
import Assignment from './Assignment'

const Assignments = ({assignments}) => (
    <div id="assignments">
        <h2>Assignments</h2>
        <table summary="A list of upcoming course content and assignments">
            <caption>Upcoming Assignments</caption>
            <thead>
            <tr><th className="ath-upcoming">UPCOMING</th>
                <th className="ath-status">STATUS</th>
                <th className="ath-date">DATE</th>
                <th className="ath-points">POINTS</th>
            </tr></thead>
            <tbody>
            {assignments.map(assignment => <Assignment key={assignment.id} assignment={assignment}/> )}

            </tbody>
        </table>
    </div>
);

export default Assignments;