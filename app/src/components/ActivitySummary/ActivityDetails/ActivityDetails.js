import React, {PropTypes} from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import coreCss from '../../../styles/core.css';
import activityDetailsCss from './activityDetails.css';
import MLIcon from 'ml-react-cdl-icons';

// XXX need id's for testability/accessibility

//TODO: need to add data-ids and pull from redux
const ActivityDetails = ({activity}) => (
  <div className={ coreCss.panel }>
    <h1 data-id="activity-title">
      <span>
        <MLIcon
          iconTitle="minus"
          iconFill="#000000"
          iconType="minus"
          iconWidth="12"
          iconHeight="12"
          viewBox="0 0 24 24"
        />
        <span className={activityDetailsCss.name}>Assignment Prompt</span>
      </span>
      <ActionButton dataId="activity-edit-button" content="Edit" />
    </h1>
    <div className={ coreCss.panelBottom }>

      <div data-id="activity-purpose">
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
      </div>

      <div data-id="activity-requirements">
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
      </div>

      <div data-id="activity-prompt">
        <h4>Prompt:</h4>
        {activity.prompt}
      </div>
    </div>
  </div>
);

ActivityDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default ActivityDetails;
