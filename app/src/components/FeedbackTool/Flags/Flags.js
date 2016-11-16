import React, {PropTypes} from 'react';

import flags from './flags.css';

const Flags = ({flagElements}) => {
  let content = flagElements.map((flagItem, index) => {
    return (
      <div key={index} className={flags.flagContainer}>
        <div key={index} className={flags.triangle_border}>
          <div className={flags.title}>{flagItem.title}</div>
          {
            flagItem.contentParagraphs.map((paragraph, contentIndex) => {
              return <div key={contentIndex} className={flags.paragraph}>{paragraph}</div>;
            })
          }
          <div className={flags.resources}>Resources</div>
          <ul className={flags.list_container}>
          {
            flagItem.resources.map((resource, resourceIndex) => {
              return (
                <li key={resourceIndex} className={flags.list_item}>
                  <div className={flags.image} />
                  <a href={resource.url} className={flags.anchor}>
                    {resource.title}
                  </a>
                </li>
              );
            })
          }
          </ul>
        </div>
      </div>
    );
  });
  return <div>{content}</div>;
};

Flags.propTypes = {
  flagElements: PropTypes.array
};

export default Flags;
