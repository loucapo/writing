import React, {PropTypes} from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import coreCss from '../../../styles/core.css';

// XXX need id's for testability/accessibility

//TODO: need to add data-ids and pull from redux
const ActivityDetails = ({activity}) => (
  <div className={ coreCss.panel }>
    <h1 data-id="activity-title">
      <div>Assignment Prompt</div>
      <ActionButton content="Edit" />
    </h1>
    <div className={ coreCss.panelBottom }>
      <h4>Purpose of Assignment:</h4>
      <ol>
        <li>
          To demonstrate your ability to create and support a strong thesis statement
        </li>
        <li>
          To demonstrate critical thinking skills by engaging with another point of view
        </li>
        <li>
          To create paragraphs that are coherent and unified around one main point and that use effective transistions
        </li>
        <li>
          To integrate at least one quote effectively and cite it correctly
        </li>
        <li>
          To understand the process of revision, through a substantial revision
        </li>
      </ol>

      <h4>Requirements:</h4>
      <ol>
        <li>
          Minimum of three pages
        </li>
        <li>
          Double-spaced with 1" margins, typed in Times New Roman, size 12 font
        </li>
        <li>
          Formatted correctly (see the St. Martin's Handbook for a sample MLA formatted essay)
        </li>
      </ol>

      <h4>Prompt:</h4>
      {activity.prompt}
    </div>
  </div>
);

ActivityDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default ActivityDetails;
