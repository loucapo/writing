import React, { PropTypes } from 'react';
import ResourceLinks from './../../../ResourceLinks';

const FlagPublisherContent = ({item}) => {
  if(!item.publisherContent && !item.resources) {
    return null;
  }

  return (
    <div>
      {item.publisherContent && item.publisherContent.content}
      {item.resources && <ResourceLinks resourceLinks={item.resources} /> }
    </div>
  );
};

FlagPublisherContent.propTypes = {
  item: PropTypes.object
};

export default FlagPublisherContent;
