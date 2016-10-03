import React from 'react';

import createAssignment from './createAssignment.css';

const CreateAssignment = () => {
  return (
    <div className={createAssignment.pageSize}>
      <h1>Create Assignment</h1>
      <div className={createAssignment.description}>
        <div>Drafting and Revising Assignment</div>
        <div>ENG101 Introduction to Writing</div>
      </div>
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
