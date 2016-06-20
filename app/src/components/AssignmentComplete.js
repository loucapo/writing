import React, { PropTypes } from 'react';

const AssignmentComplete = ({ pointsEarned, isUpcoming }) => {
    const image = (pointsEarned > 0)
        ? <i className="icon-icon_down_arrow-0" />
        : <i className="icon-icon_incomplete" />;

    if (isUpcoming) {
        return (<td className="ctd-status" >
        </td>);
    }
    return (<td className="ctd-status" >
        <div className="complete" role="img" aria-label="Complete" >
            {image}
        </div>
    </td>);
};

AssignmentComplete.propTypes = {
    pointsEarned: PropTypes.number,
    isUpcoming: PropTypes.string
};

export default AssignmentComplete;
