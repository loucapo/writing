import React, {PropTypes} from 'react';

import draftItemHeader from './draftItemHeader.css';

// XXX may need id's for testability/accessibility

const DraftItemHeader = ({draftName, type, dueDate}) => (
  <header className={ draftItemHeader.header }>
    <div className={ draftItemHeader.draftInfo}>
      <div className={draftItemHeader.draftOrder}>
        {draftName}
      </div>
      <div className={draftItemHeader.reviewLabel}>
        {type}
      </div>
      <div>
        <a className={ draftItemHeader.editAction } href="#">Edit {draftName}</a>
      </div>
    </div>

    <div><span className={draftItemHeader.strong}>Due:</span>
      &nbsp;
      {dueDate}
    </div>
  </header>);

DraftItemHeader.propTypes = {
  draft: PropTypes.object,
  draftName: PropTypes.string,
  dueDate: PropTypes.string,
  type: PropTypes.string
};

export default DraftItemHeader;
