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
            let draftName = (idx === (drafts.length - 1)) ? 'Final Draft' : 'Draft ' + (idx + 1);
            return (
              <DraftItem
                draftItem={draftItem}
                draftName={draftName}
                gradingPolicy={draftItem.details.gradingPolicy}
                key={idx}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

DraftList.propTypes = {
  drafts: PropTypes.array
};

export default DraftList;
