import React, {PropTypes} from 'react';
import uuid from 'uuid';
import resourceLinksStyle from './resourceLinks.css';

const ResourceLinks = ({resourceLinks}) =>(
  <div>
    <div className={resourceLinksStyle.resources}>Related Resources</div>
    <ul>
      {resourceLinks.map(link => {
        return (
          <li key={uuid.v4()}>
            <div className={resourceLinksStyle.image} />
            <a href={link.url} target="_blank">{link.title}</a>
          </li>
        );
      })}
    </ul>
  </div>
  );

ResourceLinks.propTypes = {
  resourceLinks: PropTypes.array
};

export default ResourceLinks;
