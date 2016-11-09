import React, {PropTypes} from 'react';

import quickFeedbackTool from './quickFeedbackTool.css';

const SideMenu = ({show}) => {
  return (
    <div className={quickFeedbackTool.quickFeedback}>
      <ul>
        <li onClick={() => spanClicked(1)}>Comma Splice</li>
        <li onClick={() => spanClicked(2)}>Fragment</li>
        <li onClick={() => spanClicked(3)}>Usage</li>
        <li onClick={() => spanClicked(4)}>Pronoun Agreement</li>
        <li onClick={() => spanClicked(5)}>Subject Ver Agreement</li>
        <li onClick={() => spanClicked(6)}>Wrong Word</li>
        <li onClick={() => spanClicked(7)}>Needs Analysis</li>
        <li onClick={() => spanClicked(8)}>Comma Error</li>
      </ul>
    </div>
  );
};

const spanClicked = (val) => {
  console.log(val);
};

export default SideMenu;
