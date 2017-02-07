import React from 'react';
import SubmissionItem from './SubmissionItem/SubmissionItem';
import ActionButton from '../../ActionButton/ActionButton';
import submissionList from './submissionList.css';
import MLIcon from 'ml-react-cdl-icons';

let SubmissionList = () => {
  return (
    <div className={ submissionList.subList }>
      <div className={ submissionList.filter }>
        <div>Showing: <span data-id="submission-filter" className={submissionList.dropDown}>Final Draft - Due: Sep 24, 2016</span>
          <MLIcon
            className={submissionList.dropdown_caret}
            title="caret down"
            type="caret_down"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          />
        </div>
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
