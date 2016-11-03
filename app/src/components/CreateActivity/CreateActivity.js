import React from 'react';

import Header from './../Header/Header';
import TitleSection from './TitleSection/TitleSection';
import ActionButton from './../ActionButton/ActionButton';

import createActivity from './createActivity.css';

const CreateActivity = () => {
  let contentLeft = <div>Macmillan Writing Dashboard</div>;
  let contentRight = <div>ENG 101 Introduction to Writing</div>;
  let contentLeftFooter = <div>Cancel</div>;
  let contentRightFooter = <ActionButton content="Save and Continue" />;
  let headerCss = createActivity.header;
  let footerCss = createActivity.footer;
  return (
    <div>
      <Header
        contentLeft={contentLeft}
        contentRight={contentRight}
        css={headerCss}
      />
      <div className={createActivity.panelSize}>
        <TitleSection />
        <div>Assignment Title</div>
        <div>
          <input
            data-id="activity-title"
            type="text"
            size="80"
            placeholder="Help text"
            className={createActivity.titleTextBox}
          />
        </div>
        <div>Activity Prompt</div>
        <div>
          <textArea
            data-id="activity-prompt"
            rows="10"
            cols="80"
            placeholder="Help text"
            className={createActivity.promptTextArea}
          />
        </div>
        <div className={createActivity['number-drafts-label']}>Number of Drafts</div>
        <div>
          <input
            data-id="activity-number-drafts"
            type="text"
            size="1"
            defaultValue="1"
            className={createActivity['number-drafts']}
          />
        </div>
      </div>
      <Header
        contentLeft={contentLeftFooter}
        contentRight={contentRightFooter}
        css={footerCss}
      />
    </div>
  );
};

export default CreateActivity;
