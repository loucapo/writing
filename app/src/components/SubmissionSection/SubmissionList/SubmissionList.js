import React, {PropTypes} from 'react';
import SubmissionItem from './SubmissionItem/SubmissionItem';

import submissionList from './submissionList.css';

let SubmissionList = ({submissions}) => {
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
              <span className={ submissionList.due_date }>Due Mon Sep 20, 2016</span>
            </th>
            <th>
              <span className={ submissionList.button }>
                <a href="#">Send All Completed Reviews</a>
              </span>
            </th>
          </tr>
        </thead>
          <SubmissionItem />
      </table>
    </div>
  );
};

export default SubmissionList;
