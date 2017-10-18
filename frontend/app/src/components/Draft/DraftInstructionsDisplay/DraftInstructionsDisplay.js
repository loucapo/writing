import React from 'react';
import PropTypes from 'prop-types';

import styles from './draftInstructionsDisplay.css';

const DraftInstructionsDisplay = ({ instructions }) => {
  if (!instructions) {
    return null;
  }
  return (
    <div className={styles.draftInstContainer}>
      <div data-id="draft-instructions" className={styles.addDraftHeading}>
        <span>Draft Instructions</span>
      </div>
      <div className={styles.instructions}>
        {instructions}
      </div>
    </div>
  );
};

DraftInstructionsDisplay.propTypes = {
  instructions: PropTypes.string
};

export default DraftInstructionsDisplay;
