import React, {PropTypes} from 'react';
import DraftItem from './DraftItem/DraftItem';

import draftList from './draftList.css';

let DraftList = ({drafts}) => {
  return (
    <div className={ draftList.draftGroup }>
      <ul className={ draftList.items }>
        {
          drafts.map((draftItem, idx) => {
            // substitute 'Final draft' for 'Draft #' on last element in array
            let draftName = (idx === (drafts.length - 1)) ? 'Final Draft': 'Draft ' + (idx + 1);
            return <DraftItem draftItem={draftItem} draftName={draftName} key={idx} />;
          })
        }
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
