import React, { PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
import FlagDetails from './FlagDetails/FlagDetails';
import feedbackToolContentMap from './../../feedbackToolContentMap';
import flagStyles from './feedbackToolContentFlag.css';

const FeedbackToolContentFlag = ({item, expanded, topFlag, onClick}) => {
  const triangleStyles = {
    top: `${item.position.top}px`,
    zIndex: topFlag ? 1001 : 1,
    border: `1px solid ${item.color}`
  };

  let borderPointerColor;
  switch(item.color) {
    case '#00758E':
      borderPointerColor = flagStyles.blueTriangleBorder;
      break;
    case '#dd5714':
      borderPointerColor = flagStyles.orangeTriangleBorder;
      break;
    case '#3b822e':
      borderPointerColor = flagStyles.greenTriangleBorder;
  }

  return (
    <div className={flagStyles.flagContainer} onClick={() => onClick(!expanded, item.id)}>
      <div className={`${flagStyles.triangleBorder} ${borderPointerColor}`} style={triangleStyles}>
        <div className={flagStyles.heading}>
          <MLIcon
            iconTitle={feedbackToolContentMap[item.contentType].title}
            iconType="comment"
            iconFill={item.color}
            iconWidth="26"
            iconHeight="26"
            viewBox="0 0 24 24"
          />
          <strong>{feedbackToolContentMap[item.contentType].title}</strong>
          <span className={flagStyles.icon} />
        </div>
        {expanded ? <FlagDetails item={item} /> : null}
      </div>
    </div>
  );
};

FeedbackToolContentFlag.propTypes = {
  item: PropTypes.object,
  expanded: PropTypes.bool,
  topFlag: PropTypes.bool,
  onClick: PropTypes.func
};

export default FeedbackToolContentFlag;
