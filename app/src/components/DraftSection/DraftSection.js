import React from 'react';

import DraftHeader from './DraftHeader/DraftHeader';
import DraftList from './DraftList/DraftList';

import draftSection from './draftSection.css';

const DraftSection = () => {
  return (
    <div className={ draftSection.wrapper }>
      <DraftHeader />
      <DraftList />
    </div>
  );
};

export default DraftSection;
