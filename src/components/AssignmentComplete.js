/**
 * Created by rharik on 5/11/16.
 */
import React from 'react'

export default ({pointsEarned, isUpcomming}) => {
    var image = (pointsEarned > 0)
        ? <image src={require('./../sass/image/icon_down_arrow.svg')}/>
        : <image src={require('./../sass/image/icon_incomplete.svg')}/>;

    console.log("HEREEEEEEEEEEEE")
    console.log(isUpcomming)
    if (isUpcomming) {
        return (<td className="ctd-status">
        </td>)
    } else {
        return (<td className="ctd-status">
            <div className="complete" role="img" aria-label="Complete">
                {image}
            </div>
        </td>)
    }
}