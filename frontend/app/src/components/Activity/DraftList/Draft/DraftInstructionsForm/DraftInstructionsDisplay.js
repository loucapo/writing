import React from 'react';
import PropTypes from 'prop-types';

import styles from './draftInstructionsForm.css';

const DraftInstructionsDisplay = ({ instructions }) => {
  if (!instructions) {
    return null;
  }
  return (
    <div>
      <div>
        <div className={styles.addDraftHeading}>
          <span>Draft Instructions</span>
        </div>
        <div>
          {instructions}
        </div>
      </div>
    </div>
  );
};

DraftInstructionsDisplay.propTypes = {
  instructions: PropTypes.string
};

export default DraftInstructionsDisplay;
