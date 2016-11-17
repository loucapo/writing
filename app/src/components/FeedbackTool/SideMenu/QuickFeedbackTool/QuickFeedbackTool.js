import React from 'react';

import quickFeedbackTool from './quickFeedbackTool.css';

const spanClicked = (val) => {
  console.log(val);
};

const SideMenu = () => {
  return (
    <div className={quickFeedbackTool.quickFeedback}>
      <ul className={quickFeedbackTool.list_container}>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(1)}>Comma Splice</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(2)}>Fragment</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(3)}>Usage</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(4)}>Pronoun Agreement</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(5)}>Subject Ver Agreement</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(6)}>Appropriate Language</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(7)}>Needs Analysis</li>
        <li className={quickFeedbackTool.list_Item} onClick={() => spanClicked(8)}>Comma Error</li>
      </ul>
    </div>
  );
};

export default SideMenu;
