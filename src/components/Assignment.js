/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'

export default ({assignment}) => (
    <tr className="done">
        <th class="ctd-title">
            <h4 role="presentation"><a target="_blank" href="https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7806">{assignment.name}</a></h4>
            {assignment.type}
        </th>
        <td className="ctd-status">
            <div className="complete" role="img" aria-label="Complete">
                <image src={require('./../sass/image/icon_down_arrow.svg')} />
            </div>
        <div class="badge done">{assignment.status}</div></td>
        <td className="ctd-date">{assignment.date}</td>
        {assignment.isUpcoming
            ? <td className="ctd-points">{assignment.points}/{assignment.pointsAvailable}</td>
            : <td className="ctd-points">{assignment.pointsAvailable}</td>}
    </tr>
)