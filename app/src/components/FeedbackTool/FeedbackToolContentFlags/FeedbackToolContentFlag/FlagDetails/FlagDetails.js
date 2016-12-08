import React, { PropTypes } from 'react';
import FlagPublisherContent from '../FlagPublisherContent/FlagPublisherContent';

const FlagDetails = ({item}) => (
  <div>
    {item.instructorContent.comment}
    <FlagPublisherContent publisherContent={item.publisherContent} />
  </div>
);

FlagDetails.propTypes = {
  item: PropTypes.object
};

export default FlagDetails;

