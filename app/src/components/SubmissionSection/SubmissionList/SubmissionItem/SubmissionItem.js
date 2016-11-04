import React, {PropTypes} from 'react';
import submissionItemCss from './submissionItem.css';

const SubmissionItem = () => (
  <tbody>
    <tr className={ submissionItemCss.row }>
      <td>
        <a href ="#">Hernandez, Maria</a>
      </td>
      <td>Completed 9/18/2016</td>
      <td>
        <a href="#">Review Complete</a>
      </td>
      <td>
        <a href="#">Send Review</a>
      </td>
    </tr>
    <tr className={ submissionItemCss.row }>
      <td>
        <a href ="#">Appleyard, Caroline</a>
      </td>
      <td>Completed 9/18/2016</td>
      <td>
        <a href="#">Review Complete</a>
      </td>
      <td>
        <a href="#">Send Review</a>
      </td>
    </tr>
    <tr className={ submissionItemCss.row }>
      <td>
        <a href ="#">asdf</a>
      </td>
      <td>Completed 9/18/2016</td>
      <td>
        <a href="#">Start Review</a>
      </td>
      <td>&nbsp;</td>
    </tr>
    <tr className={ submissionItemCss.row }>
      <td>
        <a href ="#">asdf</a>
      </td>
      <td>Completed 9/18/2016</td>
      <td>
        <a href="#">Start Review</a>
      </td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
);

export default SubmissionItem;
