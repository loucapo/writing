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
              Instructor Review: Due Mon Sep 20, 2016
            </th>
            <th>
              button
            </th>
          </tr>
        </thead>
          <SubmissionItem />
      </table>
    </div>
  );
};

export default SubmissionList;
