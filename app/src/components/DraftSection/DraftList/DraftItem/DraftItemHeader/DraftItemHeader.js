import React, {PropTypes} from 'react';
import ActionButton from '../../../../ActionButton/ActionButton';
import coreCss from '../../../../../styles/core.css';
import draftItemHeader from './draftItemHeader.css';
import MLIcon from 'ml-react-cdl-icons';

const DraftItemHeader = ({draftName}) => (
  <div data-id="draft-name" className={ draftItemHeader.header }>
    <h1>
      <span>
        <MLIcon
          iconTitle="minus"
          iconFill="#000000" // black
          iconType="minus"
          iconWidth="12"
          iconHeight="12"
          viewBox="0 0 24 24"
        />
        <span className={ coreCss.headingText }>
          {draftName}
        </span>
      </span>
      <ActionButton dataId="draft-edit-button" content="Edit" />
    </h1>
  </div>);

DraftItemHeader.propTypes = {
  draftName: PropTypes.string,
  dueDate: PropTypes.string,
  type: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItemHeader;
