import React, { PropTypes } from 'react';
import flagPublisherContent from './flagPublisherContent.css';
import uuid from 'uuid';

const FlagPublisherContent = ({publisherContent}) => (
  <div>
    <div className={flagPublisherContent.resources}>Related Resources</div>
    <ul>
      {
        publisherContent && publisherContent.resources.map(resource => (
          <li key={uuid.v4()}>
            <a data-id="resource-url" href={resource.url}>
              {resource.title}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

FlagPublisherContent.propTypes = {
  publisherContent: PropTypes.object
};

export default FlagPublisherContent;
