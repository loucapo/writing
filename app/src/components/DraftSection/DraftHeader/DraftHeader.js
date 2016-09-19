import React from 'react';

import draftHeader from './draftHeader.css';

const DraftHeader = () => {
  return (
    <header className={draftHeader.container}>
      <div className={draftHeader.active}>
        Drafts
      </div>
      <div>
        <a href="#">Student Submissions</a>
      </div>
    </header>
  );
};

export default DraftHeader;
