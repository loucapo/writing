/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'

export default ({}) => (
    <tr className="done">
        <th class="ctd-title">
            <h4 role="presentation"><a target="_blank" href="https://hm-staging.mnv-tech.com/mod/lti/view.php?id=7806">Pre-Lab Assignment</a></h4>
            Assessment
        </th>
        <td className="ctd-complete">
            <div className="complete" role="img" aria-label="Complete">
                <image src={require('./../sass/image/icon_down_arrow.svg')} />
            </div>
        </td>
        <td className="ctd-status"><div class="badge done">DONE</div></td>
        <td className="ctd-date">APR 17, 2016 at 7:30PM</td>
        <td className="ctd-points">21 / 25</td>
    </tr>
)