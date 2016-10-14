import React, {PropTypes} from 'react';

import draftItemHeader from './draftItemHeader.css';

// XXX may need id's for testability/accessibility

const DraftItemHeader = ({draftName, type, dueDate}) => (
  <header className={ draftItemHeader.header }>
    <div className={ draftItemHeader.draftInfo}>
      <div data-id="draft-item-draft-name" className={draftItemHeader.draftOrder}>
        {draftName}
      </div>
      <div data-id="draft-item-type" className={draftItemHeader.reviewLabel}>
        {type}
      </div>
      <div>
        <a data-id="draft-item-edit" className={ draftItemHeader.editAction } href="#">Edit {draftName}</a>
      </div>
    </div>

    <div><span data-id="draft-item-due-date" className={draftItemHeader.strong}>Due:</span>
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
