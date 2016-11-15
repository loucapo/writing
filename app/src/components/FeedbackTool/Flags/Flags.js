import React, {PropTypes} from 'react';

import flags from './flags.css';

const Flags = ({flagElements}) => {
  let content = flagElements.map(function(flagItem, index) {
    return (
      <div key={index} className={flags.flagContainer}>
        <div key={index} className={flags.triangle_border}>
          <div className={flags.title}>{flagItem.title}</div>
          {
            flagItem.contentParagraphs.map(function(paragraph, index) {
              return <div key={index} className={flags.paragraph}>{paragraph}</div>
            })
          }
          <div className={flags.resources}>Resources</div>
          {
            flagItem.resources.map(function(resource, index) {
              return (
                <div key={index}>
                  <div className={flags.resource_icon}><a href={resource.url}>{resource.title}</a></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  })
  return <div>{content}</div>;
};

Flags.propTypes = {
  flagElements: PropTypes.array
};

export default Flags;
