import React from 'react';
import PropTypes from 'prop-types';
import { MLDropdown } from '../../MLComponents';

import styles from './submissionStatusFilter.css';

let SubmissionStatusFilter = ({ draftOptions, selectDraftSubmissions, draftId }) => {
  const selectOnChange = item => {
    selectDraftSubmissions(item.id);
  };

  return (
    <div className={styles.wrapper} data-id="submission-status-filter">
      <div className={styles.showing}>Showing:</div>
      <MLDropdown
        options={draftOptions}
        onChange={selectOnChange}
        selectedId={draftId}
        contentDataId="rubric-selection-content"
        openDataId="rubric-selection-open"
      />
    </div>
  );
};

SubmissionStatusFilter.propTypes = {
  draftOptions: PropTypes.array,
  selectDraftSubmissions: PropTypes.func,
  draftId: PropTypes.string
};

export default SubmissionStatusFilter;
