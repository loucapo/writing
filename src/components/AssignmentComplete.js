/**
 * Created by rharik on 5/11/16.
 */
import React, {PropTypes}from 'react';

const AssignmentComplete = ({pointsEarned, isUpcoming}) => {
    var image = (pointsEarned > 0)
        ? <image src={require('./../sass/image/icon_down_arrow.colors-cc0000.svg')}/>
        : <image src={require('./../sass/image/icon_incomplete.svg')}/>;

    if (isUpcoming) {
        return (<td className="ctd-status">
        </td>);
    } else {
        return (<td className="ctd-status">
            <div className="complete" role="img" aria-label="Complete">
                {image}
            </div>
        </td>);
    }
};

AssignmentComplete.propTypes = {
    pointsEarned: PropTypes.int,
    isUpcoming: PropTypes.bool
};

export default AssignmentComplete;