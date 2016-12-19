import React, { PropTypes } from 'react';
import FlagPublisherContent from '../FlagPublisherContent/FlagPublisherContent';
import flagDetailsStyles from './FlagDetails.css';

const FlagDetails = ({item}) => (
  <div className={flagDetailsStyles.flagDetailContainer}>
    <h4>{item.instructorContent && item.instructorContent.sentimentLevel}</h4>
    {item.instructorContent && item.instructorContent.comment}
    <FlagPublisherContent item={item} />
  </div>
);

FlagDetails.propTypes = {
  item: PropTypes.object
};

export default FlagDetails;

