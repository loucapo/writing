import React, {PropTypes} from 'react';

import draftItemHeader from './draftItemHeader.css';

// XXX may need id's for testability/accessibility

const DraftItemHeader = ({draftName, type, gradingPolicy, dueDate}) => (
  <header className={ draftItemHeader.header }>
    <div className={ draftItemHeader.draft_info}>
      <div data-id="draft-item-draft-name" className={draftItemHeader.draft_order}>
        {draftName}
      </div>
      <span className={draftItemHeader.header_items_container}>
        <span className={draftItemHeader.review_box}>
          <span className={draftItemHeader.review_label}>Review Type</span>
          <a data-id="draft-item-type" className={draftItemHeader.review_type}>{type}</a>
        </span>
        <span className={draftItemHeader.review_box}>
          <span className={draftItemHeader.review_label}>Grade Type</span>
          <a data-id="draft-item-grade-type" className={draftItemHeader.review_type}>{gradingPolicy}</a>
        </span>
        <span className={draftItemHeader.review_box}>
          <span data-id="draft-item-due-date" className={draftItemHeader.strong}>Due: </span>
          {dueDate}
        </span>
      </span>
    </div>
  </header>);

DraftItemHeader.propTypes = {
  draftName: PropTypes.string,
  dueDate: PropTypes.string,
  type: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItemHeader;
