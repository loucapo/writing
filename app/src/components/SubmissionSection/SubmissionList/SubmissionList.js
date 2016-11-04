import React, {PropTypes} from 'react';
import SubmissionItem from './SubmissionItem/SubmissionItem';

import submissionList from './submissionList.css';

let SubmissionList = ({submissions}) => {
  return (
    <div className={ submissionList.subList }>
      <table className={ submissionList.table }>
        <thead>
          <tr className={ submissionList.row }>
            <th colSpan="4">header</th>
          </tr>
        </thead>
          <SubmissionItem />
      </table>
    </div>
  );
};

export default SubmissionList;
