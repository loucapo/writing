/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'
import moment from 'moment'

export default ({assignment}) => (
    <tr className="done">
        <th class="ctd-title">
            <h4 role="presentation"><a target="_blank" href={assignment.link}>{assignment.name}</a></h4>
            {assignment.type}
        </th>
        <td className="ctd-status">{
            (assignment.pointsEarned > 0 && !assignment.isUpcomming)
            ?<div className="complete" role="img" aria-label="Complete">
                <image src={require('./../sass/image/icon_down_arrow.svg')}/>
            </div>
            : null
        }</td>
        <td> <div className={"badge "+assignment.badge}> {assignment.badge} </div> </td>
        <td className="ctd-date">{moment.unix(assignment.closeDate).format('MMMM Do YYYY, h:mm a')}</td>
        {!assignment.isUpcoming
            ? <td className="ctd-points">{assignment.pointsEarned}/{assignment.pointsTotal}</td>
            : <td className="ctd-points">{assignment.pointsTotal}</td>}
    </tr>
)