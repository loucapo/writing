import React, { PropTypes } from 'react';

import DraftHeader from './DraftHeader/DraftHeader';
import DraftList from './DraftList/DraftList';

import draftSection from './draftSection.css';

const DraftSection = props => {
  return (
    <div className={ draftSection.wrapper }>
      <DraftHeader />
      <DraftList Drafts={props.Drafts} />
    </div>
  );
};

DraftSection.propTypes = {
  Drafts: PropTypes.array
};

export default DraftSection;
