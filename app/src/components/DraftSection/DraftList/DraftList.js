import React, {PropTypes} from 'react';
import DraftItem from './DraftItem/DraftItem';
import ActionButton from '../../ActionButton/ActionButton';
import draftList from './draftList.css';

let DraftList = ({drafts}) => {
  return (
    <div className={ draftList.draftGroup }>
      <div className={draftList.addDraft}>
        <ActionButton content="+ Add Another Draft" />
      </div>
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
    </div>
  );
};

DraftList.propTypes = {
  drafts: PropTypes.array
};

export default DraftList;
