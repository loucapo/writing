import React, { PropTypes } from 'react';
import MLIcon from 'ml-react-cdl-icons';
import FlagDetails from './FlagDetails/FlagDetails';
import feedbackToolContentMap from './../../feedbackToolContentMap';
import flagStyles from './feedbackToolContentFlag.css';

const FeedbackToolContentFlag = ({item, expanded, topFlag, onClick}) => {

  let borderPointerColor;
  let sentiment = item.instructorContent && item.instructorContent.sentimentLevel;
  let color = item.color;

  switch(color) {
    case 'blue':
      borderPointerColor = flagStyles.blueTriangleBorder;
      color = '#00758E';
      break;
    case 'orange':
      borderPointerColor = flagStyles.orangeTriangleBorder;
      color = '#dd5714';
      break;
    case 'green':
      borderPointerColor = flagStyles.greenTriangleBorder;
      color = '#3B822E';
  }

  if(sentiment && sentiment.slice(0, 10) === 'Great job!') {
    borderPointerColor = flagStyles.greenTriangleBorder;
    color = '#3b822e';
  }

  const triangleStyles = {
    top: `${item.position.top}px`,
    zIndex: topFlag ? 1001 : 1,
    border: `1px solid ${color}`
  };

  return (
    <div className={flagStyles.flagContainer} onClick={() => onClick(!expanded, item.id)}>
      <div className={`${flagStyles.triangleBorder} ${borderPointerColor}`} style={triangleStyles}>
        <div className={flagStyles.heading}>
          <MLIcon
            iconTitle={feedbackToolContentMap[item.contentType].title}
            iconType={item.icon}
            iconFill={color}
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
