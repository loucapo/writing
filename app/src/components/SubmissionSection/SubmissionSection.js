import React, { PropTypes } from 'react';
import SubmissionList from './SubmissionList/SubmissionList';
import submissionSection from './submissionSection.css';

const SubmissionSection = ({submissions}) => {
  return (
    <div className={ submissionSection.wrapper }>
      <SubmissionList submissions={submissions} />
    </div>
  );
};

SubmissionSection.propTypes = {
  submissions: PropTypes.array
};

export default SubmissionSection;
