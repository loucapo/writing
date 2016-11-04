import React, { PropTypes } from 'react';

import ActivityMenu from '../ActivityMenu/ActivityMenu';
import DraftList from './DraftList/DraftList';

import draftSection from './draftSection.css';

const DraftSection = ({drafts}) => {
  return (
    <div className={ draftSection.wrapper }>
      <DraftList drafts={drafts} />
    </div>
  );
};

DraftSection.propTypes = {
  drafts: PropTypes.array
};

export default DraftSection;
