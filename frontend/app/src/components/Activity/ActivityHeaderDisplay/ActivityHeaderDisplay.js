import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from './../../MLComponents/index';
import styles from './activityHeaderDisplay.css';

const ActivityHeaderDisplay = ({drafts, activityId}) => {
  return (
    <header className={styles.studentHeader}>
      <div className={styles.rightContainer}>
        {
          drafts.map((draft, index) => {
            let cardTitle = 'Draft ' + (index + 1);
            // substitute 'Final paper' for 'Draft #' on last element in array
            if (index === (drafts.length - 1)) {
              cardTitle = 'Final Paper';
            }

            return (
              <MLButton
                key={draft.draftId}
                title={`Start ${cardTitle}`}
                dataId={`start-${cardTitle}`}
                disabled={index !== 0}
                link={`/activity/${activityId}/draft/${draft.draftId}`}
              />
            );
          })
        }
      </div>
    </header>
  );
};

ActivityHeaderDisplay.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array
};

export default ActivityHeaderDisplay;
