import React, {PropTypes} from 'react';
import DraftItem from './DraftItem/DraftItem';

import draftList from './draftList.css';

let DraftList = ({drafts}) => {
  return (
    <div className={ draftList.draftGroup }>
      <ul className={ draftList.items }>
        {drafts.map((draftItem, idx) =>
          (<DraftItem draftItem={draftItem} draftName={'Draft ' + (idx + 1)} key={idx} />)
        )}
      </ul>
      <div className={ draftList.draftAction }>
        <a data-id="add-draft" href="#">
          <span className={draftList.add_draft_icon}>&#8853;</span> Add Another Draft
        </a>
      </div>
    </div>
  );
};

DraftList.propTypes = {
  drafts: PropTypes.array
};

export default DraftList;
