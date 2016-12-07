import React, {PropTypes} from 'react';
import ActionButton from '../../../../ActionButton/ActionButton';
import draftItemHeader from './draftItemHeader.css';

// XXX may need id's for testability/accessibility

const DraftItemHeader = ({draftName}) => (
  <div className={ draftItemHeader.header }>
    <h1>
      {draftName}
      <ActionButton content="Edit" />
    </h1>
  </div>);

DraftItemHeader.propTypes = {
  draftName: PropTypes.string,
  dueDate: PropTypes.string,
  type: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItemHeader;
