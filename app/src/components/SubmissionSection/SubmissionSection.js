import React, { PropTypes } from 'react';
import ActivityMenu from '../ActivityMenu/ActivityMenu';
import SubmissionList from './SubmissionList/SubmissionList';

import submissionSection from './submissionSection.css';

const SubmissionSection = ({submissions}) => {
  return (
    <div className={ submissionSection.wrapper }>
      <ActivityMenu section="submissions" />
      <SubmissionList submissions={submissions} />
      asdf
    </div>
  );
};

SubmissionSection.propTypes = {
  submissions: PropTypes.array
};

export default SubmissionSection;
