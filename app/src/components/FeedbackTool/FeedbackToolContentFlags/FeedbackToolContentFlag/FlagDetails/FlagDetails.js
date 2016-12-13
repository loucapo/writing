import React, { PropTypes } from 'react';
import FlagPublisherContent from '../FlagPublisherContent/FlagPublisherContent';

const FlagDetails = ({item}) => (
  <div>
    <strong>{item.instructorContent && item.instructorContent.sentimentLevel}</strong>
    <br />
    {item.instructorContent && item.instructorContent.comment}
    <FlagPublisherContent item={item} />
  </div>
);

FlagDetails.propTypes = {
  item: PropTypes.object
};

export default FlagDetails;

