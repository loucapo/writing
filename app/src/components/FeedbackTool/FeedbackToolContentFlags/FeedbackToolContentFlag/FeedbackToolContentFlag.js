import React, { PropTypes } from 'react';
import FlagDetails from './FlagDetails/FlagDetails';
import feedbackToolContentMap from './../../feedbackToolContentMap';
import feedbackToolContentFlag from './feedbackToolContentFlag.css';

const FeedbackToolContentFlag = ({item, expanded, topFlag, onClick}) => {
  const triangleStyles = {
    top: `${item.position.top}px`,
    zIndex: topFlag ? 1001 : 1
  };

  return (
    <div className={feedbackToolContentFlag.flagContainer} onClick={() => onClick(!expanded, item.id)}>
      <div className={feedbackToolContentFlag.triangleBorder} style={triangleStyles}>
        <div className={feedbackToolContentFlag.title}>
          <strong>{feedbackToolContentMap[item.contentType].title}</strong>
          <span className={feedbackToolContentFlag.icon} />
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
