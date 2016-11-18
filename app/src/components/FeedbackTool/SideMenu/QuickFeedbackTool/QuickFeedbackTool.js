import React from 'react';

import quickFeedbackTool from './quickFeedbackTool.css';

const spanClicked = (val) => {
  console.log(val); // just for verification that the links are clicking
};

const SideMenu = () => {
  return (
    <div className={quickFeedbackTool.quickFeedback}>
      <ul className={quickFeedbackTool.list_container}>
        <li data-id="span1" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(1)}>Comma Splice</li>
        <li data-id="span2" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(2)}>Fragment</li>
        <li data-id="span3" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(3)}>Usage</li>
        <li data-id="span4" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(4)}>Pronoun Agreement</li>
        <li data-id="span5" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(5)}>Subject Ver Agreement</li>
        <li data-id="span6" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(6)}>Appropriate Language</li>
        <li data-id="span7" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(7)}>Needs Analysis</li>
        <li data-id="span8" className={quickFeedbackTool.list_Item} onClick={() => spanClicked(8)}>Comma Error</li>
      </ul>
    </div>
  );
};

export default SideMenu;
