import React, { PropTypes } from 'react';
import Draft from './Draft/Draft';
import MLCard from '../../MLCard/MLCard';
import MLButton from '../../MLButton/MLButton';

import styles from './draftList.css';

const DraftList = ({drafts, role}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.addDraft}>
        <MLButton dataId="add-draft" title="+ Add Another Draft" />
        <div className={styles.required}>
          *Grade type field is required
        </div>
      </div>
      {
        (drafts.length > 0) ?
          drafts.map((draft, idx) => {
            // substitute 'Final draft' for 'Draft #' on last element in array
            let cardTitle = (idx === (drafts.length - 1)) ? 'Final Draft' : 'Draft ' + (idx + 1);
            return (
              <MLCard type="draft" role={role} title={cardTitle} hideEdit={true} hideDelete={true}>
                <Draft draft={draft} key={idx} role={role} />
              </MLCard>
            );
          })
        :
          <MLCard role={role} type="draft" title="Final Draft" hideEdit={true} hideDelete={true}>
            <Draft role={role} />
          </MLCard>
      }
    </div>
  );
};

DraftList.propTypes = {
  drafts: PropTypes.array,
  role: PropTypes.string
};

export default DraftList;
