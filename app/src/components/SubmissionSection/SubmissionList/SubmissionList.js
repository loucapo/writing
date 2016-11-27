import React from 'react';
import SubmissionItem from './SubmissionItem/SubmissionItem';

import submissionList from './submissionList.css';

let SubmissionList = () => {
  return (
    <div className={ submissionList.subList }>
      <table className={ submissionList.table }>
        <thead>
          <tr className={ submissionList.row }>
            <th colSpan="3">
              <select>
                <option>Submissions Draft 1</option>
                <option>asdf</option>
                <option>asdf</option>
              </select>
              <span className={ submissionList.review_type }>Instructor Review</span>
            </th>
            <th>
              &nbsp;
            </th>
          </tr>
        </thead>
        <SubmissionItem />
      </table>
    </div>
  );
};

export default SubmissionList;
