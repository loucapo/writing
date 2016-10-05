import React from 'react';

import Header from './../Header/Header';
import TitleSection from './TitleSection/TitleSection';

import createAssignment from './createAssignment.css';

const CreateAssignment = () => {
  let contentLeft = <div>Create Assignment</div>;
  let contentRight = <div>ENG 101 Composition</div>;
  return (
    <div className={createAssignment.pageSize}>
      <Header
        contentLeft={contentLeft}
        contentRight={contentRight}
      />
      <TitleSection />
      <div>Assignment Title</div>
      <div>
        <input
          type="text"
          size="80"
          placeholder="Help text"
          className={createAssignment.titleTextBox}
        />
      </div>
      <div>Assignment Prompt</div>
      <div>
        <textArea
          rows="10"
          cols="80"
          placeholder="Help text"
          className={createAssignment.promptTextArea}
        />
      </div>
      <div>Number of Drafts</div>
      <div>
        <input
          type="text"
          size="1"
          defaultValue="1"
        />
      </div>
    </div>
  );
};

export default CreateAssignment;
