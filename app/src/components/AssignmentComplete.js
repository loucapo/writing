/**
 * Created by rharik on 5/11/16.
 */
import React, { PropTypes } from 'react';

const incomplete = require('./../sass/image/icon_incomplete.svg');
const downArrow = require('./../sass/image/icon_down_arrow.colors-cc0000.svg');
const AssignmentComplete = ({ pointsEarned, isUpcoming }) => {
    const image = (pointsEarned > 0)
        ? <image src={downArrow} />
        : <image src={incomplete} />;

    if (isUpcoming) {
        return (<td className="ctd-status">
        </td>);
    }
    return (<td className="ctd-status">
        <div className="complete" role="img" aria-label="Complete">
            {image}
        </div>
    </td>);
};

AssignmentComplete.propTypes = {
    pointsEarned: PropTypes.number,
    isUpcoming: PropTypes.string
};

export default AssignmentComplete;
