import React from 'react';
import SubmissionItem from './SubmissionItem/SubmissionItem';
import ActionButton from '../../ActionButton/ActionButton';
import submissionList from './submissionList.css';

let SubmissionList = () => {
  return (
    <div className={ submissionList.subList }>
      <div className={ submissionList.filter }>
        <div>Showing: <span>Final Draft - Due: Sep 24, 2016</span></div>
        <ActionButton content="Send All Completed Reviews" />
      </div>
      <table className={ submissionList.table }>
        <thead>
          <tr className={ submissionList.row }>
            <th>Name</th>
            <th>Completion Date</th>
            <th>Review Status</th>
            <th>Send Status</th>
          </tr>
        </thead>
        <SubmissionItem />
      </table>
    </div>
  );
};

export default SubmissionList;
